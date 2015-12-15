Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function () {
    return Meteor.subscribe('muppets');
  }
});

Router.route('/', {
  name: 'muppetList'
});

Router.route('/muppets/:_id', {
  name: 'muppetDetails',
  data: function () {
    return Muppets.findOne(this.params._id);
  }
});

Router.route('/muppets/:_id/edit', {
  name: 'editMuppet',
  data: function () {
    return Muppets.findOne(this.params._id);
  }
});

Router.route('/add', {
  name: 'addMuppet'
});

Router.onBeforeAction('dataNotFound', {
  only: 'muppetDetails'
});
