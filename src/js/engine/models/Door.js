var Thing = require('./Thing.js');
var Verbs = require('../stores/Verbs.store.js');
var actionDispatcher = require('../ActionDispatcher.singleton.js');
var actions = require('../stores/Actions.store.js');

class Door extends Thing {

    applyAction(verb, player) {

        switch (verb) {

        case Verbs.GO_TO:
            this._goToDestinationIfOpen(player);
            break;
        case Verbs.OPEN:
            player.goToThing(this)
                .then(() => this._open(player));
            break;
        case Verbs.CLOSE:
            player.goToThing(this)
                .then(() => this._close(player));
            break;
        case Verbs.LOOK:
            player.say('That\'s a wonderful door. So woody.');
            break;
        default:
            player.say('I cannot do that.');
            break;
        }
    }

    get name() {
        return this.options.name || 'door';
    }

    getPreferredAction() {
        if (this.getAttr('OPEN')) {
            return Verbs.CLOSE;
        } else {
            return Verbs.OPEN;
        }
    }

    forceOpen() {
        this.changeAttr('OPEN', true);
    }

    _open(player) {
        if (this.getAttr('OPEN')) {
            player.say('It is already open!');
        } else {
            this.changeAttr('OPEN', true);
        }
    }

    _close(player) {
        if (!this.getAttr('OPEN')) {
            player.say('It is already closed!');
        } else {
            this.changeAttr('OPEN', false);
        }
    }

    _onStateChange() {
        if (this.getAttr('OPEN')) {
            this.sprite.frame = 1;
        } else {
            this.sprite.frame = 0;
        }
    }

    _goToDestinationIfOpen(player) {
        player.goToThing(this).then(() => {
            if (this.getAttr('OPEN')) {
                actionDispatcher.execute(actions.GO_TO_SCENE, {
                        scene: this.options.destination,
                        relatedDoor: this.options.relatedDoor
                    }
                );
            }
        });
    }
}

module.exports = Door;