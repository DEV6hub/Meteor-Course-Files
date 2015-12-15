if (Muppets.find().count() === 0) {
  Accounts.createUser({
    username: 'jimHenson',
    password: 'password',
    profile: {
      name: 'Jim Henson'
    }
  });

  var jim = Meteor.users.findOne({
    username: 'jimHenson'
  });

  Accounts.createUser({
    username: 'frankOz',
    password: 'password',
    profile: {
      name: 'Frank Oz'
    }
  });

  var frank = Meteor.users.findOne({
    username: 'frankOz'
  });

  Accounts.createUser({
    username: 'daveGoelz',
    password: 'password',
    profile: {
      name: 'Dave Goelz'
    }
  });

  var dave = Meteor.users.findOne({
    username: 'daveGoelz'
  });

  var kermitId = Muppets.insert({
    name: 'Kermit',
    animalType: 'Frog',
    imgPath: '/images/kermit.jpg',
    userId: jim._id,
    user: jim.username,
    submitted: new Date(),
    commentCount: 1
  });

  Comments.insert({
    muppetId: kermitId,
    userId: jim._id,
    user: jim.username,
    submitted: new Date(),
    body: 'This is definitely my favourite character'
  });

  Muppets.insert({
    name: 'Fozzie',
    animalType: 'Bear',
    imgPath: '/images/fozzie.jpg',
    userId: frank._id,
    user: frank.username,
    submitted: new Date(),
    commentCount: 0
  });

  var gonzoId = Muppets.insert({
    name: 'Gonzo',
    animalType: 'Unknown',
    imgPath: '/images/gonzo.jpg',
    userId: dave._id,
    user: dave.username,
    submitted: new Date(),
    commentCount: 2
  });

  Comments.insert({
    muppetId: gonzoId,
    userId: frank._id,
    user: frank.username,
    submitted: new Date(),
    body: 'What is a Gonzo anyways?'
  });

  Comments.insert({
    muppetId: gonzoId,
    userId: dave._id,
    user: dave.username,
    submitted: new Date(),
    body: 'Nobody knows except his parents, and they\'re not talking.'
  });

  Muppets.insert({
    name: 'Rowlf',
    animalType: 'Dog',
    imgPath: '/images/rowlf.jpg',
    userId: jim._id,
    user: jim.username,
    submitted: new Date(),
    commentCount: 0
  });

  for (var i = 1; i < 51; i++) {
    Muppets.insert({
      name: 'Unidentified Muppet #' + i,
      animalType: 'Placeholder',
      imgPath: 'http://lorempixel.com/450/450/animals',
      userId: dave._id,
      user: dave.username,
      submitted: new Date(),
      commentCount: 0
    });
  }
}
