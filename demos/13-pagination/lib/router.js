Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/muppets/:_id', {
  name: 'muppetDetails',
  waitOn: function () {
    return [
      Meteor.subscribe('singleMuppet', this.params._id),
      Meteor.subscribe('comments', this.params._id)
    ];
  },
  data: function () {
    return Muppets.findOne(this.params._id);
  }
});

Router.route('/muppets/:_id/edit', {
  name: 'editMuppet',
  waitOn: function () {
    return Meteor.subscribe('singleMuppet', this.params._id);
  },
  data: function () {
    return Muppets.findOne(this.params._id);
  }
});

Router.route('/add', {
  name: 'addMuppet'
});

MuppetListController = RouteController.extend({
  template: 'muppetList',
  increment: 10,
  muppetLimit: function () {
    return parseInt(this.params.muppetLimit) || this.increment;
  },
  findOptions: function () {
    return {
      sort: {
        name: 1
      },
      limit: this.muppetLimit()
    };
  },
  subscriptions: function () {
    return Meteor.subscribe('muppets', this.findOptions());
  },
  muppets: function () {
    return Muppets.find({}, this.findOptions());
  },
  data: function () {
    var hasMore = this.muppets().count() === this.muppetLimit();
    var nextPath = this.route.path({
      muppetLimit: this.muppetLimit() + this.increment
    });
    return {
      muppets: this.muppets(),
      nextPath: hasMore ? nextPath : null
    };
  }
});

Router.route('/:muppetLimit?', {
  name: 'muppetList'
});

var requireLogin = function () {
  if (!Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
};

Router.onBeforeAction('dataNotFound', {
  only: 'muppetDetails'
});

Router.onBeforeAction(requireLogin, {
  only: 'addMuppet'
});
