import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';

import HeaderView from '../HeaderView';
import HelloView from './HelloView';

export default class RootView extends Marionette.LayoutView<Backbone.Model> {
    template = '#root-view';
    regions() {
        return {
            headerRegion: '#header-region',
            mainRegion  : '#main-region'
        };
    }

    constructor(options) {
        super(options);
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

