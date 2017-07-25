var Backbone = require('backbone');
var User = require('../../models/User');
var FormView = require('./FormView');
var TableView = require('./TableView');

module.exports = Backbone.Marionette.View.extend({
    className: 'container',
    template: '#users-main-view',
    regions: {
        formRegion: '#users-form-region',
        tableRegion: '#users-table-region',
    },
    childViewEvents: {
        'save:user': 'renderForm',
    },
    onRender: function() {
        this.renderForm();
        this.renderTable();
    },
    renderForm: function() {
        this.showChildView('formRegion', new FormView({ model: new User() }));
    },
    renderTable: function() {
        this.showChildView('tableRegion', new TableView({ collection: this.collection }));
    },
    onChildviewSaveUser: function(model) {
        this.collection.add(model);
    },
});
