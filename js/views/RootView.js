var Backbone = require('backbone');
var template = require('../templates/RootTemplate.html');

var UserCollection = require('../collections/Users');
var UserModel = require('../models/User');

var HeaderView = require('./HeaderView');
var HelloView = require('./hello/HelloView');
var UserMainView = require('./user/MainView');
var UsersMainView = require('./users/MainView');

module.exports = Backbone.Marionette.View.extend({
    template: template,
    regions: {
        headerRegion: '#header-region',
        mainRegion: '#main-region',
    },
    onRender: function() {
        this.showChildView('headerRegion', new HeaderView());
    },
    showHello: function() {
        this.showChildView('mainRegion', new HelloView());
    },
    showUser: function() {
        this.showChildView('mainRegion', new UserMainView({ model: new UserModel() }));
    },
    showUsers: function() {
        var users = new UserCollection();
        users.fetch();
        this.showChildView('mainRegion', new UsersMainView({ collection: users }));
    },
});
