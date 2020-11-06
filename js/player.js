class Player {
    constructor(){
    this.index = 0;
    this.name = null;
    this.life = 0;
    this.score = 0; 
    }
    
    
    getCount()
    { var playerCountRef = database.ref('playercount'); 
    playerCountRef.on("value",function(data)
    { playercount = data.val(); })
     } 
     
     
     updateCount(count)
     { database.ref('/').update({ playercount: count });
    }
    
    
     
     update() 
     { var playerIndex = "players/player" + this.index;
     console.log(playerIndex)
      database.ref(playerIndex).set({ name:this.name,life:this.life });
     }
    
    static getPlayerInfo(){
    var playerinfo = database.ref("players")
    playerinfo.on("value",function(data){ allPlayers = data.val(); })
    }
    
    // static updateRank(rank){
    // database.ref('/').update({ carsatend: rank });
    // }
    
    // getRank(){
    //  database.ref('carsatend').on("value",(data)=>{ this.rank = data.val(); }) 
    // }
     }
    