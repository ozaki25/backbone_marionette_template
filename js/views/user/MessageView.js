var Backbone = require('backbone');
var template = require('../../templates/user/MessageTemplate.jst');

module.exports = Backbone.Marionette.View.extend({
    tagName: 'p',
    className: 'lead',
    template: template,
});
