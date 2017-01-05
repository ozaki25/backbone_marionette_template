import _ from 'underscore';
import Backbone from 'backbone';

export default class HeaderView extends Backbone.Marionette.View {
    constructor(options) {
        super(
            _.defaults({}, options, {
                template: '#header-view'
            })
        );
    }
}

