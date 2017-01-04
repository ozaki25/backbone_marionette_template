import 'jquery';
import 'bootstrap';
import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import 'backbone.validation';
import 'backbone.localstorage';
import * as HelloRootView from './views/hello/RootView';
// import UserRootView from'./views/user/RootView';
// import UsersRootView from'./views/users/RootView';

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
                    alert('hello');
                    // app.showView(new HelloRootView());
                },
                user : () => {
                    alert('user');
                    // app.showView(new UserRootView());
                },
                users: () => {
                    alert('users');
                    // app.showView(new UsersRootView());
                },
            },
        };
        super(appRouterOptions);
    }
}

const app: Marionette.Application = new Marionette.Application({
    region: '#root-region',
    onStart: () => {
        new AppRouter();
        Backbone.history.start();
    }
});

app.start();
