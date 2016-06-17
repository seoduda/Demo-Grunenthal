/**
 * Created by eduardo on 15/06/2016.
 */


var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'I9ação', { preload: preload, create: create, update: update });
var visor;
var mesa;
var painel;
var coracao;

var cor_group;
var cell_group;


var cor_item;

var atrio_D, atrio_E;
var ventriolo_D, ventriolo_E;
var hemoglobinas = new Array();
var posicoes = new Array();

var iBc_ad_1;
var iBc_ad_2;
var iBc_ad_3;
var iBc_ad_4;
var iBc_ad_5;
var iBc_ad_6;
var iBc_ad_7;


var wagon1, wagon2;
var text;
var counter = 0;

function preload(){
    console.log('Preload') ;
    beginSetup();

}


function beginSetup() {
    //To get the font working, stupid hack
    //var label = game.add.text(200, 20, '', this.font(1));
    //label.alpha = 0.0;

    setupCanvas();
    loadImages();
    loadSounds();
}

function setupCanvas() {
    console.log('setupCanvas') ;
    var canvas = $('canvas');
    var gameDiv = $('.game').addClass('contentCentered');
    var emptyDiv = $('<div>', {'class':'container'});
    emptyDiv.append(canvas);
    gameDiv.append(emptyDiv);

}

function loadImages(){
    console.log('loadImages') ;
    /*
    Phaser.Canvas.setSmoothingEnabled(game.context, false);
    game.antialias = false;
    game.stage.smoothed = false;
    */

    game.load.image('iBg', 'img/c4/bg.png');
    game.load.image('iMesa', 'img/c4/mesa.png');
    game.load.image('iVisor', 'img/c4/visor.png');
    game.load.image('iPainel', 'img/c4/painel.png');
    game.load.image('iCoracao', 'img/c4/coracao_comnomes.png');

    game.load.image('iAtrio_D', 'img/c4/atrio_D.png');
    game.load.image('iAtrio_E', 'img/c4/atrio_E.png');
    game.load.image('iVentriolo_D', 'img/c4/ventriolo_D.png');
    game.load.image('iVentriolo_E', 'img/c4/ventriolo_E.png');
    //game.load.image('iDuda', 'img/c4/bt_duvida.png');

    for (i=1; i<=7; i++){
        hemoglobinas.push(new bloodCell(game.load.image('iBc_ad_'+i, 'img/c4/ad/ad_'+i+'.png'),
            'AD','AD_'+i, 'iBc_ad_'+i ));
    }

    for (i=1; i<=7; i++){
        hemoglobinas.push(new bloodCell(game.load.image('iBc_ae_'+i, 'img/c4/ae/ae_'+i+'.png'),
            'AE','AE_'+i, 'iBc_ae_'+i ));
    }
    for (i=1; i<=7; i++){
        hemoglobinas.push(new bloodCell(game.load.image('iBc_vd_'+i, 'img/c4/vd/vd_'+i+'.png'),
            'VD','VD_'+i, 'iBc_vd_'+i ));
    }
    for (i=1; i<=7; i++){
        hemoglobinas.push(new bloodCell(game.load.image('iBc_ve_'+i, 'img/c4/ve/ve_'+i+'.png'),
            'VE','VE_'+i ,'iBc_ve_'+i));
    }


    /*
    game.load.image('cursor', 'img/c3/Blood_cell_s.png');
    */



}
function loadSounds() {
    console.log('loadSounds') ;
    /*
     game.load.audio('song', ['sounds/monstershift.ogg', 'sounds/monstershift.mp3']);
     game.load.audio('intro', ['sounds/ms_intro.ogg', 'sounds/ms_intro.mp3']);

     */
}




function preload() {
    console.log('Preload') ;
    beginSetup();

}

