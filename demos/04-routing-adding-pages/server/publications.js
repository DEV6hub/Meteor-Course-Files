Meteor.publish('muppets', function () {
  return Muppets.find();
});
