var actionDispatcher = require('../ActionDispatcher.singleton.js');
var labels = require('../Labels.singleton.js');
var layout = require('./LayoutManager.singleton.js');
var actions = require('../stores/Actions.store.js');
var style = require('./Style.singleton.js');

class ActionButton {

    constructor(phaserGame, verb, position) {
        this.phaserGame = phaserGame;
        this._position = layout.getVerbButtonPosition(position);
        this.verb = verb;

        this._createButton();
        this._createText();

    }

    highlight() {
        this.button.frame = 2;
    }

    unhighlight() {
        this.button.frame = 0;
    }

    _createButton() {
        this.button = this.phaserGame.add.button(
            this._position.x,
            this._position.y,
            'buttons_BG',
            this._onClick,
            this,
            1,
            0,
            2,
            1
        );
        this.phaserGame.$$mainGroup.add(this.button);
        this.button.z = layout.z.VERBS_BUTTONS;
        this.button.fixedToCamera = true;
    }

    _createText() {

        this.shadowText = this.phaserGame.add.bitmapText(
            1 + this._position.x + layout.VERB_BUTTON_WIDTH / 2,
            1 + this._position.y + layout.VERB_BUTTON_HEIGHT / 2,
            'font_32_black',
            labels.l(this.verb.label),
            style.DEFAULT_FONT_SIZE
        );
        this.shadowText.anchor.setTo(0.5, 0.5);
        this.shadowText.fixedToCamera = true;
        this.phaserGame.$$mainGroup.add(this.shadowText);
        this.shadowText.z = layout.z.VERBS_BUTTONS_TEXT;

        this.text = this.phaserGame.add.bitmapText(
            this._position.x + layout.VERB_BUTTON_WIDTH / 2,
            this._position.y + layout.VERB_BUTTON_HEIGHT / 2,
            'font_32_white',
            labels.l(this.verb.label),
            style.DEFAULT_FONT_SIZE
        );
        this.text.anchor.setTo(0.5, 0.5);
        this.text.fixedToCamera = true;
        this.phaserGame.$$mainGroup.add(this.text);
        this.text.z = layout.z.VERBS_BUTTONS_TEXT + 1;
    }

    _onClick() {
        actionDispatcher.execute(actions.SELECT_VERB, this.verb);
    }

}

module.exports = ActionButton;