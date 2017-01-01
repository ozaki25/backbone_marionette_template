import Backbone from 'backbone';

export default class TableRowView extends Backbone.Marionette.View {
    constructor(options) {
        const defaultOptions = {
            tagName: 'tr',
            template: '#users-table-row-view',
            ui: {
                destroyBtn: '.destroy',
            },
            events: {
                'click @ui.destroyBtn': 'onClickDestroy',
            }
        };
        super($.extend({}, options, defaultOptions));
    }

    onClickDestroy(e) {
        e.preventDefault();
        this.model.destroy({ wait: true });
    }
}
