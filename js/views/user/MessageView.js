import Backbone from 'backbone';

export default class MessageView extends Backbone.Marionette.View {
    constructor(options) {
        super(options);
        this.tagName = 'p';
        this.className = 'lead';
        this.template = '#user-message-view';
    }
}
