var Scene = require('../engine/models/Scene.js');
var BackyardSceneBoundaries = require('./BackyardSceneBoundaries.js');
var BackyardDoorToBackstage = require('./BackyardDoorToBackstage.js');
var scenes = require('./Scenes.store.js');

class BackyardScene extends Scene {

    constructor(phaserGame) {
        let options = {
            BG: 'backyard_BG',
            boundaries: BackyardSceneBoundaries,
            things: [BackyardDoorToBackstage]
        };

        super(phaserGame, options);

    }

    static get id() {
        return scenes.BACKYARD;
    }

}

module.exports = BackyardScene;