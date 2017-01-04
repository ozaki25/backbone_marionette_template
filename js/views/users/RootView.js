import _ from 'underscore';
import Backbone from 'backbone';
import Users from '../../collections/Users';
import HeaderView from '../HeaderView';
import MainView from './MainView';

export default class RootView extends Backbone.Marionette.View {
    constructor(options) {
        const defaultOptions = {
            template: '#root-view',
            regions: {
                headerRegion: '#header-region',
                mainRegion  : '#main-region',
            }
        };
        super(_.defaults({}, options, defaultOptions));
    }

    onRender() {
        this.renderHeader();
        this.renderMain();
    }

    renderHeader() {
        this.getRegion('headerRegion').show(new HeaderView());
    }

    renderMain() {
        let users = new Users();
        users.fetch().done(() => {
            this.getRegion('mainRegion').show(new MainView({ collection: users }));
        });
    }
}
