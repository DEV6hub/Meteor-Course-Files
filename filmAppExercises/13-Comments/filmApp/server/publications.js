Meteor.publish('films', function () {
  return Films.find();
});

Meteor.publish('comments', function (filmId) {
  check(filmId, String);
  return Comments.find({
    filmId: filmId
  });
});
