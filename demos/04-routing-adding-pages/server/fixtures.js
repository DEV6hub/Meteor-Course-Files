if (Muppets.find().count() === 0) {
  Muppets.insert({
    name: 'Kermit',
    animalType: 'Frog'
  });

  Muppets.insert({
    name: 'Fozzie',
    animalType: 'Bear'
  });

  Muppets.insert({
    name: 'Gonzo',
    animalType: 'Unknown'
  });

  Muppets.insert({
    name: 'Rowlf',
    animalType: 'Dog'
  });
}
