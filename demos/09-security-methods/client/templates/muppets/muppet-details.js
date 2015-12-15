Template.muppetDetails.helpers({
  ownsMuppet: function () {
    return this.userId === Meteor.userId();
  }
});
