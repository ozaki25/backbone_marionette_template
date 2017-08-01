var Backbone = require('backbone');
var template = require('../../templates/hello/HelloTemplate.html');

module.exports = Backbone.Marionette.View.extend({
    className: 'container',
    template: template,
});
