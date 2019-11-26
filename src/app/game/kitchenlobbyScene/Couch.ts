import { Thing } from '../../engine/models/Thing';
import { DoctortillaPlayer } from '../DoctortillaPlayer';
import { Verbs } from '../../engine/stores/Verbs.store';

let options = {
    id: 'COUCH',
    x: 322,
    y: 101,
    spriteId: 'COUCH',
    name: 'COUCH',
    preferredAction: Verbs.LOOK,
    hasSingleAction: true
};

export class Couch extends Thing {
    constructor() {
        super(options);
    }

    protected lookAction(player: DoctortillaPlayer) { 
        player.say('LOOK_CONFORTABLE');
    }

    protected useAction(player: DoctortillaPlayer) {
        player.say('TOO_SOON');
    }

}
