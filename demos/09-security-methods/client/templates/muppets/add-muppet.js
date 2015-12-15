Template.addMuppet.events({
  'submit form': function (event) {
    event.preventDefault();

    var muppet = {
      name: event.target.name.value,
      animalType: event.target.animalType.value,
      imgPath: event.target.imgPath.value
    };

    Meteor.call('addMuppet', muppet, function (error, result) {
      if (error) {
        return alert(error.reason);
      }

      if (result.muppetExists) {
        alert('This muppet already exists');
      }

      Router.go('muppetDetails', {
        _id: result._id
      });
    });
  }
});
