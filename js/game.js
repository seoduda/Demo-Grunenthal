var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update }, false, false);
var gameWorld, actors, theBottom; //Groups
var porta;
//var music;
var introBg, endBg;
var introInterval;
var titleText;
var labelBegin;
var background1;



function preload() {
    console.log('Preload') ;
    beginSetup();
    //gameWorld = game.add.group();
}


function create() {
    console.log('CREATE') ;
    background1 = game.add.sprite(0, 0, 'iBG_1', {});
    porta =  game.add.sprite(349, 487, 'iPorta');
    porta.inputEnabled = true;
    //porta.input.pixelPerfectClick = true;
    porta.events.onInputDown.add(clickListener, this);

    titleText = game.add.text(30, 70, "Bem-vindo à área de Recursos Humanos e Comunicação.", {
        font: "24pt Calibri",
        fill: 0x000000
    });



    labelBegin = game.add.text(game.world.width / 4, game.world.height - 60, 'Clique na porta para continuar!', {
        font: "20pt Calibri",
        fill: 0x000000
    });

    introInterval = setInterval (function() {
        for (var i = 0; i < labelBegin.text.length + 1; i++) {
            (function(e) {
                setTimeout(function() {
                    if (e > 0) {
                        labelBegin.addColor("#000000", e - 1);
                    }
                    labelBegin.addColor("#ffffff", e);
                }, e * 50);
            })(i);
        }
    }.bind(labelBegin), 4000);

}

function startGame() {
    //game.started = true;
    //window.location.href = "http://www.google.com";


    var background2 = game.add.sprite(0, 0, 'iBG_2', {}, gameWorld);
    var bt_Rh = game.add.sprite(600, 320, 'iBt_Rh');
    bt_Rh.inputEnabled = true;
    bt_Rh.events.onInputDown.add(clickRH, this);


    var bt_Com = game.add.sprite(145, 340, 'iBt_Com');
    bt_Com.inputEnabled = true;
    bt_Com.events.onInputDown.add(clickComunica, this);

    var bt_elevador_1 = game.add.sprite(46, 424, 'iElevador_1');
    bt_elevador_1.inputEnabled = true;
    bt_elevador_1.alpha = 0;
    //bt_elevador_1.tint = 0x000000;
    bt_elevador_1.events.onInputDown.add(clickComunica, this);

    var bt_elevador_2 = game.add.sprite(542, 396, 'iElevador_2');
    bt_elevador_2.alpha = 0;
    bt_elevador_2.inputEnabled = true;
    //bt_elevador_2.tint = 0x000000;
    bt_elevador_2.events.onInputDown.add(clickRH, this);


    //var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    var style = { font: "16pt Calibri", fill: "#000"};

    var titleText2 = game.add.text(30, 70, "Estas áreas são o coração da nossa cidade, já que os colaboradores atendidos e cuidados \n" +
                                      " por estas duas áreas são a força que movimenta Green Valley e a faz pulsar, \n" +
                                       "irrigando de energia vital todo o sistema.",style);

    titleText2.setShadow(1, 1, 'rgba(255,255,255,100)', 2);

    var labelBegin2 = game.add.text(game.world.width / 4, game.world.height - 60, 'Clique em um dos elevadores para continuar!', {
        font: "20pt Calibri",
        fill: 0x000000
    });

    introInterval = setInterval (function() {
        for (var i = 0; i < labelBegin2.text.length + 1; i++) {
            (function(e) {
                setTimeout(function() {
                    if (e > 0) {
                        labelBegin2.addColor("#000000", e - 1);
                    }
                    labelBegin2.addColor("#ffffff", e);
                }, e * 50);
            })(i);
        }
    }.bind(labelBegin2), 4000);

}


function clickListener(){

    porta.inputEnabled = false;
    var tween1 = game.add.tween(labelBegin).to({alpha: 0 }, 3, Phaser.Easing.Linear.None, true);
    var tween2 = game.add.tween(background1).to({alpha: 0 }, 3, Phaser.Easing.Linear.None, true);
    var tween3 = game.add.tween(porta).to({alpha: 0 }, 3, Phaser.Easing.Linear.None, true);

    tween1.onComplete.add(function () {   startGame();}.bind(this));
}
function clickComunica() {
    window.location.href = "./demo2.html";
}


function clickRH(){
    window.location.href = "./demo3.html";
}



function update() {

}


function beginSetup() {
    this.setupCanvas();
    this.loadImages();

}
function  setupCanvas() {
    //$('body').prepend(title);
    var canvas = $('canvas');
    var gameDiv = $('.game').addClass('contentCentered');
    var emptyDiv = $('<div>', {'class':'container'});
    emptyDiv.append(canvas);
    gameDiv.append(emptyDiv);


}

function loadImages () {
    Phaser.Canvas.setSmoothingEnabled(game.context, false);
    game.antialias = false;
    game.stage.smoothed = false;

    game.load.image('iBG_1', 'img/c1/bg_2png.png');
    game.load.image('iPorta', 'img/c1/porta_1.png');

    game.load.image('iBG_2', 'img/c2/bg.png');
    game.load.image('iBt_Rh', 'img/c2/bt_rh.png');
    game.load.image('iBt_Com', 'img/c2/bt_com.png');
    game.load.image('iElevador_1', 'img/c2/elevador_1.png');
    game.load.image('iElevador_2', 'img/c2/elevador_2.png');
}

