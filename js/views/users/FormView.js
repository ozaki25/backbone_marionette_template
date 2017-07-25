var Backbone = require('backbone');

module.exports = Backbone.Marionette.View.extend({
    className: 'panel panel-default',
    template: '#users-form-view',
    ui: {
        name: '#name',
        age: '#age',
        create: '#create'
    },
    triggers: {
        'click @ui.create': 'click:create'
    },
    modelEvents: {
        sync: 'saved',
    },
    onClickCreate: function() {
        this.bindBackboneValidation();
        this.bindForm();
        this.model.save();
    },
    saved: function() {
        this.triggerMethod('save:user', this.model);
    },
    bindForm: function() {
        this.model.set({
            name: this.getUI('name').val().trim(),
            age: this.getUI('age').val().trim(),
        });
    },
    bindBackboneValidation: function() {
        Backbone.Validation.bind(this, {
            valid: function(view, attr) {
                view
                    .$('[name=' + attr + ']')
                    .closest('.form-group')
                    .removeClass('has-error')
                    .find('.help-inline')
                    .empty();
            },
            invalid: function(view, attr, error) {
                view
                    .$('[name=' + attr + ']')
                    .closest('.form-group')
                    .addClass('has-error')
                    .find('.help-inline')
                    .text(error);
            }
        });
    },
});
