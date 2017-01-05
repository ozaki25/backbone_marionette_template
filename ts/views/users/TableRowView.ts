import * as _ from 'underscore';
import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';

export default class TableRowView extends Marionette.ItemView<Backbone.Model> {
    template = '#users-table-row-view';
    ui = {
        destroyBtn: '.destroy',
    };

    constructor(options = {}) {
        super(
            _.defaults(options, {
                tagName: 'tr',
            })
        );
    }

    events() {
        return {
            // 'click @ui.destroyBtn': 'onClickDestroy'
            'click .destroy': 'onClickDestroy'
        };
    }

    onClickDestroy(e) {
        e.preventDefault();
        this.model.destroy({ wait: true });
    }
}

