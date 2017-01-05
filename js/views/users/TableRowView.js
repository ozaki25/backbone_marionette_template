import _ from 'underscore';
import Backbone from 'backbone';

export default class TableRowView extends Backbone.Marionette.View {
    constructor(options) {
        super(
            _.defaults({}, options, {
                tagName: 'tr',
                template: '#users-table-row-view',
                ui: {
                    destroyBtn: '.destroy',
                },
                events: {
                    'click @ui.destroyBtn': 'onClickDestroy',
                }
            })
        );
    }

    onClickDestroy(e) {
        e.preventDefault();
        this.model.destroy({ wait: true });
    }
}
