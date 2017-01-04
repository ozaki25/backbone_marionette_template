import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import HeaderView from '../HeaderView';
import MainView from './MainView';

export default class RootView extends Marionette.LayoutView<Backbone.Model> {
    template = '#root-view';

    constructor(options) {
        super(options);
    }

    regions() {
        return {
            headerRegion: '#header-region',
            mainRegion  : '#main-region',
        }
    }

    onRender() {
        this.renderHeader();
        this.renderMain();
    }

    renderHeader() {
        this.getRegion('headerRegion').show(new HeaderView({ model: Backbone.Model }));
    }

    renderMain() {
        this.getRegion('mainRegion').show(new MainView({ model: Backbone.Model }));
    }
}
