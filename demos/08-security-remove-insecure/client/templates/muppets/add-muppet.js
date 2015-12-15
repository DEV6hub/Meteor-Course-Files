Template.addMuppet.events({
  'submit form': function (event) {
    event.preventDefault();

    var muppet = {
      name: event.target.name.value,
      animalType: event.target.animalType.value,
      imgPath: event.target.imgPath.value,
      userId: Meteor.userId(),
      user: Meteor.user().username,
      submitted: new Date()
    };

    muppet._id = Muppets.insert(muppet);
    Router.go('muppetDetails', muppet);
  }
});
