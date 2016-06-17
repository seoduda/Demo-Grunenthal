/**
 * Created by eduardo on 14/06/2016.
 */
var game = new Phaser.Game(800, 480, Phaser.CANVAS, 'i9ação', { preload: preload, create: create, preRender: preRender, render: render }, false, false);

var bt_D1, bt_E1;
var bt_D2, bt_E2;
var bt_D3, bt_E3;
var bt_D4, bt_E4;
var bt_D5, bt_E5;
var bt_D6, bt_E6;
var bt_D7, bt_E7;


//var line;
var mouseBody;
var drawLine = false;
//var gfx;
var text;
var select1 = 0;
var select2 = 0;

var selSpr1;
var selSpr2;


function preload(){
    console.log('Preload') ;
    beginSetup();

}


function beginSetup() {
    setupCanvas();
    loadImages();
    loadSounds();
}

function setupCanvas() {
    var canvas = $('canvas');
    var gameDiv = $('.game').addClass('contentCentered');
    var emptyDiv = $('<div>', {'class':'container'});
    emptyDiv.append(canvas);
    gameDiv.append(emptyDiv);

}
function loadImages() {
    console.log('loadImages') ;
    Phaser.Canvas.setSmoothingEnabled(game.context, false);
    game.antialias = false;
    game.stage.smoothed = false;

    game.load.image('bg', 'img/c3/bg.png');

    game.load.image('ibt_D1','img/c3/bt_dir1.png');
    game.load.image('ibt_D2','img/c3/bt_dir2.png');
    game.load.image('ibt_D3','img/c3/bt_dir3.png');
    game.load.image('ibt_D4','img/c3/bt_dir4.png');
    game.load.image('ibt_D5','img/c3/bt_dir5.png');
    game.load.image('ibt_D6','img/c3/bt_dir6.png');
    game.load.image('ibt_D7','img/c3/bt_dir7.png');

    game.load.image('ibt_E1','img/c3/bt_esq1.png');
    game.load.image('ibt_E2','img/c3/bt_esq2.png');
    game.load.image('ibt_E3','img/c3/bt_esq3.png');
    game.load.image('ibt_E4','img/c3/bt_esq4.png');
    game.load.image('ibt_E5','img/c3/bt_esq5.png');
    game.load.image('ibt_E6','img/c3/bt_esq6.png');
    game.load.image('ibt_E7','img/c3/bt_esq7.png');

    game.load.image('cursor', 'img/c3/Blood_cell_s.png');



}
function loadSounds() {
    console.log('loadSounds') ;
}





function create() {

    game.add.sprite(0, 0, 'bg');
    mouseBody = game.add.sprite(100, 100, 'cursor');
    loadButtons();



//    game.input.onDown.add(click, this);
//    game.input.onUp.add(release, this);
//    game.input.addMoveCallback(move, this);

    text = game.add.text(16, 16, 'Click a sprite', { fill: '#ffffff' });

    /*


     //  Allow dragging - the 'true' parameter will make the sprite snap to the center
     box1.input.enableDrag(true);
     box2.input.enableDrag(true);



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

function clicked(sprite){
    if (select1 == 0 && (getSpriteSide(sprite)=="E")){
        select1 = sprite.key;
        selSpr1 = new selButton(sprite);
        //selSpr1 = sprite;
        selSpr1.sprite.tint = 0xFF0000;
    }else if (select1 == sprite.key){
        select1 = 0;
        //select2 = 0;
        selSpr1.sprite.tint = 0xFFFFFF;
        //selSpr2.tint = 0xFFFFFF;
    }else if (select2 == 0 && (getSpriteSide(sprite)=="D")){
        select2 = sprite.key;
        selSpr2 = new selButton(sprite);

        selSpr2.sprite.tint = 0x9370db;
        //sprite.tint = 0x9370db;
    }else if (select2 == sprite.key){
        select2 = 0;
        selSpr2.sprite.tint = 0xFFFFFF;
    }
    if (testMatch()){
        doMatch();
    }
    //select1 = sprite.key;

    //line = new Phaser.Line((sprite.x + sprite._frame.centerX), (sprite.y + sprite._frame.centerY), mouseBody.x, mouseBody.y);



    //line.setTo((sprite.x + sprite._frame.centerX), (sprite.y + sprite._frame.centerY), mouseBody.x, mouseBody.y);


    text.text = 'You clicked ' + getSpriteSide(sprite);
    //  console.log( sprite);

    //gfx.moveTo((sprite.x + sprite._frame.centerX), (sprite.y + sprite._frame.centerY));
    drawLine = true;


}
function click(pointer) {


    //line.setTo(bt_D1.x, bt_D1.y, mouseBody.x, mouseBody.y);
    drawLine = true;


    /*

     var bodies = game.physics.p2.hitTest(pointer.position, [ cow.body ]);

     if (bodies.length)
     {
     //  Attach to the first body the mouse hit
     mouseSpring = game.physics.p2.createSpring(mouseBody, bodies[0], 0, 30, 1);
     line.setTo(cow.x, cow.y, mouseBody.x, mouseBody.y);
     drawLine = true;
     }

     */
}

function release() {
    drawLine = false;
    /*
     game.physics.p2.removeSpring(mouseSpring);


     */

}

function move(pointer, x, y, isDown) {


    mouseBody.x = x;
    mouseBody.y = y;

    if (selSpr1) {
        //    line.setTo(selSpr1.x, selSpr1.y, mouseBody.x, mouseBody.y);
    }



    //gfx.lineTo(mouseBody.x, mouseBody.y);

}



