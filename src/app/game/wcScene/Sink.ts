import { Thing } from '../../engine/models/Thing';
import { DoctortillaPlayer } from '../DoctortillaPlayer';
import { Verbs } from '../../engine/stores/Verbs.store';

let options = {
    id: 'SINK',
    x: 44,
    y: 158,
    spriteId: 'SINK_SPRITE',
    name: 'SINK',
    goToPosition: {
        x: 95,
        y: 210
    },
    preferredAction: Verbs.OPEN
};

export class Sink extends Thing {
    constructor() {
        super(options);
    }

    protected lookAction(player: DoctortillaPlayer) {
        player.say('MODERN_SINK');
    }
   
    openAction(player: DoctortillaPlayer): void  {
        player.goToThing(this)
            .then(() => this.open(player));
    }

    closeAction(player: DoctortillaPlayer): void  {
        player.goToThing(this)
            .then(() => this.close(player));
    }

    private open(player: DoctortillaPlayer): void {
        if (this.getAttr('OPEN')) {
            player.say('It is already open!');
        } else {
            this.changeAttr('OPEN', true);
            this.options.preferredAction = Verbs.CLOSE;
            player.say('SAVE_WATER')
        }
    }

    private close(player: DoctortillaPlayer): void {
        if (!this.getAttr('OPEN')) {
            player.say('It is already closed!');
        } else {
            this.changeAttr('OPEN', false);
            this.options.preferredAction = Verbs.OPEN;
        }
    }

    protected onStateChange(): void {
        if(!this.sprite) {
            return;
        }
        if (this.getAttr('OPEN')) {
            this.sprite.frame = 1;
        } else {
            this.sprite.frame = 0;
        }
    }     
}
