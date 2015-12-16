Films = new Mongo.Collection('films');

Films.allow({
  insert: function (userId, doc) {
    return !!userId;
  },
  update: function (userId, film) {
    return ownsDocument(userId, film);
  },
  remove: function (userId, film) {
    return ownsDocument(userId, film);
  }
});

Films.deny({
  update: function (userId, film, fieldNames) {
    return (_.without(fieldNames, 'title', 'year', 'director', 'plot').length > 0);
  }
});
