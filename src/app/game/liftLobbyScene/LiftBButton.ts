import { Thing } from '../../engine/models/Thing';
import { DoctortillaPlayer } from '../DoctortillaPlayer';
import { Verbs } from '../../engine/stores/Verbs.store';

let options = {
    id: 'LIFT_B_BUTTON',
    x: 420,
    y: 97,
    spriteId: 'LIFT_BUTTON',
    name: 'LIFT_BUTTON',
    preferredAction: Verbs.PUSH
};

export class LiftBButton extends Thing {
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
