import Backbone from 'backbone';
import User from '../../models/User';
import FormView from './FormView';
import TableView from './TableView';
import template from '../../templates/users/MainTemplate';

export default Backbone.Marionette.View.extend({
    className: 'container',
    template: template,
    regions: {
        formRegion: '#users-form-region',
        tableRegion: '#users-table-region',
    },
    onRender: function() {
        this.showChildView(
            'formRegion',
            new FormView({ model: new User({}, { collection: this.collection }) })
        );
        this.showChildView('tableRegion', new TableView({ collection: this.collection }));
    },
    onChildviewSaveUser: function(model) {
        this.collection.add(model);
    },
});
