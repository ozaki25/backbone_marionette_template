require('jquery');
require('bootstrap');
require('backbone.marionette');
require('backbone.validation');
require('backbone.localstorage');
var Backbone = require('backbone');
var Router = require('./router');

var app = new Backbone.Marionette.Application({
    region: '#root-region',
    onStart: function() {
        this.router = new Router({ app: this });
        Backbone.history.start();
    }
});

app.start();