function update() {
    // game.physics.arcade.overlap(box1, wagon1, collectBox, null, this);
}

function preRender() {

    if (selSpr1) {
        //line.setTo(selSpr1.x + selSpr1._frame.centerX, selSpr1.y, mouseBody.x, mouseBody.y);
    }
}


function render() {

    if (selSpr1) {
        //game.debug.geom(line);
    }
}


function getSpriteSide(sprite){
    console.log(sprite);
    var side =sprite.key.substring(4,5);
    return side;
}


/*
 mouseBody.body.static = true;
 mouseBody.body.setCircle(10);
 mouseBody.body.data.shapes[0].sensor = true;
 */


//line = new Phaser.Line(bt_D1.x, bt_D1.y, mouseBody.x, mouseBody.y);

/*
 gfx = game.add.graphics(12, 40);
 gfx.lineWidth = 4;
 gfx.lineColor = 0x008000;
 gfx.moveTo(10, 10);
 gfx.lineTo(50, 100);
 */

function loadButtons(){
    bt_D1 =  game.add.sprite(591, 100, 'ibt_D1');
    bt_D1.inputEnabled = true;
    bt_D1.input.pixelPerfectClick = true;
    bt_D1.events.onInputDown.add(clicked, this);

    bt_D2 =  game.add.sprite(590, 155, 'ibt_D2');
    bt_D2.inputEnabled = true;
    bt_D2.input.pixelPerfectClick = true;
    bt_D2.events.onInputDown.add(clicked, this);

    bt_D3 =  game.add.sprite(440, 210, 'ibt_D3');
    bt_D3.inputEnabled = true;
    bt_D3.input.pixelPerfectClick = true;
    bt_D3.events.onInputDown.add(clicked, this);

    bt_D4 =  game.add.sprite(464, 268, 'ibt_D4');
    bt_D4.inputEnabled = true;
    bt_D4.input.pixelPerfectClick = true;
    bt_D4.events.onInputDown.add(clicked, this);

    bt_D5 =  game.add.sprite(594, 325, 'ibt_D5');
    bt_D5.inputEnabled = true;
    bt_D5.input.pixelPerfectClick = true;
    bt_D5.events.onInputDown.add(clicked, this);

    bt_D6 =  game.add.sprite(498, 380, 'ibt_D6');
    bt_D6.inputEnabled = true;
    bt_D6.input.pixelPerfectClick = true;
    bt_D6.events.onInputDown.add(clicked, this);

    bt_D7 =  game.add.sprite(283, 437, 'ibt_D7');
    bt_D7.inputEnabled = true;
    bt_D7.input.pixelPerfectClick = true;
    bt_D7.events.onInputDown.add(clicked, this);

    bt_E1 =  game.add.sprite(20, 108, 'ibt_E1');
    bt_E1.inputEnabled = true;
    bt_E1.input.pi20elPerfectClick = true;
    bt_E1.events.onInputDown.add(clicked, this);

    bt_E2 =  game.add.sprite(20, 165, 'ibt_E2');
    bt_E2.inputEnabled = true;
    bt_E2.input.pi20elPerfectClick = true;
    bt_E2.events.onInputDown.add(clicked, this);

    bt_E3 =  game.add.sprite(20, 220, 'ibt_E3');
    bt_E3.inputEnabled = true;
    bt_E3.input.pi20elPerfectClick = true;
    bt_E3.events.onInputDown.add(clicked, this);

    bt_E4 =  game.add.sprite(20, 277, 'ibt_E4');
    bt_E4.inputEnabled = true;
    bt_E4.input.pi20elPerfectClick = true;
    bt_E4.events.onInputDown.add(clicked, this);

    bt_E5 =  game.add.sprite(20, 335, 'ibt_E5');
    bt_E5.inputEnabled = true;
    bt_E5.input.pi20elPerfectClick = true;
    bt_E5.events.onInputDown.add(clicked, this);

    bt_E6 =  game.add.sprite(20, 390, 'ibt_E6');
    bt_E6.inputEnabled = true;
    bt_E6.input.pi20elPerfectClick = true;
    bt_E6.events.onInputDown.add(clicked, this);

    bt_E7 =  game.add.sprite(20, 447, 'ibt_E7');
    bt_E7.inputEnabled = true;
    bt_E7.input.pi20elPerfectClick = true;
    bt_E7.events.onInputDown.add(clicked, this);
}

function testMatch(){
    var mached = false;
    var matchD = new Array(0, "D4", "D5", "D6", "D1", "D3", "D7", "D2");
    if (select1 != 0 && select2 != 0) {
        if (matchD[selSpr1.number] == selSpr2.key){
            mached = true;
        }
    }
    return mached;
}

function doMatch(){
    selSpr1.sprite.tint = 0x4d4d4d;
    selSpr1.sprite.events.onInputDown.active =false;

    selSpr2.sprite.tint = 0x4d4d4d;
    selSpr2.sprite.events.onInputDown.active =false;

    select1 = 0;
    select2 = 0;
    clearSelButton(selSpr1);
    clearSelButton(selSpr2);
}


function selButton(sprite) {
    this.sprite = sprite;
    this.side = sprite.key.substring(4,5);
    this.key = sprite.key.substring(4,6);
    this.number = sprite.key.substring(5,6);
}

function clearSelButton(selButton){
    selButton.sprite = null;
    selButton.side = 0;
    selButton.key = 0;
    selButton.number = 0;
}
