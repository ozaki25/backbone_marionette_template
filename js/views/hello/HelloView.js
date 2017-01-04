import _ from 'underscore';
import Backbone from 'backbone';

export default class HelloView extends Backbone.Marionette.View {
    constructor(options) {
        const defaultOptions = {
            className: 'container',
            template: '#hello-view'
        };
        super(_.defaults({}, options, defaultOptions));
    }
}

