<? 

function pl_setFavorite($params) {
  return run("insert into favorite " . toInsert(getAssoc($params, 'user, ytid')));
}

function pl_getFavorite($params) {
  return run("select * from favorite where " . toUpdate(getAssoc($params, 'user')));
}

function pl_delFavorite($params) {
  return run("delete from favorite where " . toUpdate(getAssoc($params, 'user, ytid')));
}
