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

Muppets.deny({
  update: function (userId, muppet, fieldNames, modifier) {
    var errors = validateMuppet(modifier.$set);
    return !_.isEmpty(errors);
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

    var errors = validateMuppet(muppetAttributes);
    if (!_.isEmpty(errors)) {
      throw new Meteor.Error('invalid muppet', 'Someone tried to add an invalid muppet');
    }

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

validateMuppet = function (muppet) {
  var errors = {};

  if (!muppet.name) {
    errors.name = "Please give this muppet a name";
  }

  if (!muppet.animalType) {
    errors.animalType = "Please specify an animal type for this muppet";
  }

  if (!muppet.imgPath) {
    errors.imgPath = "Everyone needs a picture! Please add one for this muppet";
  }

  return errors;
};
