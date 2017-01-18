import * as _ from 'underscore';
import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import * as Validation from 'backbone.validation';
import User from '../../models/User';

export default class FormView extends Marionette.ItemView<Backbone.Model> {
    template = '#users-form-view';

    constructor(options = {}) {
        super(
            _.defaults(options, {
                className: 'panel panel-default',
                ui: {},
            })
       );
    }

    ui() {
        return {
            inputName: 'input.name',
            inputAge : 'input.age',
            inputs   : 'input',
            createBtn: '.create'
        };
    }

    events() {
        return {
            'click @ui.createBtn': 'onClickCreate',
        };
    }

    onClickCreate(e: any) {
        e.preventDefault();
        this.model = new User();
        this.bindBackboneValidation();

        // ui()で定義しているためthis.ui.xxxとするとtypescriptのコンパイルエラーになる
        // 利用者はui()で定義するがMarionetteが内部でthis.uiに詰め替えているためこの問題が発生する

        // 対応案1
        // this.uiを別の変数に詰め直す
        // その際使用するプロパティをデフォルト値をセットしておかないとエラーになる
        // let uiElement = _.defaults({}, this.ui, { inputName: <any>'', inputAge: <any>0 });
        // const name = uiElement.inputName.val().trim();
        // const age = uiElement.inputAge.val().trim();

        // 対応案2
        // this.ui.[xxx]の形式で呼び出す
        // この形式だとコンパイルをすり抜けることができる
        const name = this.ui['inputName'].val().trim();
        const age = this.ui['inputAge'].val().trim();

        this.model.set({ name: name, age: age });

        if(this.model.isValid(true)) {
            this.collection.create(this.model, { wait: true });
            this.ui['inputs'].val('');
        }
    }

    bindBackboneValidation() {
        // backbone.validationの型定義ファイルがない
        Validation.bind(this, {
            valid: (view, attr) => {
                view.$(`[name=${attr}]`).closest('.form-group').removeClass('has-error').find('.help-inline').empty();
            },
            invalid: (view, attr, error) => {
                view.$(`[name=${attr}]`).closest('.form-group').addClass('has-error').find('.help-inline').text(error);
            }
        });
    }
}
