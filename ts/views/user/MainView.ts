import * as _ from 'underscore';
import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import User from '../../models/User';
import MessageView from './MessageView';

export default class MainView extends Marionette.LayoutView<Backbone.Model> {
    template = '#user-main-view';
    constructor(options = {}) {
        super(
            _.defaults(options, {
                className: 'container',
            })
        );
    }

    regions() {
        return {
            messageRegion: '#message',
        };
    }

    ui() {
        return {
            inputName: '.name',
            helloBtn : '#hello',
        };
    }

    events() {
        return {
            'click @ui.helloBtn': 'onClickHello'
        };
    }

    onClickHello(e: any) {
        e.preventDefault();

        // ui()で定義しているためthis.ui.xxxとするとtypescriptのコンパイルエラーになる
        // 利用者はui()で定義するがMarionetteが内部でthis.uiに詰め替えているためこの問題が発生する

        // 対応案1
        // this.uiを別の変数に詰め直す
        // その際使用するプロパティをデフォルト値をセットしておかないとエラーになる
        // let uiElement = _.defaults({}, this.ui, { inputName: <any>'' });
        // const name = uiElement.inputName.val().trim();

        // 対応案2
        // this.ui.[xxx]の形式で呼び出す
        // この形式だとコンパイルをすり抜けることができる
        const name = this.ui['inputName'].val().trim();
        if(name) {
            this.ui['inputName'].val('');
            this.renderMessage(name);
        }
    }

    renderMessage(name: string) {
        const user = new User({ name: name });
        this.getRegion('messageRegion').show(new MessageView({ model: user }));
    }
}
