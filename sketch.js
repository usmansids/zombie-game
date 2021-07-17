var bg,bgImg;
var player, shooterImg, shooter_shooting;
var heart1,heart2,heart3;
var Zombie,ZombieImg


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  heart1=loadImage("assets/heart_1.png");
  heart2=loadImage("assets/heart_2.png");
  heart3=loadImage("assets/heart_3.png");
  ZombieImg = loadImage("assets/zombie.png");
  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);
  zombieGRoup=new Group();
  bulletGroup=new Group();

  

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

h1=createSprite(displayWidth-150,40,20,20)
h1.addImage(heart1)
h1.scale=0.4
h1.visible=false;



h2=createSprite(displayWidth-100,40,20,20)
h2.addImage(heart2)
h2.scale=0.4

h3=createSprite(displayWidth-50,40,20,20)
h3.addImage(heart1)
h3.scale=0.4
}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
  bullet=createSprite(displayWidth-1150,player.y-30,20,10)
  bullet.velocityX=20;
  bulletGroup.add(bullet)

}
Spawnzombie();
drawSprites();

}
function Spawnzombie(){
  if(frameCount%50===0){

  
  zombie=createSprite(random(500,1000),random(100,500),40,40)
  zombie.addImage(ZombieImg)
  zombie.velocityX=-3
  zombie.scale=0.1;
  zombie.lifetime=400
  zombieGRoup.add(zombie)

  }
  

}
