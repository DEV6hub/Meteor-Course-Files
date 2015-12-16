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

Router.onBeforeAction('dataNotFound', {
  only: 'filmPage'
});
