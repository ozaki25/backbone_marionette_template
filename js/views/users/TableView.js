import _ from 'underscore';
import Backbone from 'backbone';
import TableBodyView from './TableBodyView';

export default class TableView extends Backbone.Marionette.View {
    constructor(options) {
        super(
            _.defaults({}, options, {
                tagName: 'table',
                className: 'table table-condensed',
                template: '#users-table-view',
                regions: {
                    tableBodyRegion: {
                        el: 'tbody',
                        replaceElement: true,
                    }
                }
            })
        );
    }

    onRender() {
        this.renderTableBody();
    }

    renderTableBody() {
        this.getRegion('tableBodyRegion').show(new TableBodyView({ collection: this.collection }));
    }
}
