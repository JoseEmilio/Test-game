import { Thing } from '../../engine/models/Thing';
import { DoctortillaPlayer } from '../DoctortillaPlayer';

let options = {
    id: 'WC_ACCESS',
    x: 513,
    y: 49,
    spriteId: 'WC_ACCESS',
    name: 'WC_ACCESS'
};

export class LobbyDoorToWc extends Thing {
    constructor() {
        super(options);
    }

    protected lookAction(player: DoctortillaPlayer) { 
        player.say('SMELL_LIKE_PEACH');
    }

}
