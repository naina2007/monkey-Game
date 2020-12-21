
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
 var survivalTime =  0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,600);
  
  monkey=createSprite(80,315,20,200);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,1200,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
}


function draw() {
  background(255)
  
  if(keyDown("space")&& monkey.y >= 300) {
    monkey.velocityY = -15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  bananas();
  obstacles();
  
  monkey.collide(ground);
 
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime  = survivalTime + Math.round(frameCount/100);
  text("Survival Time: " + survivalTime,100,50);
   
  drawSprites();
  
}

function bananas(){
  
  if (frameCount % 80 === 0) {
    banana= createSprite(600,100,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(150,200))
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    
    bananaGroup.add(banana);
      

    }


  
}

function obstacles(){
  if(frameCount % 300 === 0){
  obstacle = createSprite(600,330,10,10);
  obstacle.addImage(obstacleImage)
  obstacle.velocityX = -3;
  obstacle.scale = 0.1;

  obstacle.lifetime = 200;

  obstacleGroup.add(obstacle);
}

}



