import { DoctortillaPlayer } from '../DoctortillaPlayer';
import { Door } from '../../engine/models/Door';

let options = {
    id: 'WC_ACCESS',
    x: 513,
    y: 49,
    spriteId: 'WC_ACCESS',
    name: 'WC_ACCESS',
    goToPosition: {
        x: 550,
        y: 210
    },
    destinationSceneId: 'WC',
    relatedDoorId: 'WC_LOBBY_ACCESS'
};

export class LobbyDoorToWc extends Door {
    constructor() {
        super(options);
        this.forceOpen();
    }

    lookAction(player: DoctortillaPlayer) {
        player.say('SMELL_LIKE_PEACH');
    }   

    closeAction(player: DoctortillaPlayer) {
    
    }
}
