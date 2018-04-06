import Backbone from 'backbone';
import UserModel from '../models/User';
import HeaderView from './HeaderView';
import HelloView from './hello/HelloView';
import UserMainView from './user/MainView';
import UsersMainView from './users/MainView';
import template from '../templates/RootTemplate';

export default Backbone.Marionette.View.extend({
    template: template,
    regions: {
        headerRegion: '#header-region',
        mainRegion: '#main-region',
    },
    onRender: function() {
        this.showChildView('headerRegion', new HeaderView());
    },
    showHello: function() {
        this.showChildView('mainRegion', new HelloView());
    },
    showUser: function() {
        this.showChildView('mainRegion', new UserMainView({ model: new UserModel() }));
    },
    showUsers: function(users) {
        this.showChildView('mainRegion', new UsersMainView({ collection: users }));
    },
});
