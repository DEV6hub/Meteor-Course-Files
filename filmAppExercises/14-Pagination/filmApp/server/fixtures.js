if (Films.find().count() === 0) {
  var now = new Date().getTime();

  var frankId = Meteor.users.insert({
    profile: {
      name: 'Frank Zappa'
    }
  });
  var frank = Meteor.users.findOne(frankId);

  var leoId = Meteor.users.insert({
    profile: {
      name: 'Leonard Bernstein'
    }
  });
  var leo = Meteor.users.findOne(leoId);

  var jawsId = Films.insert({
    title: "Jaws",
    year: "1975",
    userId: frank._id,
    author: frank.profile.name,
    director: "Steven Spielberg",
    plot: "When a gigantic great white shark begins to menace the small island community of Amity, a police chief, a marine scientist and grizzled fisherman set out to stop it.",
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2
  });

  Films.insert({
    title: "Alien",
    year: "1979",
    userId: frank._id,
    author: frank.profile.name,
    director: "Ridley Scott",
    plot: "The commercial vessel Nostromo receives a distress call from an unexplored planet. After searching for survivors, the crew heads home only to realize that a deadly bioform has joined them",
    submitted: new Date(now - 3 * 3600 * 40),
    commentsCount: 0
  });

  Films.insert({
    title: "The Thing",
    year: "1982",
    userId: leo._id,
    author: leo.profile.name,
    director: "John Carpenter",
    plot: "Scientists in the Antarctic are confronted by a shape-shifting alien that assumes the appearance of the people it kills.",
    submitted: new Date(now - 3 * 3600 * 20),
    commentsCount: 0
  });

  Comments.insert({
    filmId: jawsId,
    userId: frank._id,
    author: frank.profile.name,
    submitted: new Date(now - 20 * 1200 * 20),
    body: "This film rocks!"
  });

  for (var i = 0; i < 20; i++) {
    Films.insert({
      title: "Test film #" + i,
      year: "1955",
      director: "Alfred Hitchcock",
      plor: "this",
      author: frank.profile.name,
      userId: frank._id,
      submitted: new Date(now - i * 3600 * 1000),
      commentsCount: 0
    });
  }

  Comments.insert({
    filmId: jawsId,
    userId: leo._id,
    author: leo.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: "This is one of my favourite films!",
  });
}
