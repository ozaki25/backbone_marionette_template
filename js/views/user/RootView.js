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
        super($.extend({}, options, defaultOptions));
    }

    onRender() {
        this.renderHeader();
        this.renderMain();
    }

    renderHeader() {
        this.getRegion('headerRegion').show(new HeaderView());
    }

    renderMain() {
        this.getRegion('mainRegion').show(new MainView());
    }
}
