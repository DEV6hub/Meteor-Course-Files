if (Muppets.find().count() === 0) {
  Muppets.insert({
    name: 'Kermit',
    animalType: 'Frog',
    imgPath: '/images/kermit.jpg'
  });

  Muppets.insert({
    name: 'Fozzie',
    animalType: 'Bear',
    imgPath: '/images/fozzie.jpg'
  });

  Muppets.insert({
    name: 'Gonzo',
    animalType: 'Unknown',
    imgPath: '/images/gonzo.jpg'
  });

  Muppets.insert({
    name: 'Rowlf',
    animalType: 'Dog',
    imgPath: '/images/rowlf.jpg'
  });
}
