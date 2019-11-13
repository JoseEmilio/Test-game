import { Scene } from '../../engine/models/Scene';
import { Polygon } from '../../engine/utils/Polygon';
import { Thing } from '../../engine/models/Thing';

import { WcDoorToLobby } from './WcDoorToLobby';
import { Sink } from './Sink';
import { Urinals } from './Urinals';
import { WCA } from './WCA';
import { WCB } from './WCB';
import { Dispenser } from './Dispenser';
import { Sign } from './Sign';
import { OtherSign } from './OtherSign';

const sceneOptions = {
    id: 'WC',
    backgroundId: 'WC_BG',
    boundariesConfig: new Polygon([
        {x: 60, y: 221},
        {x: 90, y: 188},        
        {x: 115, y: 188},
        {x: 122, y: 162},
        {x: 167, y: 162},
        {x: 167, y: 190},
        {x: 212, y: 190},
        {x: 215, y: 162},
        {x: 265, y: 162},
        {x: 265, y: 185},
        {x: 315, y: 185},
        {x: 318, y: 161},
        {x: 431, y: 161},
        {x: 491, y: 221}
    ]),
    things: [
        new WcDoorToLobby(),
        new Sink(),
        new Urinals(),
        new WCA(),
        new WCB(),
        new Dispenser(),
        new Sign(),
        new OtherSign(),
    ]
};

export class WCScene extends Scene {
    constructor() {
        super(sceneOptions);
    }
}