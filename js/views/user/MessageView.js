var Backbone = require('backbone');

module.exports = Backbone.Marionette.View.extend({
    tagName: 'p',
    className: 'lead',
    template: '#user-message-view',
});
