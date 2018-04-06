import Backbone from 'backbone';
import TableRowView from './TableRowView';

export default Backbone.Marionette.CollectionView.extend({
    tagName: 'tbody',
    childView: TableRowView,
});
