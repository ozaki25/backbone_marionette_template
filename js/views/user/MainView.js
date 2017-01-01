import Backbone from 'backbone';
import User from '../../models/User';
import MessageView from './MessageView';

export default class MainView extends Backbone.Marionette.View {
    constructor(options) {
        super(options);
        this.className = 'container';
        this.template = '#user-main-view';
        this.ui = {
            inputName: '.name',
            helloBtn : '#hello',
        };
        this.events = {
            'click @ui.helloBtn': 'onClickHello',
        };
        this.addRegions({
            messageRegion: {
                el: '#message',
                replaceElement: true,
            }
        });
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
