import { Thing } from '../../engine/models/Thing';
import { DoctortillaPlayer } from '../DoctortillaPlayer';
import { Directions } from '../../engine/utils/Directions';
import { selectedThing } from '../../engine/state/SelectedObjects';
import { Verbs } from '../../engine/stores/Verbs.store';

let options = {
    id: 'URINALS',
    x: 327,
    y: 100,
    spriteId: 'URINALS',
    name: 'URINALS',
    goToPosition: {
        x: 338,
        y: 164
    },
    directionToLook: Directions.UP,
    hasSingleAction: true,
    preferredAction: Verbs.LOOK
};

export class Urinals extends Thing {
    constructor() {
        super(options);
    }

    protected lookAction(player: DoctortillaPlayer) { 
        player.say('REGULAR_URINALS');
    }
    protected useAction(player: DoctortillaPlayer) {
        if (!selectedThing.thing)
        {
            return player.say('DONT_FEEL_LIKE_IT');
        }

        player.say('I_DONT_KNOW_HOW_TO_DO_THAT');
    }

}
