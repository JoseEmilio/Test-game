/// <reference path="../../../../my-typings/lib.es6.d.ts" />
import { IPoint, ISpriteInfo } from '../utils/Interfaces';
import { Directions } from '../utils/Directions';
import { uiLayers } from '../ui/UILayers.singleton';
import { actionDispatcher, Actions } from '../utils/ActionDispatcher';
import { activeInventory } from '../state/ActiveInventory.singleton';
import { Verbs } from '../stores/Verbs.store';
import { phaserGame } from '../state/PhaserGame.singleton';
import { Player } from './Player';
import { randomText } from '../utils/RandomText';


interface IThingOptions {
    id: string,
    name: string,
    x?: number,
    y?: number,
    directlyInInventory?: Boolean,
    spriteId?: string,
    inventoryImageId?: string,
    goToPosition?: IPoint,
    isForeground?: Boolean,
    preferredAction?: Verbs,
    preferredInventoryAction? : Verbs,
    hasSingleAction?: Boolean,
    pickable?: Boolean,
    justDecoration?: Boolean,
    directionToLook?: Directions,
    opacity?: number,
    spriteOptions?: Map<string, ISpriteInfo>,
    animationSpeed?: number
}

export abstract class Thing {

    private _state: Map<string, any>;
    protected sprite: Phaser.Sprite;

    constructor(protected options: IThingOptions) {
        this.state = new Map();

        if (this.options.directlyInInventory) {
            this.addToInventory();
        }
    }

    show(): void {
        this.createSprite();
        this.onStateChange();
        this.applyModifier();
        this.addSpriteAnimations();
    }

    get state(): Map<string, any> {
        return this._state;
    }

    set state(newState) {
        if (newState) {
            this._state = newState;
            this.onStateChange();
        }
    }

    get name(): string {
        return this.options.name;
    }

    get id(): string {
        return this.options.id;
    }

    changeAttr(attrName: string, value: any) {
        this._state.set(attrName, value);
        this.onStateChange();
    }

    getAttr(attrName: string): any {
        return this._state.get(attrName);
    }

    getPreferredAction(): Verbs {
        if(this.isInInventory()) {
            return this.options.preferredInventoryAction || Verbs.LOOK;
        } else {
            return this.options.preferredAction || null;
        }
    }

    isInInventory(): Boolean {
        return this.state && this.state.get('IS_IN_INVENTORY');
    }

    hasSingleAction(): Boolean {
        return this.options.hasSingleAction || false;
    }

    getPositionToGoTo(): IPoint {
        if (this.options.goToPosition) {
            return this.options.goToPosition;
        } else {
            return {
                x: this.options.x,
                y: this.options.y
            };
        }
    }

    getPositionOnTop(): IPoint {
        var result = {
            x: this.sprite.x,
            y: Math.round(this.sprite.getBounds().y) - 10
        };
        return result;
    }

    getDirectionToLook(): Directions {
        return this.options.directionToLook || null;
    }

    applyAction(verb: Verbs, player: Player): void {
        switch (verb) {

        case Verbs.GO_TO:
            if (!this.isInInventory()) {
                this.goToAction(player);
            }
            break;
        case Verbs.TAKE:
            this.takeAction(player);
            break;
        case Verbs.LOOK:
            this.lookAction(player);
            break;
        case Verbs.OPEN:
            this.openAction(player);
            break;
        case Verbs.CLOSE:
            this.closeAction(player);
            break;
        case Verbs.PUSH:
            this.pushAction(player);
            break;
        case Verbs.USE:
            this.useAction(player);
            break;
        case Verbs.SPEAK:
            this.speakAction(player);
            break;
        case Verbs.GIVE:
            this.giveAction(player);
            break;
        default:
            throw 'ERROR, unknown action ' + verb;
        }
    }

    get inventoryImage(): string {
        return this.options.inventoryImageId || this.options.spriteId;
    }

    destroy(): void {
        if (this.sprite) {
            this.sprite.destroy();
        }
        if(this.isInInventory) {
            activeInventory.getActiveInventory().remove(this);
        }
    }

