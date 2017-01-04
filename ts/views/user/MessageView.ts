import * as _ from 'underscore';
import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';

export default class MessageView extends Marionette.ItemView<Backbone.Model> {
    template = '#user-message-view';

    constructor(options = {}) {
        super(
            _.defaults(options, {
                tagName: 'p',
                className: 'lead'
            })
        );
    }
}
