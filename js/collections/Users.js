import _ from 'underscore';
import Backbone from 'backbone';
import User from '../models/User';

export default class Users extends Backbone.Collection {
    constructor(models, options) {
        super(models, _.defaults({}, options, { model: User }));
        this.localStorage = new Backbone.LocalStorage('BackboneMarionetteTemplate.Users');
    }
}
