import _ from 'underscore';
import Backbone from 'backbone';
import TableRowView from './TableRowView';

export default class TableBodyView extends Backbone.Marionette.CollectionView {
    constructor(options) {
        super(
            _.defaults({}, options, {
                tagName: 'tbody',
                childView: TableRowView
            })
        );
    }
}