function create() {
    //  A simple background for our game
    game.add.sprite(0, 0, 'iBg');
    mesa = game.add.sprite(15, 270, 'iMesa');
    painel = game.add.sprite(0, 0, 'iPainel');
    painel.alpha = 0;

    text = game.add.text(10, 12, '', { fill: '#ffffff' });

    visor =  game.add.sprite(180, 140, 'iVisor');
    visor.inputEnabled = true;
    //visor.input.pixelPerfectClick = true;
    visor.events.onInputDown.add(clickVisor, this);

    clickVisor();


    //var tween = game.add.tween(mesa).to( { alpha: 0 }, 1000, "Linear", true, 0, -1);


    //wagon1 = game.add.sprite(300, 500, 'wagon');
    //wagon2 = game.add.sprite(600, 500, 'wagon');

/*
    //  Input Enable the sprites
    box1.inputEnabled = true;
    box2.inputEnabled = true;

    //  Allow dragging - the 'true' parameter will make the sprite snap to the center
    box1.input.enableDrag(true);
    box2.input.enableDrag(true);

 box2.input.enableDrag(true);
 box2.inputEnabled = true;
    game.physics.arcade.enable(box1);
    game.physics.arcade.enable(wagon2);

    box1.events.onDragStart.add(startDrag, this);
    box1.events.onDragStop.add(stopDrag, this);


    //this.huesoCopy.events.onDragStop.add(function(currentSprite){
    //    this.stopDrag(currentSprite, this.hueso);


    //game.add.text(32, 32, 'Drag and release the sprite', { font: '16px Arial', fill: '#FFFF00' });
    text = game.add.text(16, 16, 'nada...: 0', { fontSize: '16px', fill: '#FFFF00' });
*/
}


function update() {


    // game.physics.arcade.overlap(box1, wagon1, collectBox, null, this);
}

function startDrag(cell) {
    console.log(cell);
    text.text = "startDrag"+this.name;

}

function stopDrag(cell) {

    console.log("stopDrag");
    game.physics.arcade.overlap(cell, cor_group, collisionHandler, null, this);


    /*
    if (this.game.physics.arcade.overlap(box1, wagon2, function() {
            box1.input.draggable = false;
            box1.position.copyFrom(wagon2.position);
            box1.anchor.setTo(wagon2.anchor.x, wagon2.anchor.y);
            text.setText("match!");
        }))
    {
        //text.setText("uia");
        //box1.position.copyFrom(currentSprite.originalPosition);
    }
    // And re-enable it upon release
    //box1.body.moves = true;
    // game.physics.arcade.overlap(box1, wagon1, collectBox, null, this);
*/
}



function collectBox(){
    /*

    text.setText("Mudou 1");
    */

}

function clickVisor(){
    console.log('clickVisor') ;
/*
    var tween1 = game.add.tween(mesa).to({alpha: 0 }, 300, Phaser.Easing.Linear.None, true);
    var tween2 = game.add.tween(visor).to({alpha: 0 }, 300, Phaser.Easing.Linear.None, true);
    var tween3 = game.add.tween(painel).to({alpha: 1 }, 300, Phaser.Easing.Linear.None, true);
    */

    visor.inputEnabled = false;

    var tween1 = game.add.tween(mesa).to({alpha: 0 }, 3, Phaser.Easing.Linear.None, true);
    var tween2 = game.add.tween(visor).to({alpha: 0 }, 3, Phaser.Easing.Linear.None, true);
    var tween3 = game.add.tween(painel).to({alpha: 1 }, 3, Phaser.Easing.Linear.None, true);

    tween1.onComplete.add(function () {
        startGame();
    }.bind(this));


    //var tween = game.add.tween(mesa).to( { alpha: 1 }, 1000, "Linear", true, 0, -1);

}

function startGame(){
    //game.physics.startSystem(Phaser.Physics.ARCADE);
    text.text = "Coração de melão, de melão, DE melão, melão melão!";


    displayGameImages();

}

function displayGameImages(){
    coracao = game.add.sprite(96, 83, 'iCoracao');

    cor_group = game.add.group();
    cor_group.enableBody = true;
    cor_group.physicsBodyType = Phaser.Physics.ARCADE;
    cell_group = game.add.group();
    cell_group.enableBody = true;
    cell_group.physicsBodyType = Phaser.Physics.ARCADE;


    /*
        atrio_D = game.add.sprite(265, 240, 'iAtrio_D');
        atrio_E = game.add.sprite(426, 240, 'iAtrio_E');
        ventriolo_D  = game.add.sprite(292, 380, 'iVentriolo_D');
        ventriolo_E = game.add.sprite(425, 380, 'iVentriolo_E');
    */
    createCor();
    createPositions();
    positionBloodCells();
}



