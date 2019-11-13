import { WC } from './WC';
import { Directions } from '../../engine/utils/Directions';
import { Verbs } from '../../engine/stores/Verbs.store';

let options = {
    id: 'WC_A',
    x: 126,
    y: 119,
    spriteId: 'WC_SPRITE',
    name: 'WC',
    goToPosition: {
        x: 140,
        y: 166
    },
    hasSingleAction: true,
    directionToLook: Directions.UP,
    preferredAction: Verbs.LOOK
};

export class WCA extends WC {
    constructor() {
        super(options);
    }
}
