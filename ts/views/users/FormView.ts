import * as _ from 'underscore';
import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import * as Validation from 'backbone.validation';
import User from '../../models/User';

export default class FormView extends Marionette.ItemView<Backbone.Model> {
    template = '#users-form-view';
    ui = {
        inputName: 'input.name',
        inputAge : 'input.age',
        inputs   : 'input',
        createBtn: '.create'
    };

    constructor(options = {}) {
        super(
            _.defaults(options, {
                className: 'panel panel-default'
            })
       );
    }

    events() {
        return {
            // 'click @ui.createBtn': 'onClickCreate',
            'click .create': 'onClickCreate'
        };
    }

    onClickCreate(e) {
        e.preventDefault();
        this.model = new User();
        this.bindBackboneValidation();

        const name = (<any>this.ui.inputName).val().trim();
        const age = (<any>this.ui.inputAge).val().trim();
        this.model.set({ name: name, age: age });

        if(this.model.isValid(true)) {
            this.collection.create(this.model, { wait: true });
            (<any>this.ui.inputs).val('');
        }
    }

    bindBackboneValidation() {
        Validation.bind(this, {
            valid: (view, attr) => {
                view.$('[name=' + attr + ']').closest('.form-group').removeClass('has-error').find('.help-inline').empty();
            },
            invalid: (view, attr, error) => {
                view.$('[name=' + attr + ']').closest('.form-group').addClass('has-error').find('.help-inline').text(error);
            }
        });
    }
}
