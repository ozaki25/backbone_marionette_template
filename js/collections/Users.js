import _ from 'underscore';
import Backbone from 'backbone';
import User from '../models/User';

export default class Users extends Backbone.Collection {
    constructor(models, options) {
        const defaultOptions = { model: User };
        super(models, _.defaults({}, options, defaultOptions));
        this.localStorage = new Backbone.LocalStorage('BackboneMarionetteTemplate.Users');
    }
}
