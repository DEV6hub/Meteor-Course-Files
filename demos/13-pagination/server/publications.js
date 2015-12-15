Meteor.publish('muppets', function (options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Muppets.find({}, options);
});

Meteor.publish('singleMuppet', function (id) {
  check(id, String);
  return Muppets.find(id);
});

Meteor.publish('comments', function (muppetId) {
  check(muppetId, String);
  return Comments.find({
    muppetId: muppetId
  });
});
