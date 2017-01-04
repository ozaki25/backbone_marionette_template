import _ from 'underscore';
import Backbone from 'backbone';
import TableRowView from './TableRowView';

export default class TableBodyView extends Backbone.Marionette.CollectionView {
    constructor(options) {
        const defaultOptions = {
            tagName: 'tbody',
            childView: TableRowView
        };
        super(_.defaults({}, options, defaultOptions));
    }
}
