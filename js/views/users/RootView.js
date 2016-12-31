var Backbone = require('backbone');
var Users = require('../../collections/Users');
var HeaderView = require('../HeaderView');
var MainView = require('./MainView');

module.exports = Backbone.Marionette.View.extend({
    template: '#root-view',
    regions: {
        headerRegion: '#header-region',
        mainRegion  : '#main-region',
    },
    onRender: function() {
        this.renderHeader();
        this.renderMain();
    },
    renderHeader: function() {
        this.getRegion('headerRegion').show(new HeaderView());
    },
    renderMain: function() {
        var users = new Users();
        users.fetch().done(function() {
            this.getRegion('mainRegion').show(new MainView({ collection: users }));
        }.bind(this));
    },
});

