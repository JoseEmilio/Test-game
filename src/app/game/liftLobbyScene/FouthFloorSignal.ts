import { Thing } from '../../engine/models/Thing';
import { DoctortillaPlayer } from '../DoctortillaPlayer';
import { Verbs } from '../../engine/stores/Verbs.store';

let options = {
    id: '4TH_FLOOR_SIGNAL',
    x: 292,
    y: 36,
    spriteId: '4TH_FLOOR_SIGNAL',
    name: '4TH_FLOOR_SIGNAL',
    preferredAction: Verbs.LOOK
};

export class FouthFloorSignal extends Thing {
    constructor() {
        super(options);
    }

    protected lookAction(player: DoctortillaPlayer) { 
        player.say('IM_AT_FOURTH_FLOOR');
    }

    protected takeAction(player: DoctortillaPlayer) { 
        player.say('SHOULD_LEAVE_VANDALISM');
    }
}
