import Backbone from 'backbone';
import User from '../../models/User';
import MessageView from './MessageView';

export default class MainView extends Backbone.Marionette.View {
    constructor(options) {
        const defaultOptions = {
            className: 'container',
            template: '#user-main-view',
            regions: {
                messageRegion: {
                    el: '#message',
                    replaceElement: true,
                }
            },
            ui: {
                inputName: '.name',
                helloBtn : '#hello',
            },
            events: {
                'click @ui.helloBtn': 'onClickHello'
            },
        };
        super($.extend({}, options, defaultOptions));
    }

    onClickHello(e) {
        e.preventDefault();
        const name = this.ui.inputName.val().trim();
        if(name) {
            this.ui.inputName.val('');
            this.renderMessage(name);
        }
    }

    renderMessage(name) {
        const user = new User({ name: name });
        this.getRegion('messageRegion').show(new MessageView({ model: user }));
    }
}
