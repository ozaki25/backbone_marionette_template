import Backbone from 'backbone';
import 'backbone.validation';
import template from '../../templates/users/FormTemplate';

export default Backbone.Marionette.View.extend({
    className: 'panel panel-default',
    template: template,
    ui: {
        name: '#name',
        age: '#age',
        create: '#create',
    },
    triggers: {
        'click @ui.create': 'click:create',
    },
    modelEvents: {
        sync: 'saved',
        clear: 'render',
    },
    onClickCreate: function () {
        this.bindBackboneValidation();
        this.bindForm();
        this.model.save();
    },
    saved: function () {
        this.triggerMethod('save:user', this.model.clone());
        this.model.clear();
        this.model.trigger('clear');
    },
    bindForm: function () {
        this.model.set({
            name: this.getUI('name')
                .val()
                .trim(),
            age: this.getUI('age')
                .val()
                .trim(),
        });
    },
    bindBackboneValidation: function () {
        Backbone.Validation.bind(this, {
            valid: function (view, attr) {
                view
                    .$('[name=' + attr + ']')
                    .closest('.form-group')
                    .removeClass('has-error')
                    .find('.help-inline')
                    .empty();
            },
            invalid: function (view, attr, error) {
                view
                    .$('[name=' + attr + ']')
                    .closest('.form-group')
                    .addClass('has-error')
                    .find('.help-inline')
                    .text(error);
            },
        });
    },
});
