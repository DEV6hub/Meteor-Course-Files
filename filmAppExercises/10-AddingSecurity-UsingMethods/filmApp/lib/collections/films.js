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
    return (_.without(fieldNames, 'title', 'year', 'director', 'plot').length > 0);
  }
});

Meteor.methods({
  filmInsert: function (filmAttributes) {
    check(this.userId, String);
    check(filmAttributes, {
      title: String,
      director: String,
      year: String,
      plot: String
    });

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
      submitted: new Date()
    });

    var filmId = Films.insert(film);

    return {
      _id: filmId
    };

  }
});
