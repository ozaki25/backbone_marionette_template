import Backbone from 'backbone';
import User from '../models/User';
import 'backbone.localstorage';

export default Backbone.Collection.extend({
    model: User,
    localStorage: new Backbone.LocalStorage('BackboneMarionetteTemplate.Users'),
});
