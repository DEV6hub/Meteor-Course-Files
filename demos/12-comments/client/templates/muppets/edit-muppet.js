Template.editMuppet.onCreated(function () {
  Session.set('editMuppetErrors', {});
});

Template.editMuppet.helpers({
  errorMessage: function (field) {
    return Session.get('editMuppetErrors')[field];
  },
  errorClass: function (field) {
    return Session.get('editMuppetErrors')[field] ? 'has-error' : '';
  }
});

Template.editMuppet.events({
  'submit form': function (event) {
    event.preventDefault();

    var currentMuppet = this;

    var muppetProperties = {
      name: event.target.name.value,
      animalType: event.target.animalType.value,
      imgPath: event.target.imgPath.value
    };

    var errors = validateMuppet(muppetProperties);
    if (!_.isEmpty(errors)) {
      return Session.set('editMuppetErrors', errors);
    }

    Muppets.update(currentMuppet._id, {
      $set: muppetProperties
    }, function (error) {
      if (error) {
        throwError(error.reason);
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
