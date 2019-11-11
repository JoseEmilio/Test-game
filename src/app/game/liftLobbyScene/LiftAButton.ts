import { Thing } from '../../engine/models/Thing';
import { DoctortillaPlayer } from '../DoctortillaPlayer';

let options = {
    id: 'LIFT_A_BUTTON',
    x: 190,
    y: 97,
    spriteId: 'LIFT_BUTTON',
    name: 'LIFT_BUTTON'
};

export class LiftAButton extends Thing {
    constructor() {
        super(options);
    }

    protected lookAction(player: DoctortillaPlayer) { 
        player.say('MODERN_AND_SEXY_LIFT_BUTTON');
    }
    
    protected pushAction(player: DoctortillaPlayer) {
        player.say('CANT_GO_WITHOUT_CONTRACT');
    }

}
