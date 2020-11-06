class Form {
    constructor(){
        this.input = createInput("Name")
        this.button = createButton("Play")
        this.greeting = createElement('h3');
        this.title = createElement('h2');
        this.reset = createButton("reset")
    }
    hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    }
    display(){
        this.title.html("Trex game")
        this.title.position(450,100)
        
        this.input.position(400,200)
        this.button.position(570,200)
        
        this.reset.position(950,470)
        
        this.button.mousePressed(()=>
        { this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playercount+=1;
        player.index = playercount;
        console.log(playercount)
        player.update()
        player.updateCount(playercount);
         
        
        this.greeting.html("Hello " + player.name ) 
        this.greeting.position(570,300) });
        
        
        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.update(0)

    })
}
}