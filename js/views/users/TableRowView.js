import Backbone from 'backbone';

export default class TableRowView extends Backbone.Marionette.View {
    constructor(options) {
        super(options);
        this.tagName = 'tr';
        this.template = '#users-table-row-view';
        this.ui = {
            destroyBtn: '.destroy',
        };
        this.events = {
            'click @ui.destroyBtn': 'onClickDestroy',
        };
    }

    onClickDestroy(e) {
        e.preventDefault();
        this.model.destroy({ wait: true });
    }
}
