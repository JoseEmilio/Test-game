import { Thing } from '../../engine/models/Thing';
import { Directions } from '../../engine/utils/Directions';

import { DoctortillaPlayer } from '../DoctortillaPlayer';
import { Paper } from './Paper';

let options = {
    id: 'DISPENSER',
    x: 107,
    y: 117,
    spriteId: 'DISPENSER',
    name: 'DISPENSER',
    goToPosition: {
        x: 126,
        y: 164
    }
};

export class Dispenser extends Thing {
    constructor() {
        super(options);
    }

    protected lookAction(player: DoctortillaPlayer) { 
        player.say('TOILER_PAPER_LOCKED_UP');
    }

    protected takeAction(player: DoctortillaPlayer) {
        player.moveTo(this.options.goToPosition).then(() => {    
            player.lookAt(Directions.LEFT);
            return player.say('OK_ALWAYS_USEFUL');
         }).then(() => {
            player.inventory.add(new Paper());
         });
    };

}
