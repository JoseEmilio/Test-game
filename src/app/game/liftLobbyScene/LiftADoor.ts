import { Thing } from '../../engine/models/Thing';
import { DoctortillaPlayer } from '../DoctortillaPlayer';

let options = {
    id: 'LIFT_A_DOOR',
    x: 153,
    y: 13,
    spriteId: 'LIFT_A_DOOR',
    name: 'LIFT_DOOR'
};

export class LiftADoor extends Thing {
    constructor() {
        super(options);
    }

    protected lookAction(player: DoctortillaPlayer) { 
        player.say('MODERN_AND_SEXY_LIFT');
    }
    
    protected openAction(player: DoctortillaPlayer) {
        player.say('SHOULD_PUSH_THE_BUTTON');
    }
    protected speakAction(player: DoctortillaPlayer) {
        player.say('CALL_LIFT');
    }
}
