var colors = {
    detect: 0xf1e5d3,
    vamp: 0xff3e3e,
    wolf: 0x43869f,
    zomb: 0x505050,
    player: 0xe5c395,
    healthBg: 0x441111
};

var Setup = function() {
    this.beginSetup();
};
Setup.prototype.constructor = Setup;

$.extend(Setup.prototype, {
    font: function(fontSize) {
        return this.basicFont = {
            font: fontSize + "pt slkscr",
            fill: 0x000000
        };
    },
    beginSetup: function () {
        //To get the font working, stupid hack
        var label = game.add.text(200, 20, '', this.font(1));
        label.alpha = 0.0;

        this.setupCanvas();
        this.loadImages();
        this.loadSounds();
    },
    setupCanvas: function () {
        //$('body').prepend(title);
        var canvas = $('canvas');
        var gameDiv = $('.game').addClass('contentCentered');
        var emptyDiv = $('<div>', {'class':'container'});
        //emptyDiv.append(title);
        emptyDiv.append(canvas);
        gameDiv.append(emptyDiv);

        //game.add.text(100, 50, ' ', {});


    },
    loadImages: function() {
        Phaser.Canvas.setSmoothingEnabled(game.context, false);
        game.antialias = false;
        game.stage.smoothed = false;


        game.load.image('bg', 'img/bg_game.png');
        game.load.image('prebg','img/bg_game_2.png');

        /*
        game.load.image('best', 'assets/imgs/ms_best.png');
        game.load.image('worst', 'assets/imgs/ms_worst.png');

        game.load.spritesheet('dgIdle', 'assets/imgs/dg_idle_sheet.png', 128, 128, 8);
        game.load.spritesheet('dgRun', 'assets/imgs/dg_walk_sheet.png', 128, 128, 4);

        game.load.spritesheet('qIdle', 'assets/imgs/quick_idle_sheet.png', 128, 128, 6);
        game.load.spritesheet('qRun', 'assets/imgs/quick_run_sheet.png', 128, 128, 4);

        game.load.spritesheet('obIdle', 'assets/imgs/owlbear_idle_sheet.png', 192, 192, 13);
        game.load.spritesheet('obRun', 'assets/imgs/owlbear_run_sheet.png', 192, 192, 4);

        game.load.spritesheet('dbIdle', 'assets/imgs/db_idle_sheet.png', 192, 192, 15);
        game.load.spritesheet('dbRun', 'assets/imgs/db_run_sheet.png', 192, 192, 4);

        game.load.spritesheet('spaceShip', 'assets/imgs/spaceship.png', 192, 192, 1);
        */
    },
    loadSounds: function() {

        game.load.audio('song', ['sounds/monstershift.ogg', 'sounds/monstershift.mp3']);
        game.load.audio('intro', ['sounds/ms_intro.ogg', 'sounds/ms_intro.mp3']);
        /*
        game.load.audio('song', 'sounds/WWandS.MP3');
        game.load.audio('intro', 'sounds/Autumn.MP3');
        */
    }
});
