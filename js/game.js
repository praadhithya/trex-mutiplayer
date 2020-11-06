class Game{
    constructor(){
        
    }
    getState()
{ var gameStateRef = database.ref('gamestate');
 gameStateRef.on("value",function(data)
 { gamestate = data.val();}) 
}

update(state)
{ database.ref('/').update({ gamestate: state }); 
}

async start()
{ if(gamestate === 0)
    { player = new Player();
      var playerCountRef = await database.ref('playercount').once("value");
       if(playerCountRef.exists()){
          playercount = playerCountRef.val();
         player.getCount(); 
         console.log(playercount);
        }
    form = new Form();
    form.display();
     }
     ground1 = createSprite(500,400,1000,20);
     ground1.addImage("ground",groundImg);
     ground1.x = ground1.width /2;
     ground1.visible = false;

     ground2 = createSprite(500,700,1000,20);
     ground2.addImage("ground",groundImg);
     ground2.x = ground2.width /2;
     ground2.visible = false;
     ground=[ground1,ground2]

     invisibleGround1 = createSprite(500,410,1000,10);
     invisibleGround1.visible = false;

     invisibleGround2 = createSprite(500,710,1000,10);
     invisibleGround2.visible = false;

    // tempinvisibleGround = createSprite(500,710,1000,10);
   //  tempinvisibleGround.visible = false;
     invisibleGround = [invisibleGround1,invisibleGround2]

    

     trex1 = createSprite (100,400);
     trex1.addAnimation("running",trexImg)
     trex1.addAnimation("collided",trexco)
     trex1.visible = false;
     trex2 = createSprite (100,700);
     trex2.addAnimation("running",trexImg)
     trex2.addAnimation("collided",trexco)
     trex2.visible = false;
     trexs = [trex1,trex2]
    }

    play(){ 
        form.hide();
           Player.getPlayerInfo();
       
            if(allPlayers !== undefined){ 
             background(180)
             trex1.visible = true;
             trex2.visible = true;
             ground1.visible = true;
             ground2.visible = true;
             var index = 0;
             var x = 50 ;
             
             var y;
              for(var plr in allPlayers){
                if (ground2.x < 0){
                        ground2.x = ground2.width/2
                      }
                      if (ground1.x < 0){
                        ground1.x = ground1.width/2
                      }
                      if (gameState === PLAY){

                      
               index = index + 1 ;
               // x = x + 270;
               // y = displayHeight - allPlayers[plr].distance;
                ground[index-1].velocityX = -(6)// + 3*score/100);

                 trexs[index-1].x = x;
                 
                   if (index === player.index){
                           var tempghround = "ground" + index
                            //tempinvisibleGround = "invisibleGround" + index

                            stroke(10)
                            fill("red")
                            //ellipse(x,y,65,65)
                            trexs[index - 1].shapeColor = "red";
                            if(keyDown("space") && trexs[index-1].y >= 346){
                                console.log(trexs[index-1].y)
                                trexs[index-1].velocityY = -12
                            }

                            //add gravaty
                            trexs[index-1].velocityY = trexs[index-1].velocityY + 0.8
                           spawnObstacles1()
                           spawnObstacles2()
                           spawnClouds()
                         // camera.position.x = displayWidth/2;
                         //  camera.position.y = cars[index-1].y;
                         trexs[index-1].collide(invisibleGround1[index-1])

                         if(obstaclesGroup.isTouching(trexs[index-1])){
                            console.log("game End")
                           gameState = END;
                         
                                                }
                                        }
                          
                                }else if(gameState === END){
                                        obstaclesGroup.setVelocityXEach(0);
                                        cloudsGroup.setVelocityXEach(0);
                                        tempghround.velocityX = 0;
                                       // trexs[index-1].velocityY = 0;
                                      // trexs[index-1].changeAnimation("collided",trexco);
                                       obstaclesGroup.setLifetimeEach(-1);
                                       cloudsGroup.setLifetimeEach(-1);
                                        console.log("inside end")
                                }
                        }
                }
       drawSprites()
       

       
}
}
 // function spawnObstacles
function spawnObstacles2() {
    if(frameCount % 60 === 0) {
       obstacle2 = createSprite(500,400,10,40);
      
      //obstacle.debug = true;
      obstacle2.velocityX = -(6)// + 3*score/100);
      
      //generate random obstacles
      var rand = Math.round(random(1,6));
      switch(rand) {
        case 1: obstacle2.addImage(obs1);
                break;
        case 2: obstacle2.addImage(obs2);
                break;
        case 3: obstacle2.addImage(obs3);
                break;
        case 4: obstacle2.addImage(obs4);
                break;
        case 5: obstacle2.addImage(obs5);
                break;
        case 6: obstacle2.addImage(obs6);
                break;
        default: break;
      }
      
      
      //assign scale and lifetime to the obstacle           
      obstacle2.scale = 0.9;
      obstacle2.lifetime = 100;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle2);
    }
  }
  function spawnObstacles1() {
    if(frameCount % 60 === 0) {
       obstacle1 = createSprite(700,680,10,40);
      
      //obstacle.debug = true;
      obstacle1.velocityX = -(6)// + 3*score/100);
      
      //generate random obstacles
      var rand = Math.round(random(1,6));
      switch(rand) {
        case 1: obstacle1.addImage(obs1);
                break;
        case 2: obstacle1.addImage(obs2);
                break;
        case 3: obstacle1.addImage(obs3);
                break;
        case 4: obstacle1.addImage(obs4);
                break;
        case 5: obstacle1.addImage(obs5);
                break;
        case 6: obstacle1.addImage(obs6);
                break;
        default: break;
      }
      
      //assign scale and lifetime to the obstacle           
      obstacle1.scale = 0.9
      obstacle1.lifetime = 100;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle1);
    }
  }
  //function spawnCloudes
  function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      cloud = createSprite(600,120,40,10);
      cloud.y = Math.round(random(120,180));
      cloud.addImage(cloudImg);
      //cloudImage.resize(50,50);
      cloud.scale = 0.7;
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = 200;
      
      //adjust the depth
      cloud.depth = trex1.depth;
      trex1.depth = trex1.depth + 1;
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }
    
  }
