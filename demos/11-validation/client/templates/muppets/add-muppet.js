Template.addMuppet.onCreated(function () {
  Session.set('addMuppetErrors', {});
});

Template.addMuppet.helpers({
  errorMessage: function (field) {
    return Session.get('addMuppetErrors')[field];
  },
  errorClass: function (field) {
    return Session.get('addMuppetErrors')[field] ? 'has-error' : '';
  }
});

Template.addMuppet.events({
  'submit form': function (event) {
    event.preventDefault();

    var muppet = {
      name: event.target.name.value,
      animalType: event.target.animalType.value,
      imgPath: event.target.imgPath.value
    };

    var errors = validateMuppet(muppet);
    if (!_.isEmpty(errors)) {
      return Session.set('addMuppetErrors', errors);
    }

    Meteor.call('addMuppet', muppet, function (error, result) {
      if (error) {
        return throwError(error.reason);
      }

      if (result.muppetExists) {
        throwError('This muppet already exists');
      }

      Router.go('muppetDetails', {
        _id: result._id
      });
    });
  }
});
