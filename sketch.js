var sea,ship,seaimage,shipimage;
function preload(){
seaimage=loadImage("sea.png");
shipimage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaimage);
  sea.velocityX = -4;
  sea.scale=0.3;


  ship = createSprite(130,200,30,30);
  ship.addAnimation("shipmoving",shipimage);
  ship.scale=0.25
}

function draw() {
  background("blue");
  if(sea.x <0){
    sea.x = sea.width/8;
  }
 drawSprites();
}