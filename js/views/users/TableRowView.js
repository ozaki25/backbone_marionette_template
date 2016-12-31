var Backbone = require('backbone');

module.exports = Backbone.Marionette.View.extend({
    tagName: 'tr',
    template: '#users-table-row-view',
    ui: {
        destroyBtn: '.destroy',
    },
    events: {
        'click @ui.destroyBtn': 'onClickDestroy',
    },
    onClickDestroy: function(e) {
        e.preventDefault();
        this.model.destroy({ wait: true });
    },
});
