import 'jquery';
import 'bootstrap';
import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import 'backbone.validation';
import 'backbone.localstorage';
import HelloRootView from './views/hello/RootView';
import UserRootView from './views/user/RootView';
// import UsersRootView from './views/users/RootView';

class AppRouter extends Marionette.AppRouter {
    constructor() {
        const appRouterOptions: any = {
            appRoutes: {
                ''     : 'hello',
                'hello': 'hello',
                'user' : 'user',
                'users': 'users',
            },
            controller: {
                hello: () => {
                    app.getRegion('rootRegion').show(new HelloRootView({ model: new Backbone.Model }));
                },
                user : () => {
                    app.getRegion('rootRegion').show(new UserRootView({ model: new Backbone.Model }));
                },
                users: () => {
                    // app.getRegion('rootRegion').show(new UsersRootView({ model: new Backbone.Model }));
                },
            },
        };
        super(appRouterOptions);
    }
}

const app: Marionette.Application = new Marionette.Application({
    regions: {
        rootRegion: '#root-region'
    },
    onStart: () => {
        new AppRouter();
        Backbone.history.start();
    }
});

app.start();
