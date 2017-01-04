import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';

export default class MessageView extends Marionette.ItemView<Backbone.Model> {
    tagName = 'p';
    className = 'lead';
    template = '#user-message-view';

    constructor(options) {
        super(options);
    }
}
