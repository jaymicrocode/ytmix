var Timeline = (function(){
  var 
    TimeDB = DB(),
    data = TimeDB.view('id'),
    Order = TimeDB.view('order'),
    maxPlayer = 2,
    isPlaying = true,
    Loaded = 0,

    Offset = 0,
    Player = {},
    Total,

    _sampleTimeout,
    Zoom = 85,
    Scale = 0.04, // ems per second
    UNIQ = 0;

  self.Data = TimeDB;
  self.Order= Order;

  $(function(){
    var 
      isDragging = false,
      keyListen = false;

    $("#now").click(function(){
      if(isDragging) {
        isDragging = false;
      } 
    });

    $("#now").css('opacity',0.6).draggable({
      axis: 'x',
      start:function(){ isDragging = true; },
      drag: function(){ $("#scale").css('margin-left', $("#now").offset().left); },
      stop: function(){ $("#scale").css('margin-left', $("#now").offset().left); }
    });

    // we instantiate [maxPlayers] swfobjects which will hold the ytids of the
    // videos we which to play.
    for(var ix = 0; ix < maxPlayer; ix++) {
      $("<div id=vidContainer-" + ix + ">").appendTo("#players");

      swfobject.embedSWF("http://www.youtube.com/apiplayer?" +
        "version=3&enablejsapi=1&playerapiid=player-" + ix,
        "vidContainer-" + ix, "188", "152", "9", null, null, 
        {allowScriptAccess: "always"}, {id: 'player-' + ix});
    }

    function zoomsize(){
      Zoom = Math.min(98, Zoom);
      Zoom = Math.max(5, Zoom);
      $("#scale").css('font-size', Zoom + "%");
    }

    $("#timeline").hover(
      function(){ keyListen = true },
      function(){ keyListen = false }
    ).mousewheel(function(e, delta) {
      Zoom += delta;
      zoomsize();
    });

    $(window).keyup(function(e) {
      if(!keyListen) { return }

      switch(e.which) {
        case 37: Timeline.seekTo(Offset - 60); break;
        case 46: Timeline.remove(Player.current); break;
        case 39: Timeline.seekTo(Offset + 60); break;
      }
    });
  });

  function updateytplayer() {
    ev.set('tick');

    // mechanics for moving the centroid
    if(Player.active.getCurrentTime) {
      var time = Player.active.getCurrentTime();

      if (time > 0 && Player.current) {

        _.each(_.values(Player.current.$link), function(which) {
          which.attr({
            href : 'http://www.youtube.com/watch?v=' + Player.current.ytid + "#at=" + Math.ceil(time) + "s",
            onclick: 'Timeline.pause()'
          });
        });

        if( Player.active.getPlaybackQuality() != 'large') {
          Player.active.setPlaybackQuality('large');
        }

        if(! ev.isset('timeline.dragging') ) {
          $("#control").css('left', - 100 * ((time + Player.current.offset) / Total) + "%");
        }

        if(Player.active.getDuration() - time == 0) {
          Offset += 1;
          Timeline.seekTo(Offset);
        } else {
          Offset = Player.current.offset + time;
        }
      }
    }
  }

  self.onYouTubePlayerReady = function(playerId) {
    var id = parseInt(playerId.substr(-1));
    Loaded ++;

    Player[id] = document.getElementById(playerId);
    Player[id].addEventListener('onStateChange', function(){ console.log(this, arguments); });

    if(Loaded == maxPlayer) {
      Player.sample = Player[1];
      setTimeout(function(){ ev.set('flash.load'); },250);
    }
  }

  ev.isset('flash.load', function(){
    Player.active = Player[0];
    setInterval(updateytplayer, 150);
  });

  function swap(x, y) {
    if(data[y]) {

      TimeDB.update(function(row) {
        if(row.id == x) {
          row.id = y;
        } else if (row.id == y) {
          row.id = x;
        }
      });

      Timeline.updateOffset();
      gen();
      if(Player.current.id == x || Player.current.id == y) {
        Timeline.seekTo(Offset);
      }
    }
  }

  function hook(id) {
    var node = data[id];

    node.$remove.click(function(){Timeline.remove(id); });
    node.$related.click(function(){
      if(!node.filter) {
        node.$related.addClass('on');
        ev.setadd('search.related', node.ytid);
        node.filter = true;
      } else {
        node.$related.removeClass('on');
        ev.setdel('search.related', node.ytid);
        node.filter = false;
      }
      ev.set('request-gen');
    });

    node.dom.hover(
      function(){ node.hover.css('display','block'); }, 
      function(){ node.hover.css('display','none'); }
    );
  }

  function gen(){
    var trackList = ev('playlist.tracks') || [];

    each(trackList, function(track, index) {
      if(Order[index] && track.ytid != Order[index].ytid) {
        remove(index);
      }
      if(!Order[index] || track.ytid != Order[index].ytid) {
        add(track);
      }
    });

    each(Order, function(value, index) {
      if(index >= trackList.length) {
        remove(index);
      } else if(value.ytid != trackList[index].ytid) {
        remove(index);
        add(value);
      }
    });

    /*$("#control").children().remove();

    for(var ix = 0; ix < UNIQ; ix++) {
      if(data[ix]) {
        $(".hover", data[ix].dom).css('display','none');
        $("#control").append(data[ix].dom);
        hook(ix);
      }
    }*/
  }

  function add(obj, opts) {
    opts = opts || {};

    loadRelated(obj);

    var 
      myid = UNIQ ++,

      $remove = $("<a>X</a>").addClass('close'),
      $control = $("<span />"),
      $move = $("<a>move</a>").appendTo($control),
      $related = $("<a>related</a>").appendTo($control),
      $link = {
        text: $("<a />").attr({
            target: '_blank',
            href: "http://www.youtube.com/watch?v=" + obj.ytid
          }).html(obj.title),

        image: $("<a />")
          .addClass('image')
          .attr({
            target: '_blank',
            href: "http://www.youtube.com/watch?v=" + obj.ytid
          }).html("<img class=thumb src=http://i.ytimg.com/vi/" + obj.ytid + "/hqdefault.jpg?w=188&h=141>")
      },
      
      hoverControl = $("<span class=timeline-hover />")
        .append($link.image)
        .append($remove)
        .append($control)
        .append($("<p />")
          .append($link.text)
          .append(Utils.secondsToTime(obj.length))
        ),

      wrap = $("<span class=timeline-hover-wrap />").append(hoverControl);

    Timeline.init();

    var record = TimeDB.insert({
      $remove: $remove,
      $related: $related,
      $move: $move,
      $link: $link,
      filter: false,
      title: obj.title,
      hover: wrap,
      id: myid,
      ytid: obj.ytid,
      active: true,
      length: obj.length,

      dom: $("<div />")
        .css('width', obj.length * Scale + 'em')
        .addClass('track')
        .append(wrap)
        .append("<span class=title>" + obj.title + "</span>")
    });

    ev('tick', function(){ record[0].dom.appendTo('#control'); }, {once: true});

    hook(myid); 

    Timeline.updateOffset();

    db.find('ytid', obj.ytid)
      .update({playlistid: myid});
  }

  function remove(index) {
    // This track was just removed from the timeline.
    // This means that we need to removed it from the
    // data view of the timeline and reflect the fact
    // that it was removed in the larger database.
    db.find('ytid', data[index].ytid)
      .update(function(obj){
        // increment the announcement that 
        // this was removed at some point and
        // may not be liked
        obj.removed++;
        delete obj.playlistid;

        if(obj.related) {
          db
            .find('ytid', db.isin(obj.related))
            .update(function(record){
              record.reference = _.without(record.reference, data[index].ytid);
            });
        }
      });

    // remove it from the dom
    var dom = data[index].dom;

    db.find({reference: function(field) {
      return field.length == 0;
    }}).remove();

    var removed = TimeDB.remove({id: index});

    if(removed.length) {
      if(removed[0].offset < Offset) {
        Offset -= removed[0].length;
        Timeline.seekTo(Offset);
      } else {
        Timeline.updateOffset();
      }
    }

    ev('tick', function(){ dom.remove(); }, {once: true});
  };

  ev('playlist.tracks', gen);

  return {
    player: Player,
    data: data,
    gen: gen,

    toStore: function(){
      var store = [];

      TimeDB
        .find()
        .sort('id', 'asc')
        .each(function(which) {
          store.push({
            length: which.length,
            title: which.title,
            ytid: which.ytid
          })
        });

      return store;
    },

    remove: function(index){
      var playlist = ev('playlist.tracks');
      status("Removed " + Order[index].title);

      playlist.splice(index, 1);
      ev('playlist.tracks', playlist);

      ev.set('request-gen');
    },

    pause: function(){
      ev.isset('flash.load', function(){
        if(isPlaying) {
          isPlaying = false;

          Player[0].pauseVideo();
          Player[1].pauseVideo();

          $("#now").css('background','red');
        }
      })
    },

    pauseplay: function(){
      ev.isset('flash.load', function(){
        if(isPlaying) {
          isPlaying = false;
          Player.active.pauseVideo();
          $("#now").css('background','red');
        } else {
          isPlaying = true;
          Player.active.playVideo();
          $("#now").css('background','#99a');
        }
      });
      return isPlaying;
    },

    updateOffset: function(){
      var 
        aggregate = 0, 
        order = 0,
        lastIndex = false;
      Total = runtime(data);

      for(index in data) {
        data[index].order = order;
        order++;
        if(lastIndex !== false) {
          data[lastIndex].next = index;
          data[index].previous = lastIndex;
        }
        lastIndex = index;
        data[index].offset = aggregate;
        aggregate += (parseInt(data[index].length) || 0);
      }
      TimeDB.sync();
    },

    play: function(dbid, offset) {
      if(!arguments.length) {
        return Player.active.playVideo();
      }

      offset = offset || 0;

      ev.isset('flash.load', function(){
        if(!data[dbid]) {
          Timeline.pause();
        } else if(Player.current != data[dbid]) {
          Player.current = data[dbid];
          Player.active.loadVideoById(Player.current.ytid, offset);
          ev('active.track', Player.current);
          Player.start = $(data[dbid].dom).offset().left - $("#control").offset().left;
        }
      });
    },

    seekTo: function(offset) {
      if(!offset) {
        offset = Offset;
      }

      Player.sample.pauseVideo();
      Timeline.updateOffset();

      var absolute = (offset < 1) ? offset * Total : offset;

      absolute = Math.max(0, absolute);
      absolute = Math.min(Total, absolute);

      var track = TimeDB.findFirst(function(row) { return (row.offset < absolute && (row.offset + row.length) > absolute) });

      if(track) {
        if(track.id != Player.current.id) {
          Timeline.play(track.id, absolute - track.offset);
        } else {
          Player.active.seekTo(absolute - track.offset);
        }
      }
    },

    updatePosition: function() {
      var 
        offset = $("#control").offset().left - $("#scale").offset().left,
        relative = offset / $("#control").width();

      Timeline.seekTo( - relative);
    },

    init: function() {
      ev.isset('timeline.init', function(){
        $("#control").draggable({
          axis: 'x',
          start: function(){
            ev.set('timeline.dragging');
          },
          stop: function() {
            ev.unset('timeline.dragging');
            Timeline.updatePosition();
          }
        });
      });

      ev.set('timeline.init');
    },

    sample: function(obj) {
      ev.isset('flash.load', function(){
        if(obj.playlistid) {
          Timeline.seekTo(Order[obj.playlistid].offset + 2);
          return;
        }

        if(_sampleTimeout) {
          clearTimeout(_sampleTimeout);
        }

        Player.active.pauseVideo();

        ev('active.track', obj);
        ev('preview.track', obj);

        Player.sample.loadVideoById(obj.ytid, 10);
        Player.sample.playVideo();

        setTimeout(function(){
          if( Player.sample.getPlaybackQuality() != 'large') {
            Player.sample.setPlaybackQuality('large');
          }
        }, 100);

        _sampleTimeout = setTimeout(function(){
          Player.sample.pauseVideo();
          Player.active.playVideo();

          ev('active.track', Player.current);
          _sampleTimeout = 0;
        }, 45 * 1000);
      });
    },

    add: function(obj, opts) {
      opts = opts || {};

      status("Added " + obj.title);
      ev.push('playlist.tracks', obj);

      if(opts.noplay != true) {
        Timeline.play(UNIQ - 1);
      }
    }
  };
})();

