var Backbone = require('backbone');
var FormView = require('./FormView');
var TableView = require('./TableView');

module.exports = Backbone.Marionette.View.extend({
    className: 'container',
    template: '#users-main-view',
    regions: {
        formRegion: '#users-form-region',
        tableRegion: '#users-table-region',
    },
    onRender: function() {
        this.renderForm();
        this.renderTable();
    },
    renderForm: function() {
        this.getRegion('formRegion').show(new FormView({ collection: this.collection }));
    },
    renderTable: function() {
        this.getRegion('tableRegion').show(new TableView({ collection: this.collection }));
    },
});
