Template.filmSubmit.events({
  'submit form': function (e) {
    e.preventDefault();

    var film = {
      title: $(e.target).find('[name=title]').val(),
      year: $(e.target).find('[name=year]').val(),
      director: $(e.target).find('[name=director]').val(),
      plot: $(e.target).find('[name=plot]').val()
    };

    film._id = Films.insert(film);
    Router.go('filmPage', film);
  }
});
