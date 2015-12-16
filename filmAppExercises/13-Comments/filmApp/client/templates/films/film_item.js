Template.filmItem.helpers({
  ownsFilm: function () {
    return this.userId === Meteor.userId();
  }
});
