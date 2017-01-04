import _ from 'underscore';
import Backbone from 'backbone';

export default class MessageView extends Backbone.Marionette.View {
    constructor(options) {
        const defaultOptions = {
            tagName: 'p',
            className: 'lead',
            template: '#user-message-view',
        };
        super(_.defaults({}, options, defaultOptions));
    }
}
