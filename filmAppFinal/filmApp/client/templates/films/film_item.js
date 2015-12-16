Template.filmItem.helpers({
  ownsFilm: function () {
    return this.userId === Meteor.userId();
  },

  submittedText: function () {
    return this.submitted.toDateString();
  }
});
