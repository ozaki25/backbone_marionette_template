import Backbone from 'backbone';
import MessageView from './MessageView';
import template from '../../templates/user/MainTemplate';

export default Backbone.Marionette.View.extend({
    className: 'container',
    template: template,
    regions: {
        messageRegion: '#message-region',
    },
    ui: {
        name: '#name',
        greet: '#greet',
    },
    triggers: {
        'click @ui.greet': 'click:greet',
    },
    modelEvents: {
        'change:name': 'renderMessage',
    },
    onClickGreet: function() {
        var name = this.getUI('name')
            .val()
            .trim();
        if (!name) return;
        this.getUI('name').val('');
        this.model.set({ name: name });
    },
    renderMessage: function() {
        this.getRegion('messageRegion').show(new MessageView({ model: this.model }));
    },
});
