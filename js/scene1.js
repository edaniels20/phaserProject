class scene1 extends Phaser.Scene {
    constructor() {
        super({key:"scene1"});
    }

    preload() {
        this.load.image("GFS", "assets/player.png")
    }

    create() {
        this.image = this.add.image(400, 300, "GFS");

        this.input.keyboard.on("keyup_D", function(event){
            this.image.x += 10;
        }, this);
        this.key_UP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.key_LEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.key_DOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.key_RIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


    }
    update(delta) {
        movement();
    }
    movement(){
        if (this.key_W.isDown || this.key_UP.isDown) {
            this.image.y--;
        }
        if (this.key_A.isDown || this.key_LEFT.isDown){
            this.image.x--;
        }
        if (this.key_S.isDown || this.key_DOWN.isDown){
            this.image.y++;
        }
        if (this.key_D.isDown || this.key_RIGHT.isDown){
            this.image.x++;
        }
    };
}