import * as _ from 'underscore';
import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import FormView from './FormView';
import TableView from './TableView';

export default class MainView extends Marionette.LayoutView<Backbone.Model> {
    template = '#users-main-view';

    constructor(options = {}) {
        super(
            _.defaults(options, {
                className: 'container',
            })
        );
    }

    regions() {
        return {
            formRegion: '#users-form-region',
            tableRegion: '#users-table-region',
        };
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
