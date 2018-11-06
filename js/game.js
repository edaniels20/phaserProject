var config = {
    type:Phaser.AUTO,
    width: 800,
    height: 400,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y : 200}
        }
    },
    scene: [ scene1 ]
};

var game = new Phaser.Game(config);