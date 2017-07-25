var Backbone = require('backbone');

module.exports = Backbone.Marionette.View.extend({
    tagName: 'tr',
    template: '#users-table-row-view',
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
