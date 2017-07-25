var Backbone = require('backbone');
var template = require('../../templates/hello/HelloTemplate.jst');

module.exports = Backbone.Marionette.View.extend({
    className: 'container',
    template: template,
});
