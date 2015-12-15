Template.editMuppet.events({
  'submit form': function (event) {
    event.preventDefault();

    var currentMuppet = this;

    var muppetProperties = {
      name: event.target.name.value,
      animalType: event.target.animalType.value,
      imgPath: event.target.imgPath.value
    };

    Muppets.update(currentMuppet._id, {
      $set: muppetProperties
    }, function (error) {
      if (error) {
        alert(error.reason);
      } else {
        Router.go('muppetDetails', currentMuppet);
      }
    });
  },

  'click #delete': function (event) {
    event.preventDefault();
    if (confirm('Delete this Muppet?')) {
      Muppets.remove(this._id);
      Router.go('muppetList');
    }
  }
});
