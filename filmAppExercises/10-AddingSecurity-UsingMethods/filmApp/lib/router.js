Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function () {
    return Meteor.subscribe("films");
  }
});

Router.route('/', {
  name: 'filmsList'
});

Router.route('/films/:_id', {
  name: 'filmPage',
  data: function () {
    return Films.findOne(this.params._id);
  }
});

Router.route('/films/:_id/edit', {
  name: 'filmEdit',
  data: function () {
    return Films.findOne(this.params._id);
  }
});

Router.route('/submit', {
  name: 'filmSubmit'
});

var requireLogin = function () {
  if (!Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
};

Router.onBeforeAction(requireLogin, {
  only: 'filmSubmit'
});

Router.onBeforeAction('dataNotFound', {
  only: 'filmPage'
});