    // Methods that can be overwritten in subclasses
    getFrameForInventory(): number {
        return 0;
    }

    playAnimation(animationName: string): void {
        if(this.options.spriteOptions.has(animationName)) {
            this.sprite.animations.play(animationName);
        } else {
            throw 'ERROR: trying to play animation that doesn\'t exist';
        }
    }

    playAnimationOnce(animationName: string): Promise<any> {
        let promise = new Promise((resolve, reject) => {
            if(this.options.spriteOptions.has(animationName)) {
                this.sprite.animations.play(animationName, null, false); //False so it does not loop
                if(this.sprite.animations.currentAnim && this.sprite.animations.currentAnim.onComplete) {
                    this.sprite.animations.currentAnim.onComplete.add(() => {
                        resolve();
                    });
                } else {
                    resolve();
                }
            } else {
                reject();
            }
        });
        return promise;
    }

    protected onStateChange(): void {};
    protected applyModifier(): void {};

    protected goToAction(player: Player): void {
        player.goToThing(this);
    }

    protected takeAction(player: Player): void  {
        if (!this.options.pickable) {
            
        } else if(this.isInInventory()) {
            player.say('I_ALREADY_HAVE_IT');
        } else {
            this.letPlayerComeAndTakeIt(player);
        }
    }

    protected letPlayerComeAndTakeIt(player: Player) {
        player.goToThing(this)
            .then(() => {
                actionDispatcher.execute(Actions.TAKE_OBJECT, this);
            });
    }

    protected lookAction(player: Player): void  {
        player.say(randomText(
                'OH_LOOK_AT_THAT',
                'NICE_OBJECT',
                'BEAUTIFUL_SOMETHING'
            )
        );
    }

    protected openAction(player: Player): void  {
        player.say('THAT_CANNOT_BE_OPENED');
    }

    protected closeAction(player: Player): void  {
        player.say('THAT_CANNOT_BE_CLOSED');
    }

    protected pushAction(player: Player): void  {
        player.say('I_CANT_MOVE_THAT');
    }

    protected useAction(player: Player): void  {
        player.say('I_DONT_KNOW_HOW_TO_DO_THAT');
    }

    protected speakAction(player: Player): void  {
        player.say(randomText(
            'I_WOULDNT_KNOW_WHAT_TO_SAY',
            'I_HAVE_BETTER_THINGS_TO_DO_THAN_TALKING',
            'HI_THERE'
        ));
    }

    protected giveAction(player: Player): void  {
        player.say('I_CANT_DO_THAT');
    }


    //Methods that shouldn't be overriden
    private addToInventory(): void {
        if(activeInventory.getActiveInventory()) {
            activeInventory.getActiveInventory().add(this);
        }
    }

    private createSprite(): void {
        let layerToUser = uiLayers.backgroundObjects;
        if (this.options.isForeground) {
            layerToUser = uiLayers.foregroundObjects;
        }
        this.sprite = layerToUser.create(
            this.options.x,
            this.options.y,
            this.options.spriteId
        );

        if(this.options.opacity) {
            this.sprite.alpha = this.options.opacity;
        }

        if(!this.options.justDecoration) {
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(this.onClick, this);
            this.sprite.events.onInputOver.add(this.onInputOver, this);
            this.sprite.events.onInputOut.add(this.onInputOut, this);
        }
    }

    private onClick(receptor: Phaser.Sprite, pointer: Phaser.Pointer): void {
        actionDispatcher.execute(Actions.SELECT_THING, {
            thing: this,
            secondaryAction: !!pointer.rightButton.isDown
        });
    }

    private onInputOver() {
        actionDispatcher.execute(Actions.CURSOR_OVER_THING, this);
    }

    private onInputOut() {
        actionDispatcher.execute(Actions.CURSOR_OUT_THING, this);
    }

    private addSpriteAnimations(): void {
        if(this.options.spriteOptions) {
            this.options.spriteOptions.forEach( (spritePosition, key) => {
                this.sprite.animations.add(key, spritePosition.frames, this.options.animationSpeed, true);
            });
        }
    }
}