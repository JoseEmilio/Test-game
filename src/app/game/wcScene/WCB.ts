import { WC } from './WC';
import { Directions } from '../../engine/utils/Directions';
import { Verbs } from '../../engine/stores/Verbs.store';

let options = {
    id: 'WC_B',
    x: 219,
    y: 119,
    spriteId: 'WC_SPRITE',
    name: 'WC',
    goToPosition: {
        x: 236,
        y: 166
    },
    hasSingleAction: true,
    directionToLook: Directions.UP,
    preferredAction: Verbs.LOOK
};

export class WCB extends WC {
    constructor() {
        super(options);
    }
}
