import Backbone from 'backbone';
import RootView from './views/RootView';
import UserCollection from './collections/Users';

class Controller extends Backbone.Marionette.Object {
    constructor (options) {
        super(options);
        this.rootView = new RootView();
        options.app.showView(this.rootView);
    }
    hello () {
        this.rootView.showHello();
    }
    user () {
        this.rootView.showUser();
    }
    users () {
        var users = new UserCollection();
        this.rootView.showUsers(users);
        users.fetch();
    }
}

export default Backbone.Marionette.AppRouter.extend({
    initialize: function (options) {
        this.controller = new Controller(options);
    },
    appRoutes: {
        '': 'hello',
        hello: 'hello',
        user: 'user',
        users: 'users',
    },
});
