require('jquery');
require('bootstrap');
require('backbone.marionette');
require('backbone.validation');
require('backbone.localstorage');
var Backbone = require('backbone');
var RootView = require('./views/RootView');

var Controller = Backbone.Marionette.Object.extend({
    hello: function() {
        this.getOption('rootView').showHello();
    },
    user: function() {
        this.getOption('rootView').showUser();
    },
    users: function() {
        this.getOption('rootView').showUsers();
    },
});

var Router = Backbone.Marionette.AppRouter.extend({
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

var app = new Backbone.Marionette.Application({
    region: '#root-region',
    onStart: function() {
        var rootView = new RootView();
        new Router({ rootView: rootView });
        this.showView(rootView);
        Backbone.history.start();
    }
});

app.start();
