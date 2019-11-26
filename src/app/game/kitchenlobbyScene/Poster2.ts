import { Thing } from '../../engine/models/Thing';
import { DoctortillaPlayer } from '../DoctortillaPlayer';
import { Verbs } from '../../engine/stores/Verbs.store';

let options = {
    id: 'POSTER2',
    x: 306,
    y: 58,
    spriteId: 'POSTER_2',
    name: 'POSTER2',
    preferredAction: Verbs.LOOK
};

export class Poster2 extends Thing {
    constructor() {
        super(options);
    }

    protected lookAction(player: DoctortillaPlayer) { 
        player.say('ASTRONAUT');
    }

}
