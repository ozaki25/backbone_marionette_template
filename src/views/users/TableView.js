import Backbone from 'backbone';
import TableBodyView from './TableBodyView';
import template from '../../templates/users/TableTemplate';

export default Backbone.Marionette.View.extend({
    tagName: 'table',
    className: 'table table-condensed',
    template: template,
    regions: {
        tableBodyRegion: {
            el: 'tbody',
            replaceElement: true,
        },
    },
    onRender: function () {
        this.showChildView('tableBodyRegion', new TableBodyView({ collection: this.collection }));
    },
});
