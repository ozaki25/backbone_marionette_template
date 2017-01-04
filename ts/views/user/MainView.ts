import * as _ from 'underscore';
import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import User from '../../models/User';
import MessageView from './MessageView';

export default class MainView extends Marionette.LayoutView<Backbone.Model> {
    template = '#user-main-view';
    ui = {
        inputName: '.name',
        helloBtn : '#hello',
    };

    constructor(options = {}) {
        super(
            _.defaults(options, {
                className: 'container',
            })
        );
    }

    regions() {
        return {
            messageRegion: '#message',
        };
    }

    events() {
        return {
            // 'click @ui.helloBtn': 'onClickHello'
            'click #hello': 'onClickHello'
        };
    }

    onClickHello(e) {
        e.preventDefault();
        const name = (<any>this.ui.inputName).val().trim();
        if(name) {
            (<any>this.ui.inputName).val('');
            this.renderMessage(name);
        }
    }

    renderMessage(name) {
        const user = new User({ name: name });
        this.getRegion('messageRegion').show(new MessageView({ model: user }));
    }
}