function createCor(){


    //cor_group.enableBody = true;
    //cor_group.physicsBodyType = Phaser.Physics.ARCADE;
    //cell_group.enableBody = true;
    //cell_group.physicsBodyType = Phaser.Physics.ARCADE;

    var c1 =  cor_group.create(265, 240, 'iAtrio_D');
    c1.name = 'AD';
    var c2 =  cor_group.create(426, 240, 'iAtrio_E');
    c2.name = 'AE';
    var c3 =  cor_group.create(292, 380, 'iVentriolo_D');
    c3.name = 'VD';
    var c4 =  cor_group.create(425, 380, 'iVentriolo_E');
    c4.name = 'VE';

}

function positionBloodCells(){
    //cell_group.inputEnabled = true;



    for (i=0;i<posicoes.length; i++) {
        var bc = hemoglobinas.pop();

        bc.posId = i;
        bc.posX = posicoes[i].posX;
        bc.posY = posicoes[i].posY;
        var c =  cell_group.create(posicoes[i].posX, posicoes[i].posY, bc.name);
        c.name = bc.key;
        c.inputEnabled = true;
        c.input.enableDrag(true);
        c.events.onInputDown.add(clickListener,this);
        c.events.onDragStart.add(startDrag, this);
        c.events.onDragStop.add(stopDrag, this);

        // bc.sprite = game.add.sprite(bc.posX, bc.posY, bc.name);
        bc.item = c;
        //bc.sprite.inputEnabled = true;
        //bc.sprite.input.enableDrag(true);

        //game.physics.arcade.enable(bc.sprite);

        //bt_D1.input.pixelPerfectClick = true;
        //bc.sprite.events.onInputDown.add(function(image){clickListener(image,bc.name)}, this);

        //bc.sprite.events.onDragStart.add(startDrag, this);
        //bc.sprite.events.onDragStop.add(stopDrag, this);

    }


 /*
        box2.input.enableDrag(true);

    box2.inputEnabled = true;
    game.physics.arcade.enable(box1);
    game.physics.arcade.enable(wagon2);

    box1.events.onDragStart.add(startDrag, this);
    box1.events.onDragStop.add(stopDrag, this);
*/
}


function clickListener(_image){
    //console.log(_image) ;
    text.text = "lalas: "+ _image.key;
}

function collisionHandler(cellG,corG) {
    console.log("collisionHandler");
  //console.log(corG)
  //console.log(cellG)
    if (cellMatches(corG, cellG)){
        console.log("cellMatches");
        cellG.kill();
    }
}


function cellMatches(corG, cellG ){
    //var matches = false;
    var cell_target = cellG.name.substr(0,2);
    var cor_name = corG.name.substr(0,2);
    var matches =  (cell_target == cor_name);

    text.text = "target:="+  cell_target + "<->"+ cor_name  ;
    /*
    switch (cell_target){
        case "AD":
            if (cor_name == "AD"){
                matches = true;
            }
         break;
        case "AE":
            if (cor_name == "AE"){
                matches = true;
            }
            break;
        case "VD":
            if (cor_name == "VD"){
                matches = true;
            }
            break;
        case "VD":
            if (cor_name == "VD"){
                matches = true;
            }
            break;
    }
    */
    return matches;
}


function createPositions(){
    posicoes.push(new position(120, 90));
    posicoes.push(new position(2, 140));
    posicoes.push(new position(15, 250));
    posicoes.push(new position(640, 120));
    posicoes.push(new position(80, 478));
    posicoes.push(new position(340, 470));
    posicoes.push(new position(480, 470));
    posicoes.push(new position(646, 250));
    posicoes.push(new position(642, 375));
    posicoes.push(new position(608, 485));
    posicoes.push(new position(480, 80));
}


function bloodCell (_image, _target, _key,_name) {
    this.sprite = null;
    this.name = _name;
    this.image = _image;
    this.target = _target;
    this.key = _key;
    this.posX = -12;
    this.posy = -12;
    this.posId = -1;
    this.item = null;

}

function position(_X, _Y) {
    this.posX = _X;
    this.posY = _Y;
}



