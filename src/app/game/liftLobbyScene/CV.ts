import { Thing } from '../../engine/models/Thing';
import { Player } from '../../engine/models/Player';

export class CV extends Thing {
    constructor() {
        let options = {
            id: 'cv',
            inventoryImageId: 'CV_INV',
            name: 'CV',
            directlyInInventory: true
        };
        super(options);
    }

    lookAction(player: Player): void  {
        player.say('EVERYTHING_IS_TRUE_BUT');
    }

}
