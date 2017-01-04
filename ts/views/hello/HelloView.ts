import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';

export default class HelloView extends Marionette.ItemView<Backbone.Model> {
    className = 'container';
    template = '#hello-view';

    constructor(options) {
        super(options);
    }
}
