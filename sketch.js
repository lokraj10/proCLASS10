var ship, shipMoving
var sea, seaMoving

function preload(){
  seaMoving = loadImage("sea.png")
  shipMoving = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png")
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(100,200,400,400)
  sea.scale = .3
  sea.addImage(seaMoving)
  sea.x = sea.width/2
  ship = createSprite(200,200,50,50)
  ship.addAnimation("ship",shipMoving)
  ship.scale = .3         
}

function draw() {
  sea.velocityX = -3
  
  
  if(sea.x < 400){

    sea.x = sea.width/2
  }
  background("blue");
  drawSprites();
}