var PLAY=1; 
var END=0;
var gamestate=PLAY;
var mosquitoImage, antImage, beeImage, player, playerImage;
var groupM, groupB, groupA, BG, score;
var gameover, restart, gameoverImage, restartImage;
var groupM1, groupB1, groupA1;
var groupM2;
function preload() {
  mosquitoImage = loadImage("M2.png");
  antImage = loadImage("A2.png");
  beeImage = loadImage("B2.png");
  playerImage = loadImage("P2.png");
  BG = loadImage("BG.png");
  gameoverImage = loadImage("GO.png");
  restartImage = loadImage("R2.png");
}


function setup() {
  createCanvas(1000, 1000);
  textSize(30);
  textFont("verdana");
  fill ("white");
  player=createSprite(400, 400, 40, 40);
  player.addImage(playerImage);
  groupM=new Group();
  groupA=new Group();
  groupB=new Group();
  groupM1=new Group();
  groupA1=new Group();
  groupB1=new Group();
  groupM2=new Group();
  score=0;
  gameover = createSprite(400,300);
  gameover.addImage(gameoverImage);
  
  restart = createSprite(400,600);
  restart.addImage(restartImage);
  gameover.scale=2.5;
  restart.scale=1;
  gameover.visible=false;
  restart.visible=false;
}

function draw() {
  background(BG);
  text(score, 600, 50);
  if (gamestate===PLAY){
    player.x=mouseX;
    player.y=mouseY;
    mosquito();
    ant();
    bee(); 
    mosquito1();
    ant1();
    bee1(); 
    /*
    if (mousePressedOver(groupA)){
      groupA.destroyEach();
      score+=1;
    }
    if (mousePressedOver(groupB)){
      groupB.destroyEach();
      score-=1;
    }
    if (mousePressedOver(groupM)){
      gamestate=END;
     }
     */
  }
                
  if (gamestate===END){
   gameover.visible=true;
   restart.visible=true;
   groupM.velocityY=0;
   groupA.velocityY=0;
   groupB.velocityY=0;
   groupM1.velocityY=0;
   groupA1.velocityY=0;
   groupB1.velocityY=0;
   groupM2.velocityY=0;
   if (mousePressedOver(restart)) {
    reset();
  }
  }
drawSprites();
 }
 

function mosquito() {
  if (frameCount% 45==0){
    var m=createSprite(random(50, 750), 0, 30, 30);
    m.addImage(mosquitoImage);
    m.shapeColor="black";
    m.velocityY=random(25, 30);
    m.lifetime=110;
    m.depth=player.depth;
    player.depth+=1;
    groupM.add(m);
  }
}
function ant() {
  if (frameCount% 45==0){
    var a=createSprite(random(50, 750), 0, 30, 30);
    a.addImage(antImage);
    a.shapeColor="red";
    a.velocityY=random(25, 35);
    a.lifetime=110;
    a.depth=player.depth;
    player.depth+=1;
    groupA.add(a);
  }
}
function bee() {
  if (frameCount% 55==0){
    var b=createSprite(random(740, 750), 0, 30, 30);
    b.addImage(beeImage);
    b.shapeColor="yellow";
    b.velocityY=random(25, 40);
    b.lifetime=110;
    b.depth=player.depth;
    player.depth+=1;
    groupB.add(b);
  }
}
function mosquito1() {
  if (frameCount% 42==0){
    var m=createSprite(random(50, 750), 0, 30, 30);
    m.addImage(mosquitoImage);
    m.shapeColor="black";
    m.velocityY=random(25, 45);
    m.lifetime=110;
    m.depth=player.depth;
    player.depth+=1;
    groupM1.add(m);
  }
}
function ant1() {
  if (frameCount% 48==0){
    var a=createSprite(random(50, 750), 0, 30, 30);
    a.addImage(antImage);
    a.shapeColor="red";
    a.velocityY=random(25, 50);
    a.lifetime=110;
    a.depth=player.depth;
    player.depth+=1;
    groupA1.add(a);
  }
}
function bee1() {
  if (frameCount% 53==0){
    var b=createSprite(random(740, 750), 0, 30, 30);
    b.addImage(beeImage);
    b.shapeColor="yellow";
    b.velocityY=random(25, 55);
    b.lifetime=110;
    b.depth=player.depth;
    player.depth+=1;
    groupB1.add(b);
  }
}
function mosquito2() {
  if (frameCount% 45==0){
    var m=createSprite(random(50, 750), 0, 30, 30);
    m.addImage(mosquitoImage);
    m.shapeColor="black";
    m.velocityY=random(25, 60);
    m.lifetime=110;
    m.depth=player.depth;
    player.depth+=1;
    groupM2.add(m);
  }
}
function reset(){
  gamestate = PLAY;
  gameover.visible = false;
  restart.visible = false;
  score=0;
}
function mouseClicked(){
  if(groupM.isTouching(player)||groupM1.isTouching(player)||groupM2.isTouching(player)){
    groupM.destroyEach();
    score-=5;
  }
  if(groupA.isTouching(player)||groupA1.isTouching(player)){
    groupA.destroyEach();
    score++;
  }
  if(groupB.isTouching(player)||groupB1.isTouching(player)){
    groupB.destroyEach();
    score+=3;
  }
}
