var Backbone = require('backbone');
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
        this.getRegion('mainRegion').show(new MainView());
    },
});
