Template.muppetDetails.helpers({
  ownsMuppet: function () {
    return this.userId === Meteor.userId();
  },
  comments: function () {
    return Comments.find({
      muppetId: this._id
    });
  }
});
