Template.filmSubmit.events({
  'submit form': function (e) {
    e.preventDefault();

    var user = Meteor.user();

    var film = {
      title: $(e.target).find('[name=title]').val(),
      year: $(e.target).find('[name=year]').val(),
      director: $(e.target).find('[name=director]').val(),
      plot: $(e.target).find('[name=plot]').val(),
      author: user.username,
      userId: user._id,
      submitted: new Date()
    };

    film._id = Films.insert(film);
    Router.go('filmPage', film);
  }
});
