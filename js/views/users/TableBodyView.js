import Backbone from 'backbone';
import TableRowView from './TableRowView';

export default class TableBodyView extends Backbone.Marionette.CollectionView {
    constructor(options) {
        super(options);
        this.tagName = 'tbody';
        this.childView = TableRowView;
    }
}
