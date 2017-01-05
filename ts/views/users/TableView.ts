import * as _ from 'underscore';
import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import User from '../../models/User';
import TableRowView from './TableRowView';

export default class TableView extends Marionette.CompositeView<User, TableRowView> {
    template = '#users-table-view';
    childView = TableRowView;
    childViewContainer = 'tbody';

    constructor(options = {}) {
        super(
            _.defaults(options, {
                tagName: 'table',
                className: 'table table-condensed'
            })
        );
    }
}
