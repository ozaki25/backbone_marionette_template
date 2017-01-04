import * as Backbone from 'backbone';

export default class User extends Backbone.Model {
    validation = {
        name: {
            required: true,
            msg: '必須項目です。'
        },
        age: [{
            required: true,
            msg: '必須項目です。'
        }, {
            range: [0, 100],
            msg: '0〜100を入力して下さい。'
        }]
    };

    constructor(attr = {}, options = {}) {
        super(attr, options);
    }
}
