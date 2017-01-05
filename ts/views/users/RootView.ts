import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import Users from '../../collections/Users';
import HeaderView from '../HeaderView';
import MainView from './MainView';

export default class RootView extends Marionette.LayoutView<Backbone.Model> {
    template = '#root-view';

    constructor(options = {}) {
        super(options);
    }

    regions() {
        return {
            headerRegion: '#header-region',
            mainRegion  : '#main-region',
        };
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
