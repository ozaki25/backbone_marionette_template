var Backbone = require('backbone');
var template = require('../../templates/users/MainTemplate.html');
var User = require('../../models/User');
var FormView = require('./FormView');
var TableView = require('./TableView');

module.exports = Backbone.Marionette.View.extend({
    className: 'container',
    template: template,
    regions: {
        formRegion: '#users-form-region',
        tableRegion: '#users-table-region',
    },
    onRender: function() {
        this.showChildView('formRegion', new FormView({ model: new User({}, { collection: this.collection }) }));
        this.showChildView('tableRegion', new TableView({ collection: this.collection }));
    },
    onChildviewSaveUser: function(model) {
        this.collection.add(model);
    },
});
