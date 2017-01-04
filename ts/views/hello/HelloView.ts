import * as _ from 'underscore';
import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';

export default class HelloView extends Marionette.ItemView<Backbone.Model> {
    template = '#hello-view';

    constructor(options = {}) {
        super(
            _.defaults(options, {
                className: 'container',
            })
        );
    }
}
