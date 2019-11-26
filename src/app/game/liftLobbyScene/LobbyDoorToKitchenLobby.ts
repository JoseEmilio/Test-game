import { Door } from '../../engine/models/Door';
import { DoctortillaPlayer } from '../DoctortillaPlayer';

let options = {
    id: 'DOOR_LOBBY_TO_KITCHEN_LOBBY',
    x: 28,
    y: 73,
    spriteId: 'DOOR_LOBBY_TO_KITCHEN_LOBBY_SPRITE',
    name: 'DOOR_LOBBY_TO_KITCHEN_LOBBY', 
    goToPosition: {
        x: 88,
        y: 192
    },
    destinationSceneId: 'KITCHENLOBBY',
    relatedDoorId: 'KITCHEN_LOBBY_TO_LIFT_LOBBY_DOOR'
};

export class LobbyDoorToKitchenLobby extends Door {
    constructor() {
        super(options);
    }

    lookAction(player: DoctortillaPlayer) { 
        player.say('HIGH_SECURITY');
    }
}

