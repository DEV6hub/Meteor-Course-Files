Template.addComment.onCreated(function () {
  Session.set('addCommentErrors', {});
});

Template.addComment.helpers({
  errorMessage: function (field) {
    return Session.get('addCommentErrors')[field];
  },
  errorClass: function (field) {
    return Session.get('addCommentErrors')[field] ? 'has-error' : '';
  }
});


Template.addComment.events({
  'submit form': function (event, template) {
    event.preventDefault();

    var comment = {
      body: event.target.body.value,
      muppetId: template.data._id
    };

    var errors = {};
    if (!comment.body) {
      errors.body = 'Make sure you add some content to share';
      return Session.set('addCommentErrors', errors);
    }

    Meteor.call('addComment', comment, function (error, commentId) {
      if (error) {
        throwError(error.reason);
      } else {
        event.target.body.value = '';
      }
    });
  }
});
