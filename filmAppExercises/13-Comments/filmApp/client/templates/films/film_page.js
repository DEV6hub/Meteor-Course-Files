Template.filmPage.helpers({
  comments: function () {
    return Comments.find({
      filmId: this._id
    });
  }
});
