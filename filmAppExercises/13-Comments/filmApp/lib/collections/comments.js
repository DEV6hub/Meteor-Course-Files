Comments = new Mongo.Collection('comments');

Meteor.methods({
  commentInsert: function (commentAttributes) {
    check(this.userId, String);
    check(commentAttributes, {
      filmId: String,
      body: String
    });

    var user = Meteor.user();
    var film = Films.findOne(commentAttributes.filmId);

    if (!film)
      throw new Meteor.Error('invalid-comment', 'You must comment on a film!');

    comment = _.extend(commentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    Films.update(comment.filmId, {
      $inc: {
        commentsCount: 1
      }
    });

    return Comments.insert(comment);
  }
});
