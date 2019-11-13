import { Thing } from '../../engine/models/Thing';
import { Directions } from '../../engine/utils/Directions';

import { DoctortillaPlayer } from '../DoctortillaPlayer';
import { Verbs } from '../../engine/stores/Verbs.store';

let options = {
    id: 'SIGN',
    x: 137,
    y: 87,
    spriteId: 'SIGN',
    name: 'SIGN',
    preferredAction: Verbs.LOOK
};

export class Sign extends Thing {
    constructor() {
        super(options);
    }

    protected lookAction(player: DoctortillaPlayer) { 
        player.lookAt(Directions.UP);
        player.say('DONT_THROW_PAPER').then(() => {
            return player.say('CAN_GET_STUCK');
        });
    }

}
