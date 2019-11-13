import { Thing } from '../../engine/models/Thing';
import { DoctortillaPlayer } from '../DoctortillaPlayer';
import { Directions } from '../../engine/utils/Directions';

let options = {
    id: 'URINALS',
    x: 327,
    y: 100,
    spriteId: 'URINALS',
    name: 'URINALS',
    goToPosition: {
        x: 338,
        y: 164
    },
    directionToLook: Directions.UP
};

export class Urinals extends Thing {
    constructor() {
        super(options);
    }

    protected lookAction(player: DoctortillaPlayer) { 
        player.say('REGULAR_URINALS');
    }


}
