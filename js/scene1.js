var tilesize = 10;
class scene1 extends Phaser.Scene {
    constructor() {
        super({key:"scene1"});
    }

    preload() {
        this.load.image("Player", "assets/player.png")
        // this.load.image("")
    }

    create() {
        this.image = this.add.image(400, 300, "Player");

        // this.input.keyboard.on("keyup_D", function(event){
        //     this.image.x += tilesize;
        // }, this);
        // this.input.keyboard.on("keyup_W", function(event){
        //     this.image.y -= tilesize;
        // }, this);
        // this.input.keyboard.on("keyup_A", function(event){
        //     this.image.x -= tilesize;
        // }, this);
        // this.input.keyboard.on("keyup_S", function(event){
        //     this.image.y += tilesize;
        // }, this);
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
        if (this.key_W.isDown || this.key_UP.isDown) {
            this.image.y -= tilesize;
        }
        else if (this.key_A.isDown || this.key_LEFT.isDown){
            this.image.x -= tilesize;
        }
        else if (this.key_S.isDown || this.key_DOWN.isDown){
            this.image.y += tilesize;
        }
        else if (this.key_D.isDown || this.key_RIGHT.isDown){
            this.image.x += tilesize;
        }
    }
}