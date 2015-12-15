Meteor.publish('muppets', function () {
  return Muppets.find();
});

Meteor.publish('comments', function (muppetId) {
  check(muppetId, String);
  return Comments.find({
    muppetId: muppetId
  });
});
