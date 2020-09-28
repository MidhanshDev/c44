var bg,bgImg,running,player,fire,spike,cactus,checkpoint,finish,end,gameOver,restart,collided,title,play,life;
var ground,groundImg;
var invisibleGround;

function preload(){
bgImg = loadImage("images/BG.png");
running = loadAnimation("images/run1.png","images/run2.png","images/run3.png","images/run4.png","images/run5.png");
fire = loadImage("images/fire.png");
spike = loadImage("images/spiketrap.png");
cactus = loadImage("images/cactus.png");
checkpoint =loadImage("images/checkpoint.png");
finish = loadImage("images/finishline.png");
end = loadImage("images/end.png");
gameOver = loadImage("images/gameOver.png");
groundImg = loadImage("images/ground.png");
restart = loadImage("images/restart.png");
collided = loadImage("images/collided.png");
title = loadImage("images/Title.png");
play = loadImage("images/playButton.png");
life = loadImage("images/life.png");

}
function setup() {
  createCanvas(displayWidth,displayHeight);

  ground = createSprite(width/2, height/2+300, width, 10);
  ground.x = ground.width /2;
  ground.velocityX = -6;
  ground.addImage("groundImg",groundImg);
  ground.scale = 2;
  console.log(ground.width);


  player = createSprite(200,height/2+200,10,50);
  player.addAnimation("running",running);
  player.scale = 4;

  

  invisibleGround = createSprite(width/2,height/2+280,width,5);
  invisibleGround.visible = false;
  

}

function draw() {
  background(bgImg); 
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  if(keyDown("space")){
    player.velocityY = -10;
  }
  player.velocityY = player.velocityY+1;
  player.collide(invisibleGround);

  

  drawSprites();

  

}