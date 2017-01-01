var Backbone = require('backbone');
var User = require('../../models/User');
var MessageView = require('./MessageView');

module.exports = Backbone.Marionette.View.extend({
    className: 'container',
    template: '#user-main-view',
    regions: {
        messageRegion: {
            el: '#message',
            replaceElement: true,
        }
    },
    ui: {
        inputName: '.name',
        helloBtn : '#hello',
    },
    events: {
        'click @ui.helloBtn': 'onClickHello'
    },
    onClickHello: function(e) {
        e.preventDefault();
        var name = this.ui.inputName.val().trim();
        if(name) {
            this.ui.inputName.val('');
            this.renderMessage(name);
        }
    },
    renderMessage: function(name) {
        var user = new User({ name: name });
        this.getRegion('messageRegion').show(new MessageView({ model: user }));
    },
});
