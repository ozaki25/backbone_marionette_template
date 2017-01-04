import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';

export default class HeaderView extends Marionette.ItemView<Backbone.Model> {
    template = '#header-view';

    constructor(options) {
        super(options);
    }
}

