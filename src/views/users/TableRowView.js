import Backbone from 'backbone';
import template from '../../templates/users/TableRowTemplate';

export default Backbone.Marionette.View.extend({
    tagName: 'tr',
    template: template,
    ui: {
        destroy: '#destroy',
    },
    triggers: {
        'click @ui.destroy': 'click:destroy',
    },
    onClickDestroy: function () {
        this.model.destroy();
    },
});
