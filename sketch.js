var runningImg,standImg,bgImg;
var naruto,bg;
var stone, stoneImg;
var pCoins,pCoinsImg;
var sCoin, sCoinImg
var frog,frogImg
var noodles,noodlesImg;
var gameState = "play";
function setup() {
  createCanvas(1100,400);
  bg = createSprite(500,200,1100,400);
  bg.addImage("bg",bgImg);
  bg.scale=1.4;
  bg.velocityX = 0;

  naruto = createSprite(250,275,20,20);
  naruto.scale = 2.5
  naruto.addImage("stand",standImg)
  naruto.addAnimation("Naruto",runningImg);
}

function preload(){
runningImg = loadAnimation("run1.png","run2.png","run3.png","run4.png");
standImg = loadImage("stand.png");
bgImg = loadImage("bg.png");
stoneImg = loadImage("stone.png");
pCoinsImg = loadImage("pile_of_coins.png");
noodldesImg = loadImage("noodles.png");
frogImg = loadImage("gamakichi.png");
sCoinImg = loadImage("1_coin.png");



}

function draw() {
  background("black");  
 
if(gameState==="play"){
  if(bg.x<500){
    bg.x = 550
    
      }
 
    bg.velocityX = -1;
    naruto.changeAnimation("Naruto",runningImg);
  
  spawnStones();
  drawSprites();
}

if(gameState==="end"){

}
}

function spawnStones(){
  if(frameCount%250 === 0){
  stone = createSprite(1120,325,10,10);
  stone.addImage("stone",stoneImg);
  stone.velocityX = -2;
  stone.scale = 0.2
  }
}
