import Backbone from 'backbone';
import Users from '../../collections/Users';
import HeaderView from '../HeaderView';
import MainView from './MainView';

export default class RootView extends Backbone.Marionette.View {
    constructor(options) {
        super(options);
        this.template = '#root-view';
        this.addRegions({
            headerRegion: '#header-region',
            mainRegion  : '#main-region',
        });
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
