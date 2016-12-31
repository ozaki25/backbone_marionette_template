require('jquery');
require('bootstrap');
require('backbone.marionette');
require('backbone.validation');
require('backbone.localstorage');
var Backbone = require('backbone');
var TestRootView = require('./views/test/RootView');
var UsersRootView = require('./views/users/RootView');

var controller = {
    test: function() {
        app.showView(new TestRootView());
    },
    users: function() {
        app.showView(new UsersRootView());
    }
}

var appRouter = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
        ""     : "test",
        "test" : "test",
        "users": "users",
    },
    controller: controller
});

var app = new Backbone.Marionette.Application({
    region: '#root-region',
    onStart: function() {
        new appRouter();
        Backbone.history.start();
    }
});

app.start();
