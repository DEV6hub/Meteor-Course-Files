Template.filmsList.helpers({
  films: function () {
    return Films.find();
  }
});
