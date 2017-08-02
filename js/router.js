var Backbone = require('backbone');
var RootView = require('./views/RootView');
var UserCollection = require('./collections/Users');

var Controller = Backbone.Marionette.Object.extend({
    initialize: function(options) {
        this.rootView = new RootView();
        options.app.showView(this.rootView);
    },
    hello: function() {
        this.rootView.showHello();
    },
    user: function() {
        this.rootView.showUser();
    },
    users: function() {
        var users = new UserCollection();
        this.rootView.showUsers(users);
        users.fetch();
    },
});

module.exports = Backbone.Marionette.AppRouter.extend({
    initialize: function(options) {
        this.controller = new Controller(options);
    },
    appRoutes: {
        ''     : 'hello',
        'hello': 'hello',
        'user' : 'user',
        'users': 'users',
    },
});
