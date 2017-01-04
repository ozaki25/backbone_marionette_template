import _ from 'underscore';
import Backbone from 'backbone';
import FormView from './FormView';
import TableView from './TableView';

export default class MainView extends Backbone.Marionette.View {
    constructor(options) {
        const defaultOptions = {
            className: 'container',
            template: '#users-main-view',
            regions: {
                formRegion: '#users-form-region',
                tableRegion: '#users-table-region',
            }
        };
        super(_.defaults({}, options, defaultOptions));
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
