var Backbone = require('backbone');
var template = require('../../templates/users/TableTemplate.jst');
var TableBodyView = require('./TableBodyView');

module.exports = Backbone.Marionette.View.extend({
    tagName: 'table',
    className: 'table table-condensed',
    template: template,
    regions: {
        tableBodyRegion: {
            el: 'tbody',
            replaceElement: true,
        }
    },
    onRender: function() {
        this.showChildView('tableBodyRegion', new TableBodyView({ collection: this.collection }));
    },
});
