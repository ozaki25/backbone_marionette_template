var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
        name: '',
        age: '',
    },
    validation: {
        name: {
            required: true,
            msg: '必須項目です。',
        },
        age: [{
            required: true,
            msg: '必須項目です。',
        }, {
            range: [0, 100],
            msg: '0〜100を入力して下さい。',
        }],
    },
    localStorage: new Backbone.LocalStorage('BackboneMarionetteTemplate.Users')
});
