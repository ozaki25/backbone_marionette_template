import _ from 'underscore';
import Backbone from 'backbone';

export default class MessageView extends Backbone.Marionette.View {
    constructor(options) {
        super(
            _.defaults({}, options, {
                tagName: 'p',
                className: 'lead',
                template: '#user-message-view',
            })
        );
    }
}
