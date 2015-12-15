Template.addMuppet.events({
  'submit form': function (event) {
    event.preventDefault();

    var muppet = {
      name: event.target.name.value,
      animalType: event.target.animalType.value,
      imgPath: event.target.imgPath.value
    };

    muppet._id = Muppets.insert(muppet);
    Router.go('muppetDetails', muppet);
  }
});
