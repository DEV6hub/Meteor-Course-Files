Meteor.publish('films', function (options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Films.find({}, options);
});

Meteor.publish('singleFilm', function (id) {
  check(id, String);
  return Films.find(id);
});

Meteor.publish('comments', function (filmId) {
  check(filmId, String);
  return Comments.find({
    filmId: filmId
  });
});
