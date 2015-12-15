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

  Muppets.insert({
    name: 'Kermit',
    animalType: 'Frog',
    imgPath: '/images/kermit.jpg',
    userId: jim._id,
    user: jim.username,
    submitted: new Date()
  });

  Muppets.insert({
    name: 'Fozzie',
    animalType: 'Bear',
    imgPath: '/images/fozzie.jpg',
    userId: frank._id,
    user: frank.username,
    submitted: new Date()
  });

  Muppets.insert({
    name: 'Gonzo',
    animalType: 'Unknown',
    imgPath: '/images/gonzo.jpg',
    userId: dave._id,
    user: dave.username,
    submitted: new Date()
  });

  Muppets.insert({
    name: 'Rowlf',
    animalType: 'Dog',
    imgPath: '/images/rowlf.jpg',
    userId: jim._id,
    user: jim.username,
    submitted: new Date()
  });
}
