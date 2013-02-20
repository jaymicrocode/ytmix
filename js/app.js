// See utils.js for how a queue could ostensibly work.
// At the time of the comment's authorship, it's being
// used just like an array.
_remote.queue = new Queue();

// Adds vids in the format 
// {length: sec, title: text, ytid: youtube id}
function addVids(vidList, backref) {
  // insert each related video into our
  // db of known videos if needed
  each(vidList, function(video) {
    db.insert(video).update(function(data){
      data.reference.push(backref.ytid);
      data.removed = data.removed || 0;
    });
  })
}

// Loads the videos related to a db object that
// should have ytid defined.  It is also designed
// so it doesn't hose the serve with a bunch of
// requests but instead tries to space them out
// so that one finishes, some time lapses, then
// another one starts.
//
// The related videos for the playlist are stored
// as the database object which has the problem
// of related videos becoming stale and delisted,
// as of now (2011/11/27) unsolved, but it avoids
// the problem of having to have this stagnant
// request cycle every time a user tries to load
// the playlist for his or her own use.
//
// Stale links should be taken care of OOB and not
// be a deferred problem that justifies funky looking
// incremental loads.
//
function loadRelated(obj, opts){
  if(_remote.active) {
    _remote.queue.push(function(){
      loadRelated(obj, opts);
    });
    return;
  }

  var match = {ytid: obj.ytid};
  
  // The related entry will be null (see the template in
  // _init_.js for more info) unless this call is made
  if(
      !db.findFirst(match).related || 
      !db.findFirst(match).related.length
    ) {

    Toolbar.status("Adding related " + obj.title);
    // This "mutex like" object is to
    // make sure that we don't request
    // more then one related at a time.
    _remote.active = true;

    // The match happens to be the same as the server
    // query in this case
    $.getJSON( 'api/related.php', match, function (data){
      addVids(data.related, obj);

      db
        .find(match)
        .update({
           related: db.find({ytid: db.isin(_.pluck(data.related, 'ytid'))})
        });

      Store.saveTracks();
      ev.set('request_gen');

      // This makes sure that we don't hammer
      // the server to get related videos
      setTimeout(function(){
        _remote.active = false;
        _remote.queue.doshift();
      }, 1000);
    });
  } else { 
    _remote.queue.doshift();
  }
}

// This is on the splash page. It loads
// the recent history of tracks that have
// been previously played.
function loadHistory(){
  ev.isset('recent', function(data) {

    var row;
    each(data, function(which, ix) {
      if(!(ix % 4)) {
        row = $("<div />").addClass("row").appendTo("#splash-history");
      }

      which.preview = JSON.parse(which.preview);

      var play = $("<img class=play src=css/play.png />")
        .click(function(){
          ev('app_state', 'main');
          Store.get(which.id);
        }),
        container = $("<span />")
          .addClass("splash-container")
          .addClass("span3")
          .html(
            Splash.template({
              ytList: which.preview.tracks ? which.preview.tracks.slice(0, 4) : [],
              title: which.name,
              count: which.preview.count,
              duration: Utils.secondsToTime(which.preview.length)
            })
          );

      container.hover(
        function() { play.fadeIn() },
        function() { play.fadeOut() }
      ).append(play).appendTo(row);
    });

    $("#history").fadeIn();
  });
}

// This is the loading of the tracks into the database.
ev.test('tracklist', function(data, meta) {
  if(_.isArray(data[0])) {
    db.insert(
      DB.objectify(
        Store.remoteKeys,
        data
      )
    );
  } else {
    db.insert( data );
  }

  meta.done(true);
});

var Search = {
  id: 0,
  net: function(query) {
    $.getJSON('api/ytsearch.php', { 
        id: ++Search.id,
        query: query
      }, function(res) {

      _.each(
        res.vidList,
        Timeline.add
      );

      ev.set('request_gen', {force: true});
    });
  },
  artist: function(who) {
    $("#normal-search").val(who);
  },
  related: function(ytid) {
    loadRelated(db.findFirst('ytid', ytid));
  },
  init: function(){
    var 
      lastSearch = '', 
      input = $("#normal-search"),

      // These indexes make sure that we don't generate old search results
      // that may have asynchronously came in later than newer ones
      searchID = 0, 
      lastID = 0;

    $("#clear-search").click(function(){ $("#normal-search").val(''); });

    Utils.onEnter("#initial-search", function(){
      ev('app_state', 'main');

      input.val(this.value);

      ev.isset('search.results', function(results) { 
        ev.isset('id', function(){
          ev.push('tracklist', results[0]); 
        });
      });
    });

    input.focus(function(){ this.select(); });

    // We probe to see if the search query has changed.
    // And if so we instantiate an image based on that
    // Similar to google instant and ytinstant.
    setInterval(function(){
      var query = input.val();

      if(query != lastSearch) {

        ev('search_query', query);
        lastSearch = query;

      }
    }, 250);
  
    _get('initial-search').focus();
  }
};

