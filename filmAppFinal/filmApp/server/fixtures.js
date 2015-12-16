if (Films.find().count() === 0) {

  var now = new Date().getTime();
  //create two users

  //User Fixtures
  var ripId = Meteor.users.insert({
    profile: {
      name: 'Ripley'
    }
  });
  var rip = Meteor.users.findOne(ripId);

  var rjId = Meteor.users.insert({
    profile: {
      name: 'RJ MacReady'
    }
  });
  var rj = Meteor.users.findOne(rjId);

  var adId = Meteor.users.insert({
    profile: {
      name: 'Andy Dufresne'
    }
  });
  var andy = Meteor.users.findOne(adId);

  var mpId = Meteor.users.insert({
    profile: {
      name: 'Ms. Piggy'
    }
  });
  var piggy = Meteor.users.findOne(mpId);

  var wilId = Meteor.users.insert({
    profile: {
      name: 'Wilsoooon'
    }
  });
  var wilson = Meteor.users.findOne(wilId);

  var quintId = Meteor.users.insert({
    profile: {
      name: 'Quint'
    }
  });
  var quint = Meteor.users.findOne(quintId);

  var neoId = Meteor.users.insert({
    profile: {
      name: 'Neo'
    }
  });
  var neo = Meteor.users.findOne(neoId);

  var fgId = Meteor.users.insert({
    profile: {
      name: 'Forrest Gump'
    }
  });
  var fg = Meteor.users.findOne(fgId);

  var jhId = Meteor.users.insert({
    profile: {
      name: 'John Hammond'
    }
  });
  var jh = Meteor.users.findOne(jhId);

  var jrId = Meteor.users.insert({
    profile: {
      name: 'Johnny Rico'
    }
  });
  var jr = Meteor.users.findOne(jrId);

  var skId = Meteor.users.insert({
    profile: {
      name: 'Stanley Kubrick'
    }
  });
  var sk = Meteor.users.findOne(skId);

  var rdId = Meteor.users.insert({
    profile: {
      name: 'Rick Deckard'
    }
  });
  var rd = Meteor.users.findOne(rdId);

  var jmId = Meteor.users.insert({
    profile: {
      name: 'Judy Maxwell'
    }
  });
  var jm = Meteor.users.findOne(jmId);

  var hamId = Meteor.users.insert({
    profile: {
      name: 'Hamlet'
    }
  });
  var ham = Meteor.users.findOne(hamId);


  //Film Fixtures
  var jawsId = Films.insert({
    title: "Jaws",
    year: "1975",
    userId: quint._id,
    author: quint.profile.name,
    director: "Steven Spielberg",
    plot: "When a gigantic great white shark begins to menace the small island community of Amity, a police chief, a marine scientist and grizzled fisherman set out to stop it.",
    submitted: new Date(),
    commentsCount: 3
  });

  //Comment Fixtures for Jaws Film
  Comments.insert({
    filmId: jawsId,
    userId: rj._id,
    author: rj.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: "I know I'm human!"
  });

  Comments.insert({
    filmId: jawsId,
    userId: quint._id,
    author: quint.profile.name,
    submitted: new Date(now - 20 * 1200 * 40000),
    body: "Here's to swimmin' with bow-legged women."
  });

  Comments.insert({
    filmId: jawsId,
    userId: fg._id,
    author: fg.profile.name,
    submitted: new Date(now - 20 * 1200 * 20),
    body: " When I got tired, I slept. When I got hungry, I ate. When I had to go, you know, I went."
  });

  var alienId = Films.insert({
    title: "Alien",
    year: "1979",
    userId: rip._id,
    author: rip.profile.name,
    director: "Ridley Scott",
    plot: "The commercial vessel Nostromo receives a distress call from an unexplored planet. After searching for survivors, the crew heads home only to realize that a deadly bioform has joined them",
    submitted: new Date(now - 7 * 3600 * 40),
    commentsCount: 0
  });

  var thingId = Films.insert({
    title: "The Thing",
    year: "1982",
    userId: rj._id,
    author: rj.profile.name,
    director: "John Carpenter",
    plot: "Scientists in the Antarctic are confronted by a shape-shifting alien that assumes the appearance of the people it kills.",
    submitted: new Date(now - 7 * 3600 * 20),
    commentsCount: 0
  });

  Films.insert({
    title: "The Shawshank Redemption",
    year: "1994",
    userId: andy._id,
    author: andy.profile.name,
    director: "Frank Darabont",
    plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 0
  });

  Films.insert({
    title: "The Muppet Movie",
    year: "1979",
    userId: piggy._id,
    author: piggy.profile.name,
    director: "James Frawley",
    plot: "Kermit and his new found friends trek across America to find success in Hollywood, but a frog-legs merchant is after Kermit.",
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 0
  });

  Films.insert({
    title: "Cast Away",
    year: "2000",
    userId: wilson._id,
    author: wilson.profile.name,
    director: "Robert Zemeckis",
    plot: "A FedEx executive must transform himself physically and emotionally to survive a crash landing on a deserted island.",
    submitted: new Date(now - 7 * 1200 * 1000),
    commentsCount: 0
  });

  Films.insert({
    title: "Matrix",
    year: "1999",
    userId: neo._id,
    author: neo.profile.name,
    director: "Andy Wachowski & Lana Wachowski",
    plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    submitted: new Date(now - 7 * 1200 * 1000),
    commentsCount: 0
  });

  Films.insert({
    title: "Forrest Gump",
    year: "1994",
    userId: fg._id,
    author: fg.profile.name,
    director: "Robert Zemeckis",
    plot: "Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.",
    submitted: new Date(now - 7 * 1200 * 1000),
    commentsCount: 0
  });

  Films.insert({
    title: "Jurrassic Park",
    year: "1993",
    userId: jh._id,
    author: jh.profile.name,
    director: "Steven Speilberg",
    plot: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
    submitted: new Date(now - 7 * 1200 * 1000),
    commentsCount: 0
  });

  Films.insert({
    title: "Starship Troopers",
    year: "1997",
    userId: fg._id,
    author: fg.profile.name,
    director: "Paul Verhoeven",
    plot: "Humans in a fascistic, militaristic future do battle with giant alien bugs in a fight for survival.",
    submitted: new Date(now - 7 * 1200 * 1000),
    commentsCount: 0
  });

  Films.insert({
    title: "Hamlet",
    year: "1996",
    userId: ham._id,
    author: ham.profile.name,
    director: "Kenneth Branagh",
    plot: "Hamlet, Prince of Denmark, returns home to find his father murdered and his mother remarrying the murderer, his uncle. Meanwhile, war is brewing.",
    submitted: new Date(now - 7 * 1200 * 1000),
    commentsCount: 0
  });


  Films.insert({
    title: "What's Up, Doc?",
    year: "1972",
    userId: jm._id,
    author: jm.profile.name,
    director: "Peter Bogdanovich",
    plot: "The accidental mix-up of four identical plaid over-night bags leads to a series of increasingly wild and wacky situations.",
    submitted: new Date(now - 7 * 1200 * 1000),
    commentsCount: 0
  });


  Films.insert({
    title: "Eyes Wide Shut",
    year: "1999",
    userId: sk._id,
    author: sk.profile.name,
    director: "Stanley Kubrick",
    plot: "A New York City doctor, who is married to an art curator, pushes himself on a harrowing and dangerous night-long odyssey of sexual and moral discovery after his wife admits that she once almost cheated on him.",
    submitted: new Date(now - 7 * 1200 * 1000),
    commentsCount: 0
  });


  Films.insert({
    title: "2001: A Space Odyssey",
    year: "1968",
    userId: sk._id,
    author: sk.profile.name,
    director: "Stanley Kubrick",
    plot: "Humanity finds a mysterious, obviously artificial object buried beneath the Lunar surface and, with the intelligent computer H.A.L. 9000, sets off on a quest.",
    submitted: new Date(now - 7 * 1200 * 1000),
    commentsCount: 0
  });


  Films.insert({
    title: "Blade Runner",
    year: "1982",
    userId: rd._id,
    author: rd.profile.name,
    director: "Ridley Scott",
    plot: "A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
    submitted: new Date(now - 7 * 1200 * 1000),
    commentsCount: 0
  });

  // For a blank film loop

  // for (var i = 0; i < 10; i++){
  //   Films.insert({
  //     title: "Test film #" + i,
  //     year: "1955",
  //     director: "Alfred Hitchcock",
  //     plor: "this",
  //     author: frank.profile.name,
  //     userId: frank._id,
  //     submitted: new Date(now - i *3600 * 1000),
  //   });
  // }
}
