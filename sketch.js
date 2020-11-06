var form,trex,trexs,trex1,trex2,game,player,allPlayers,ground1,ground2,invisibleGround1,invisibleGround2,invisibleGround,ground,obstaclesGroup,obstacle1,obstacle2,cloudImg,cloud
var cloudGroup
var score = 0,PLAY = 1,END = 0
var gamestate = 0; var playercount = 0;var gameState = PLAY
function preload(){
cloudImg = loadImage("images/cloud.png")
obs1 = loadImage("images/obstacle1.png")
obs2 = loadImage("images/obstacle2.png")
obs3 = loadImage("images/obstacle3.png")
obs4 = loadImage("images/obstacle4.png")
obs5 = loadImage("images/obstacle5.png")
obs6 = loadImage("images/obstacle6.png")
trexImg = loadAnimation("images/trex1.png","images/trex3.png","images/trex4.png")
trexco = loadAnimation("images/trex_collided.png")
groundImg = loadImage("images/ground2.png")
}
function setup() {
  createCanvas(1000,800);
  database = firebase.database();
  game = new Game()
  game.getState()
  // if (gamestate===0){
  //   form = new Form();
  // }
  game.start()
  obstaclesGroup = new Group()
  cloudsGroup = new Group()
}

function draw() {
  background("white"); 
  if (gamestate === 1){
    game.play()
  }
  if (playercount === 2){
    game.update(1)
  }
  drawSprites();
}