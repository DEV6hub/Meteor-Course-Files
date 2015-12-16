Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.route('/submit', {
  name: 'filmSubmit'
});

Router.route('/films/:_id', {
  name: 'filmPage',
  waitOn: function () {
    return [
      Meteor.subscribe('comments', this.params._id),
      Meteor.subscribe('singleFilm', this.params._id)
    ];
  },
  data: function () {
    return Films.findOne(this.params._id);
  }
});

Router.route('/films/:_id/edit', {
  name: 'filmEdit',
  waitOn: function () {
    return Meteor.subscribe('singleFilm', this.params._id);
  },
  data: function () {
    return Films.findOne(this.params._id);
  }
});

var requireLogin = function () {
  if (!Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
};

Router.route('/:filmsLimit?', {
  name: 'filmsList'
});

FilmsListController = RouteController.extend({
  template: 'filmsList',
  increment: 5,
  filmsLimit: function () {
    return parseInt(this.params.filmsLimit) || this.increment;
  },
  findOptions: function () {
    return {
      sort: {
        submitted: -1
      },
      limit: this.filmsLimit()
    };
  },
  subscriptions: function () {
    this.filmsSub = Meteor.subscribe('films', this.findOptions());
  },
  films: function () {
    return Films.find({}, this.findOptions());
  },
  data: function () {
    var hasMore = this.films().count() === this.filmsLimit();
    var nextPath = this.route.path({
      filmsLimit: this.filmsLimit() + this.increment
    });
    return {
      films: this.films(),
      nextPath: hasMore ? nextPath : null
    };
  }
});

Router.onBeforeAction(requireLogin, {
  only: 'filmSubmit'
});
Router.onBeforeAction('dataNotFound', {
  only: 'filmPage'
});
