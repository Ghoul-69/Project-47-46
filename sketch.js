var ground;
var shooter,backgroundImg;
var robotR,robotB,robotG,robitY;
var bullet,shooterImg;
var bulletGroup,robotImg;
var robotsRedGroup, robotsGreenGroup, robotsBlueGroup, robotsYellowGroup;
var score;

function setup() {
  createCanvas(1200,400);
  ground=createSprite(5, 5, 20, 1200);
  shooter=createSprite(100,345,40,60)
  ground.shapeColor="BROWN";
  shooter.shapeColor="BLUE";
  robotsRedGroup=new Group();
  robotsGreenGroup=new Group();
  robotsBlueGroup=new Group();
  robotsYellowGroup=new Group();
 bulletGroup=new Group();
 shooter.addImage(shooterImg)
 shooter.scale= 0.2

 score = 0;

}
function preload(){

  shooterImg = loadImage("shooter.png")
  robotImg=loadAnimation("robot001.png","robot001.png",
  "robot003.png","robot004.png","robot005.png" );
  backgroundImg=loadImage("background1.jpg")

}

function draw() {
  background(backgroundImg);
  drawSprites();
  text("Score: "+ score, 1125,10);
  ground.velocityX=0;
  if(ground.x<0){
    ground.x = ground.width/2;
  }

if (keyDown("UP_ARROW")){
shooter.y = shooter.y-5;

}

if (keyDown("DOWN_ARROW")){
  shooter.y = shooter.y+5;
  
  }
var rand = Math.round(random(1,4));

if(rand == 1){
  spawnRedRobots();
}
else if(rand ==2){
  spawnBlueRobots();
}
else if(rand == 3){
  spawnGreenRobots();
}
else{
  spawnYellowRobots();
}



  shooter.collide(ground);
if (keyDown("SPACE")){
spawnBullets();
}
if (robotsRedGroup.isTouching(bulletGroup)){
robotsRedGroup.destroyEach();
score=score+1;
bulletGroup.destroyEach();
}
if (robotsBlueGroup.isTouching(bulletGroup)){
  robotsBlueGroup.destroyEach();
  bulletGroup.destroyEach();
  score=score+1;
  }
  if (robotsGreenGroup.isTouching(bulletGroup)){
    robotsGreenGroup.destroyEach();
    score=score+1;
    bulletGroup.destroyEach();
    }
if (robotsYellowGroup.isTouching(bulletGroup)){
  robotsYellowGroup.destroyEach();
  score=score+1;
   bulletGroup.destroyEach();
      }
      
if (score ===  10){
  robotsRedGroup.setLifetimeEach   (0);
  robotsBlueGroup.setLifetimeEach  (0);
  robotsGreenGroup.setLifetimeEach (0);
  robotsYellowGroup.setLifetimeEach(0);
  textSize(70)
  fill("black")
  text("You Won", 600,200);
}

if(ground.isTouching(robotsBlueGroup)){
  textSize(70)
  fill("black")
  text("You Loose", 600,200);
  robotsRedGroup.velocityX=0;
  robotsBlueGroup.velocityX=0;
  robotsGreenGroup.velocityX=0;
  robotsYellowGroup.velocityX=0;
}

if(ground.isTouching(robotsRedGroup)){
  textSize(70)
  fill("black")
  text("You Loose", 600,200);
  robotsRedGroup.velocityX=0;
  robotsBlueGroup.velocityX=0;
  robotsGreenGroup.velocityX=0;
  robotsYellowGroup.velocityX=0;
}

if(ground.isTouching(robotsGreenGroup)){
  textSize(70)
  fill("black")
  text("You Loose", 600,200);
  robotR.velocityX=0;
  robotB.velocityX=0;
  robotG.velocityX=0;
  robotY.velocityX=0;
}

if(ground.isTouching(robotsYellowGroup)){
  textSize(70)
  fill("black")
  text("You Loose", 600,200);
  robotsRedGroup.velocityX=0;
  robotsBlueGroup.velocityX=0;
  robotsGreenGroup.velocityX=0;
  robotsYellowGroup.velocityX=0;
}


}

function spawnRedRobots(){
if(frameCount%30==0){
robotR=createSprite(1200,Math.round(random(50,300)),20,50);
robotR.addAnimation("robot",robotImg);
robotR.scale = 0.3;
robotR.velocityX = -6;
robotR.lifetime=300;
robotsRedGroup.add(robotR);
robotR.shapeColor = "red";
}
}



  function spawnBlueRobots(){
    if(frameCount%30==0){
    robotB=createSprite(1200,Math.round(random(50,300)),20,50);
    robotB.addAnimation("robot",robotImg);
    robotB.scale = 0.3;
    robotB.velocityX = -6;
    robotB.lifetime=300;
    robotsBlueGroup.add(robotB)
    robotB.shapeColor = "blue";


    }
    }
    function spawnGreenRobots(){
      if(frameCount%30==0){
      robotG=createSprite(1200,Math.round(random(50,300)),20,50);
      robotG.addAnimation("robot",robotImg);
      robotG.scale = 0.3;
      robotG.velocityX = -6;
      robotG.lifetime=300;
      robotsGreenGroup.add(robotG)
      robotG.shapeColor = "green";

      }
      }

      function spawnYellowRobots(){
        if(frameCount%30==0){
        robotY=createSprite(1200,Math.round(random(50,300)),20,50);
        robotY.addAnimation("robot",robotImg);
        robotY.scale = 0.3;
        robotY.velocityX = -6;
        robotY.lifetime=300;
        robotsYellowGroup.add(robotY)
        robotY.shapeColor = "yellow";

        }
        }

        function spawnBullets(){
          bullet =createSprite(shooter.x,shooter.y-15, 3, 3 );
          bullet.velocityX = 3;
          bulletGroup.add(bullet);
        }
