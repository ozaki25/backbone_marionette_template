import Backbone from 'backbone';
import User from '../../models/User';

export default class FromView extends Backbone.Marionette.View {
    constructor(options) {
        super(options);
        this.className = 'panel panel-default';
        this.template = '#users-form-view';
        this.ui =  {
            inputName: 'input.name',
            inputAge : 'input.age',
            inputs   : 'input',
            createBtn: '.create',
        };
        this.events = {
            'click @ui.createBtn': 'onClickCreate',
        };
    }

    onClickCreate(e) {
        e.preventDefault();
        this.model = new User();
        this.bindBackboneValidation();

        const name = this.ui.inputName.val().trim();
        const age = this.ui.inputAge.val().trim();
        this.model.set({ name: name, age: age });

        if(this.model.isValid(true)) {
            this.collection.create(this.model, { wait: true });
            this.ui.inputs.val('');
        }
    }

    bindBackboneValidation() {
        Backbone.Validation.bind(this, {
            valid: (view, attr) => {
                view.$('[name=' + attr + ']').closest('.form-group').removeClass('has-error').find('.help-inline').empty();
            },
            invalid: (view, attr, error) => {
                view.$('[name=' + attr + ']').closest('.form-group').addClass('has-error').find('.help-inline').text(error);
            }
        });
    }
}
