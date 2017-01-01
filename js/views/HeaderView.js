import Backbone from 'backbone';

export default class HeaderView extends Backbone.Marionette.View {
    constructor(options) {
        const defaultOptions = {
            template: '#header-view'
        };
        super($.extend({}, options, defaultOptions));
    }
}

