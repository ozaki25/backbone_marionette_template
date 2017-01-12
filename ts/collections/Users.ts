import * as Backbone from 'backbone';
import 'backbone.localstorage';
import User from '../models/User';

export default class Users extends Backbone.Collection<User> {
    model = User;
    localStorage: Store = new Backbone.LocalStorage('BackboneMarionetteTemplate.Users');

    constructor(models: User[] = [], options = {}) {
        super(models, options);
    }
}
