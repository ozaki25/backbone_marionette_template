var Backbone = require('backbone');
var TableRowView = require('./TableRowView');

module.exports = Backbone.Marionette.CollectionView.extend({
    tagName: 'tbody',
    childView: TableRowView,
});
