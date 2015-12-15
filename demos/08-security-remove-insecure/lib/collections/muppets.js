Muppets = new Mongo.Collection('muppets');

Muppets.allow({
  insert: function (userId) {
    return !!userId;
  },
  update: function (userId, muppet) {
    return ownsDocument(userId, muppet);
  },
  remove: function (userId, muppet) {
    return ownsDocument(userId, muppet);
  }
});

Muppets.deny({
  update: function (userId, muppet, fieldNames) {
    return (_.without(fieldNames, 'name', 'animalType', 'imgPath').length > 0);
  }
});
