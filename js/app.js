import 'jquery';
import 'bootstrap';
import 'backbone.marionette';
import 'backbone.validation';
import 'backbone.localstorage';
import Backbone from 'backbone';
import HelloRootView from './views/hello/RootView';
import UserRootView from'./views/user/RootView';
import UsersRootView from'./views/users/RootView';

const controller = {
    hello: () => {
        app.showView(new HelloRootView());
    },
    user: () => {
        app.showView(new UserRootView());
    },
    users: () => {
        app.showView(new UsersRootView());
    }
}

const appRouter = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
        ""     : "hello",
        "hello": "hello",
        "user" : "user",
        "users": "users",
    },
    controller: controller,
});

const app = new Backbone.Marionette.Application({
    region: '#root-region',
    onStart: () => {
        new appRouter();
        Backbone.history.start();
    }
});

app.start();
