import { WC } from './WC';
import { Directions } from '../../engine/utils/Directions';

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
    directionToLook: Directions.UP
};

export class WCB extends WC {
    constructor() {
        super(options);
    }
}
