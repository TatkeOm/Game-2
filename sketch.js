var gameState = "start";
var startState,clone, bgImage , bg, ghost;

function preload(){
 bgImage = loadImage("images.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  startState = new StateChange();
  
  bg = createSprite(windowWidth/2,windowHeight/2);
  bg.addImage("infinite bg", bgImage);
  bg.scale = 6.5;

  clone = createSprite(100,windowHeight/2 - 100)
  clone.shapeColor = "blue"
  clone.scale = 0.3
  clone.visible = false;
}

function draw() {
  background(180);  
  drawSprites();
  
  if(gameState === "start"){
    startState.display();
  }
  if(gameState == "play"){

    clone.visible = true;
    bg.velocityX = -3;
    
    //infinite bg
    if(bg.x < windowWidth/2){
      bg.x = windowWidth - 100;
    }

   //player control
   if(keyIsDown(UP_ARROW)) {
    clone.y = clone.y  -8
   } 
   if(keyIsDown(DOWN_ARROW)) {
    clone.y = clone.y  +8
   }
   if(keyIsDown(LEFT_ARROW)) {
    clone.x = clone.x  -8
   }
   if(keyIsDown(RIGHT_ARROW)) {
    clone.x = clone.x  +8
   }

  }
}

//NPC
function createEnemyLevel1(){
 
} 