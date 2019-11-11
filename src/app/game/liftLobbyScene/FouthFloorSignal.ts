import { Thing } from '../../engine/models/Thing';
import { DoctortillaPlayer } from '../DoctortillaPlayer';

let options = {
    id: '4TH_FLOOR_SIGNAL',
    x: 288,
    y: 36,
    spriteId: '4TH_FLOOR_SIGNAL',
    name: '4TH_FLOOR_SIGNAL'
};

export class FouthFloorSignal extends Thing {
    constructor() {
        super(options);
    }

    protected lookAction(player: DoctortillaPlayer) { 
        player.say('IM_AT_FOURTH_FLOOR');
    }
}
