import _ from 'underscore';
import Backbone from 'backbone';
import HeaderView from '../HeaderView';
import HelloView from './HelloView';

export default class RootView extends Backbone.Marionette.View {
    constructor(options) {
        super(
            _.defaults({}, options, {
                template: '#root-view',
                regions: {
                    headerRegion: '#header-region',
                    mainRegion  : '#main-region'
                },
            })
        );
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
