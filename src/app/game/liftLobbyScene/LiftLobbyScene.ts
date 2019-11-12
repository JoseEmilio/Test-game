import { Scene } from '../../engine/models/Scene';
import { Polygon } from '../../engine/utils/Polygon';
import { Thing } from '../../engine/models/Thing';

import { LobbyDoorToKitchenLobby } from './LobbyDoorToKitchenLobby';
import { LiftADoor } from './LiftADoor';
import { LiftBDoor } from './LiftBDoor';
import { LiftAButton } from './LiftAButton';
import { LiftBButton } from './LiftBButton';
import { LobbyDoorToWc } from './LobbyDoorToWc';
import { FouthFloorSignal } from './FouthFloorSignal';
import { Bin } from './Bin';


const sceneOptions = {
    id: 'LIFTLOBBY',
    backgroundId: 'LIFTLOBBY_BG',
    boundariesConfig: new Polygon([
        {x: 40, y: 221},
        {x: 118, y: 164},
        {x: 493, y: 164},
        {x: 511, y: 174},
        {x: 544, y: 197},
        {x: 565, y: 197},
        {x: 558, y: 221}
    ]),
    things: [
        new LobbyDoorToKitchenLobby(),
        new LobbyDoorToWc(),
        new LiftADoor(),
        new LiftBDoor(),
        new LiftAButton(),
        new LiftBButton(),
        new FouthFloorSignal(),
        new Bin()
    ]
};

export class LiftLobbyScene extends Scene {
    constructor() {
        super(sceneOptions);
    }
}