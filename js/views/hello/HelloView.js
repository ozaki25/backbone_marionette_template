import Backbone from 'backbone';

export default class HelloView extends Backbone.Marionette.View {
    constructor(options) {
        super(options);
        this.className = 'container';
        this.template = '#hello-view';
    }
}

