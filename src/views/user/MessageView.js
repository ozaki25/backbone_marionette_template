import Backbone from 'backbone';
import template from '../../templates/user/MessageTemplate';

export default Backbone.Marionette.View.extend({
    tagName: 'p',
    className: 'lead',
    template: template,
});
