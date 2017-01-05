import * as Backbone from 'backbone';
import * as LocalStorage from 'backbone.localstorage';
import User from '../models/User';

export default class Users extends Backbone.Collection<User> {
    model = User;
    localStorage = new LocalStorage('BackboneMarionetteTemplate.Users');

    constructor(models = [], options = {}) {
        super(models, options);
    }
}
