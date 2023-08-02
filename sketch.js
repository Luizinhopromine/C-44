var player
var playerImg,playershootingImg
function preload() {
 backgroundImg = loadImage("ciry.png")
 playerImg = loadImage("DERO.png")
 playershootimg = loadAnimation("Deroshooting.png","Deroshooting2.png")
}

function setup() {
  canvas = createCanvas(1200, 600)
  player = createSprite(40,50,40,60)
  player.addImage(playerImg)
 //engine = Engine.create();
  //world = engine.world;
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);
  //player = createSprite(40,50,40,60)
  //player.addImage(playerImg)
 //player = createImg(playerImg) 
  //Engine.update(engine);
  drawSprites()
}

