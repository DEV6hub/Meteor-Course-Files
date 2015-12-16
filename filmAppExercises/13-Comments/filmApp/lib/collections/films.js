Films = new Mongo.Collection('films');

Films.allow({
  update: function (userId, film) {
    return ownsDocument(userId, film);
  },
  remove: function (userId, film) {
    return ownsDocument(userId, film);
  }
});

Films.deny({
  update: function (userId, film, fieldNames) {
    var errors = validateFilm(modifier.$set);
    return !_.isEmpty(errors);
  }
});

validateFilm = function (film) {
  var errors = {};
  if (!film.title)
    errors.title = "Please fill in the film's title";

  if (!film.year)
    errors.year = "Please fill in the film's year";

  if (!film.director)
    errors.director = "Please fill in the film's director";

  if (!film.plot)
    errors.plot = "Please fill in the film's plot";

  return errors;
};

Meteor.methods({
  filmInsert: function (filmAttributes) {
    check(this.userId, String);
    check(filmAttributes, {
      title: String,
      director: String,
      year: String,
      plot: String
    });

    var errors = validateFilm(filmAttributes);
    if (!_.isEmpty(errors)) {
      throw new Meteor.Error('invalid-film', 'You must set a title, year, director, and a short plot for your film to be added.');
    }
    var duplicateFilm = Films.findOne({
      title: filmAttributes.title,
      year: filmAttributes.year,
      director: filmAttributes.director
    });
    if (duplicateFilm) {
      return {
        filmExists: true,
        _id: duplicateFilm._id
      };
    }

    var user = Meteor.user();
    var film = _.extend(filmAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date(),
      commentsCount: 0
    });

    var filmId = Films.insert(film);

    return {
      _id: filmId
    };

  }
});
