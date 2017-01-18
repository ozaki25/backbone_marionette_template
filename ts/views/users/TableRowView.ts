import * as _ from 'underscore';
import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';

export default class TableRowView extends Marionette.ItemView<Backbone.Model> {
    template = '#users-table-row-view';

    constructor(options = {}) {
        super(
            _.defaults(options, {
                tagName: 'tr',
            })
        );
    }

    ui() {
        return {
            destroyBtn: '.destroy',
        };
    }

    events() {
        return {
            'click @ui.destroyBtn': 'onClickDestroy'
        };
    }

    onClickDestroy(e: any) {
        e.preventDefault();
        this.model.destroy({ wait: true });
    }
}

