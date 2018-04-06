import Backbone from 'backbone';
import template from '../../templates/hello/HelloTemplate';

export default Backbone.Marionette.View.extend({
    className: 'container',
    template: template,
});
