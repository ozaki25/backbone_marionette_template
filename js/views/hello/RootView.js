import Backbone from 'backbone';
import HeaderView from '../HeaderView';
import HelloView from './HelloView';

export default class RootView extends Backbone.Marionette.View {
    constructor(options) {
        const defaultOptions = {
            template: '#root-view',
            regions: {
                headerRegion: '#header-region',
                mainRegion  : '#main-region'
            },
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
        this.getRegion('mainRegion').show(new HelloView());
    }
}
