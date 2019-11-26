import { Thing } from '../../engine/models/Thing';
import { DoctortillaPlayer } from '../DoctortillaPlayer';
import { Verbs } from '../../engine/stores/Verbs.store';

let options = {
    id: 'POSTER1',
    x: 128,
    y: 58,
    spriteId: 'POSTER_1',
    name: 'POSTER1',
    preferredAction: Verbs.LOOK
};

export class Poster1 extends Thing {
    constructor() {
        super(options);
    }

    protected lookAction(player: DoctortillaPlayer) { 
        player.say('LAB_CRAZY_DAYS1')
        .then(() => {
            player.say('LAB_CRAZY_DAYS2').then(() => {
                player.say('LAB_CRAZY_DAYS3');    
            });
        });
    }


}
