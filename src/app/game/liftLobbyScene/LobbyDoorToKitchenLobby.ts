import { Thing } from '../../engine/models/Thing';
import { DoctortillaPlayer } from '../DoctortillaPlayer';

let options = {
    id: 'DOOR_LOBBY_TO_KITCHEN_LOBBY',
    x: 28,
    y: 73,
    spriteId: 'DOOR_LOBBY_TO_KITCHEN_LOBBY',
    name: 'DOOR_LOBBY_TO_KITCHEN_LOBBY'
};

export class LobbyDoorToKitchenLobby extends Thing {
    constructor() {
        super(options);
    }

    protected lookAction(player: DoctortillaPlayer) { 
        player.say('HIGH_SECURITY');
    }
}
