Muppets = new Mongo.Collection('muppets');

Muppets.allow({
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

Meteor.methods({
  addMuppet: function (muppetAttributes) {
    check(Meteor.userId(), String);
    check(muppetAttributes, {
      name: String,
      animalType: String,
      imgPath: String
    });

    var duplicateMuppet = Muppets.findOne({
      name: muppetAttributes.name
    });
    if (duplicateMuppet) {
      return {
        muppetExists: true,
        _id: duplicateMuppet._id
      };
    }


    var user = Meteor.user();
    var muppet = _.extend(muppetAttributes, {
      userId: user._id,
      user: user.username,
      submitted: new Date()
    });

    var muppetId = Muppets.insert(muppet);

    return {
      _id: muppetId
    };
  }
});
