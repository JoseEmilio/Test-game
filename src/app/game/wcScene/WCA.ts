import { WC } from './WC';
import { Directions } from '../../engine/utils/Directions';

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
    directionToLook: Directions.UP
};

export class WCA extends WC {
    constructor() {
        super(options);
    }
}
