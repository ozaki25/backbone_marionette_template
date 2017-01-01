import Backbone from 'backbone';
import User from '../models/User';

export default class Users extends Backbone.Collection {
    constructor(models, options) {
        super(models, options);
        this.model = User;
        this.localStorage = new Backbone.LocalStorage('BackboneMarionetteTemplate.Users');
    }
}
