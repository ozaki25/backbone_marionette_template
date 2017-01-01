import Backbone from 'backbone';
import FormView from './FormView';
import TableView from './TableView';

export default class MainView extends Backbone.Marionette.View {
    constructor(options) {
        super(options);
        this.className = 'container';
        this.template = '#users-main-view';
        this.addRegions({
            formRegion: '#users-form-region',
            tableRegion: '#users-table-region',
        });
    }

    onRender() {
        this.renderForm();
        this.renderTable();
    }

    renderForm() {
        this.getRegion('formRegion').show(new FormView({ collection: this.collection }));
    }

    renderTable() {
        this.getRegion('tableRegion').show(new TableView({ collection: this.collection }));
    }
}
