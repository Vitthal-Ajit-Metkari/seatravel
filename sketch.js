var seaImage,player,playerImage,sharkImage,shark, sea;
var dragon, dragonImage;

function preload() {
  seaImage=loadImage("sea.png");
  playerImage=loadImage("boat.png");
  sharkImage=loadImage("shark.png");
  dragonImage=loadImage("dragon.png");
}


function setup() {
  createCanvas(800,800);
  player=createSprite(400, 650, 50, 50);
  player.addImage(playerImage);
  player.scale=0.3

  sea=createSprite(400, 200,200, 1460);
  sea.addImage(seaImage);
  sea.scale = 2.5;
  sea.velocityY = 2;

  shark=createSprite(450, 300, 50, 50);
  shark.addImage(sharkImage);
  shark.scale=0.2
  shark.velocityY=5;
  dragon=createSprite(400, 300, 50, 50);
  dragon.addImage(dragonImage);
  dragon.scale=0.1
  dragon.velocityY=6;
}

function draw() {
  background("blue"); 
  sea.depth = player.depth;
  player.depth = player.depth + 1;

  //sea.depth = shark.depth;
  shark.depth = shark.depth + 2;
  dragon.depth = dragon.depth + 2;
  console.log(sea.y);


  if(keyDown("rightArrow") && player.x >= 15 ) {
    player.velocityx = -12;
  }

  if(sea.y > 600){
    sea.y = sea.height/2;
  }
  //obstacles()

  drawSprites();
}

function obstacles() {
  if(frameCount % 80 === 0){
    var obs = createSprite(600,200,30,50);
    obs.debug = true;
    obs.velocityY=2;

    var rand = Math.round(random(1,2));
    switch(rand){
      case 1: obs.addImage(sharkImage);
      break;
      case 2: obs.addImage(dragonImage);
      break;
      default:break;
   }

    obs.lifetime = 700;
    //obsGroup.add(obs);
  }
}