window.jQuery = require('jquery');
require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css';
import Backbone from 'backbone';
import 'backbone.marionette';
import Router from './router';

var app = new Backbone.Marionette.Application({
    region: '#root-region',
    onStart: function() {
        this.router = new Router({ app: this });
        Backbone.history.start();
    },
});

app.start();
