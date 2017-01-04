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
                    app.getRegion('rootRegion').show(new HelloRootView());
                },
                user : () => {
                    app.getRegion('rootRegion').show(new UserRootView());
                },
                users: () => {
                    // app.getRegion('rootRegion').show(new UsersRootView());
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
