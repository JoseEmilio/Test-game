import { DoctortillaPlayer } from '../DoctortillaPlayer';
import { Door } from '../../engine/models/Door';

let options = {
    id: 'KITCHEN_LOBBY_TO_LIFT_LOBBY_DOOR',
    x: 168,
    y: 35,
    spriteId: 'KITCHEN_LOBBY_TO_LIFT_LOBBY_DOOR_SPRITE',
    name: 'KITCHEN_LOBBY_TO_LIFT_LOBBY_DOOR',
    goToPosition: {
        x: 227,
        y: 160
    },
    destinationSceneId: 'LIFTLOBBY',
    relatedDoorId: 'DOOR_LOBBY_TO_KITCHEN_LOBBY'
};

export class KitchenlobbyDoorToLiftLobby extends Door {
    constructor() {
        super(options);
    }

    lookAction(player: DoctortillaPlayer) {

    }   
}