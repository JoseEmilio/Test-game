import { DoctortillaPlayer } from '../DoctortillaPlayer';
import { Door } from '../../engine/models/Door';

let options = {
    id: 'WC_LOBBY_ACCESS',
    x: 351,
    y: 150,
    spriteId: 'WC_LOBBY_ACCESS',
    name: 'WC_LOBBY_ACCESS',
    goToPosition: {
        x: 420,
        y: 203
    },
    destinationSceneId: 'LIFTLOBBY',
    relatedDoorId: 'WC_ACCESS'
};

export class WcDoorToLobby extends Door {
    constructor() {
        super(options);
    }

    lookAction(player: DoctortillaPlayer) {

    }   
}