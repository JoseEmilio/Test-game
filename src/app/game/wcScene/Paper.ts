import { Thing } from '../../engine/models/Thing';
import { Player } from '../../engine/models/Player';

export class Paper extends Thing {
    constructor() {
        let options = {
            id: 'toilet_paper',
            inventoryImageId: 'PAPER_INV',
            name: 'TOILET_PAPER',
            directlyInInventory: true
        };
        super(options);    
    }

    lookAction(player: Player): void  {
        player.say('ALWAYS_USEFUL');
    }

}
