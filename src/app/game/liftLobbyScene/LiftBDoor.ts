import { Thing } from '../../engine/models/Thing';
import { DoctortillaPlayer } from '../DoctortillaPlayer';

let options = {
    id: 'LIFT_B_DOOR',
    x: 307,
    y: 13,
    spriteId: 'LIFT_B_DOOR',
    name: 'LIFT_DOOR'
};

export class LiftBDoor extends Thing {
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
