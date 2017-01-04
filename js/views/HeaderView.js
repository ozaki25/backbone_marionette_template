import _ from 'underscore';
import Backbone from 'backbone';

export default class HeaderView extends Backbone.Marionette.View {
    constructor(options) {
        const defaultOptions = {
            template: '#header-view'
        };
        super(_.defaults({}, options, defaultOptions));
    }
}

