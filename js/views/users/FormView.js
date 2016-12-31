var Backbone = require('backbone');
var User = require('../../models/User');

module.exports = Backbone.Marionette.View.extend({
    className: 'panel panel-default',
    template: '#users-form-view',
    ui: {
        inputName: 'input.name',
        inputAge : 'input.age',
        inputs   : 'input',
        createBtn: '.create'
    },
    events: {
        'click @ui.createBtn': 'onClickCreate'
    },
    onClickCreate: function(e) {
        e.preventDefault();
        this.model = new User();
        this.bindBackboneValidation();

        var name = this.ui.inputName.val().trim();
        var age = this.ui.inputAge.val().trim();
        this.model.set({ name: name, age: age });

        if(this.model.isValid(true)) {
            this.collection.create(this.model, { wait: true });
            this.ui.inputs.val('');
        }
    },
    bindBackboneValidation: function() {
        Backbone.Validation.bind(this, {
            valid: function(view, attr) {
                view.$('[name=' + attr + ']').closest('.form-group').removeClass('has-error').find('.help-inline').empty();
            },
            invalid: function(view, attr, error) {
                view.$('[name=' + attr + ']').closest('.form-group').addClass('has-error').find('.help-inline').text(error);
            }
        });
    }
});

