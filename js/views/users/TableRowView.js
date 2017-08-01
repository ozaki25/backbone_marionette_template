var Backbone = require('backbone');
var template = require('../../templates/users/TableRowTemplate.html');

module.exports = Backbone.Marionette.View.extend({
    tagName: 'tr',
    template: template,
    ui: {
        destroy: '#destroy',
    },
    triggers: {
        'click @ui.destroy': 'click:destroy',
    },
    onClickDestroy: function() {
        this.model.destroy();
    },
});
