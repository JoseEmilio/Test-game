var Scene = require('../engine/scene.js');
var BackstageSceneBoundaries = require('./BackstageSceneBoundaries.js');
var BackstageDoorToStreet = require('./BackstageDoorToStreet.js');
var BackstageVendingMachine = require('./BackstageVendingMachine.js');
var scenes = require('./Scenes.js');

class BackstageScene extends Scene {

    constructor(phaserGame) {
        let options = {
            BG: 'backstage_BG',
            boundaries: BackstageSceneBoundaries,
            things: [BackstageDoorToStreet, BackstageVendingMachine]
        };

        super(phaserGame, options);

    }

    static get id() {
        return scenes.BACKSTAGE;
    }

}

module.exports = BackstageScene;