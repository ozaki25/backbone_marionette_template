require('jquery');
require('bootstrap');
require('backbone.marionette');
require('backbone.validation');
require('backbone.localstorage');
var Backbone = require('backbone');
var HelloRootView = require('./views/hello/RootView');
var UserRootView = require('./views/user/RootView');
var UsersRootView = require('./views/users/RootView');

var appRouter = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
        ''     : 'hello',
        'hello': 'hello',
        'user' : 'user',
        'users': 'users',
    },
    controller: {
        hello: function() {
            app.showView(new HelloRootView());
        },
        user: function() {
            app.showView(new UserRootView());
        },
        users: function() {
            app.showView(new UsersRootView());
        }
    }
});

var app = new Backbone.Marionette.Application({
    region: '#root-region',
    onStart: function() {
        new appRouter();
        Backbone.history.start();
    }
});

app.start();
