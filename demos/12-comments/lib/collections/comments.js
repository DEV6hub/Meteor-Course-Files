Comments = new Mongo.Collection('comments');

Meteor.methods({
  addComment: function (commentAttributes) {
    check(Meteor.userId(), String);
    check(commentAttributes, {
      body: String,
      muppetId: String
    });

    var muppet = Muppets.findOne(commentAttributes.muppetId);
    if (!muppet) {
      throw new Meteor.Error('invalid-comment', 'You must comment on a valid muppet');
    }

    var user = Meteor.user();
    var comment = _.extend(commentAttributes, {
      userId: user._id,
      user: user.username,
      submitted: new Date()
    });

    Muppets.update(comment.muppetId, {
      $inc: {
        commentCount: 1
      }
    });
    return Comments.insert(comment);
  }
});
