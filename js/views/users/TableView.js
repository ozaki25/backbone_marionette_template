import Backbone from 'backbone';
import TableBodyView from './TableBodyView';

export default class TableView extends Backbone.Marionette.View {
    constructor(options) {
        super(options);
        this.tagName = 'table';
        this.className = 'table table-condensed';
        this.template = '#users-table-view';
        this.addRegions({
            tableBodyRegion: {
                el: 'tbody',
                replaceElement: true,
            }
        });
    }

    onRender() {
        this.renderTableBody();
    }

    renderTableBody() {
        this.getRegion('tableBodyRegion').show(new TableBodyView({ collection: this.collection }));
    }
}