ev({
  // The app_state variable maintains whether the application is
  // at the splash screen or at a specific playlist.  We can check
  // for double fires with the meta.old functions (see evda.js)
  'app_state': function(state, meta) {
    if(state == meta.old) {
      return;
    } 

    if(state == 'splash') {
      // If we go to the splash page ... realistically, "back" to it,
      // then we just force a reload
      if (ev.isset('tracklist')) {
        location.reload();
      } else {
        ev.unset('id','tracklist','name');
        db.find().remove();
        Timeline.pause();
        $(".main-app").css('display','none');
        $("#splash").css('display','block');
        loadHistory();
        document.body.style.overflow = 'auto';
      }
    } else if (state == 'main') {
      $(".main-app").css({
        opacity: 0,
        display: 'inline-block'
      }).animate({
        opacity: 1
      }, 1000);

      $("#splash").css('display','none');
      document.body.style.overflow = 'hidden';
    }
  },

  'search_related': function(list) {
    if(list.length) {
      $("#search-context-title")
        .css('display','inline-block')
        .html("related&#9660;");
    } else {
      $("#search-context-title").css('display','none');
    }
  },

  'name': function(name, meta) { 
    document.title = name + " on Audisco";
    $("#playlist-name").html(name);

    if(meta.old) {
      remote({
        func: 'update',
        name: name,
        id: ev('id')
      });
    }
  },

  'active_track': function(obj){
    Toolbar.status("Playing " + obj.title);
    ev.set('request_gen');
  },
});

function findStatus(idList, cb) {
  var status = [],
      count = idList.length,
      subgroup,
      current = 0;

  while(idList.length) {
    subgroup = idList.splice(0, 50);
    $.getJSON("https://www.googleapis.com/youtube/v3/videos?" + [
        "id=" + subgroup.join(','), 
        "part=contentDetails",
        "key=AIzaSyAHtzuv9cF6sdFbIvBWoXhhflxcCFz5qfA"
      ].join('&'), function(res) {
      _.each(res.items, function(row) {
        console.log("(status) " + row.id);
        status.push( row );
        current++;
      });
      if(current >= count) {
        cb(status);
      }
    });
  }
}

// The great db.js... yes it is this awesome.
function updateBlackList () {
  findStatus(db.find().select('ytid'), function(what) { 
    DB()
      .insert(what)
      .find( DB(".contentDetails.regionRestriction.blocked.indexOf('US') > -1") )
      .select('id')
      .each(Timeline.remove);
  });
}

$(function(){
  Results.init();
  Toolbar.init();
  Timeline.init();
  Search.init();

  $("#volume-down").click(function(){
    ev.set("volume", Math.max(ev('volume') - 10, 0));
  });
  $("#volume-up").click(function(){
    ev.set("volume", Math.min(ev('volume') + 10, 100));
  });
  // User ids for the favorites feature
  ev.setter('uid', function(done){
    if(localStorage['uid']) {
      done(localStorage['uid']);
    } else {
      remote({
        func: 'getUser',
        onSuccess: done
      });
    }
  });
  ev.isset('uid', function(uid){
    localStorage['uid'] = uid;
  });

  window.Scrubber = {
    real: { 
      dom: $("#real-scrubber"),
      attach: function(where) {
        if(Scrubber.real.container != where) {
          Scrubber.real.remove();
          Scrubber.real.container = where;
          Scrubber.real.dom.appendTo(where);
          Scrubber.real.container.addClass("active").css('display','block');
          Scrubber.real.container.parent().addClass("active");
        }
      },
      remove: function() {
        if(Scrubber.real.container) {
          Scrubber.real.container.removeClass("active");
          Scrubber.real.container.parent().removeClass("active");
          Scrubber.real.container = false;
          Scrubber.real.dom.detach().appendTo("#offscreen");
        }
      } },
    phantom: { dom: $("#phantom-scrubber") }
  };
  
  Scrubber.phantom.dom.click(function() {
    var entry = db.findFirst({ ytid: Scrubber.phantom.id });
    Timeline.play(Scrubber.phantom.id, entry.length * Scrubber.phantom.offset);
  });
  Splash.template = _.template( $("#T-Preview").html() );
});

