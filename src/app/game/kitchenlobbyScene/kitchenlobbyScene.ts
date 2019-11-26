import { Scene } from '../../engine/models/Scene';
import { Polygon } from '../../engine/utils/Polygon';
import { Thing } from '../../engine/models/Thing';

import { KitchenlobbyDoorToLiftLobby } from './kitchenlobbyDoorToLiftLobby';
import { Couch } from './Couch';
import { Poster1 } from './Poster1';
import { Poster2 } from './Poster2';

const sceneOptions = {
    id: 'KITCHENLOBBY',
    backgroundId: 'KITCHEN_LOBBY_BG',
    boundariesConfig: new Polygon([
        {x: 60, y: 221},        
        {x: 115, y: 159},
        {x: 315, y: 159},
        {x: 315, y: 172},
        {x: 502, y: 172},
        {x: 555, y: 221}
    ]),
    things: [
        new KitchenlobbyDoorToLiftLobby(),
        new Couch(),
        new Poster1(),
        new Poster2()
    ]
};

export class KitchenlobbyScene extends Scene {
    constructor() {
        super(sceneOptions);
    }
}