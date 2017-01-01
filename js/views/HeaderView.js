import Backbone from 'backbone';

export default class HeaderView extends Backbone.Marionette.View {
    constructor(options) {
        super(options);
        this.template = '#header-view';
    }
}

