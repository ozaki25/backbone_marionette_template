var Backbone = require('backbone');
var TableBodyView = require('./TableBodyView');

module.exports = Backbone.Marionette.View.extend({
    tagName: 'table',
    className: 'table table-condensed',
    template: '#users-table-view',
    regions: {
        tableBodyRegion: {
            el: 'tbody',
            replaceElement: true,
        }
    },
    onRender: function() {
        this.renderTableBody();
    },
    renderTableBody: function() {
        this.getRegion('tableBodyRegion').show(new TableBodyView({ collection: this.collection }));
    },
});