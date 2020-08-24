class Form{
    constructor(){
        this.title = createElement('h2')
        this.title2 = createElement('h3')
        this.inputBox = createInput("")
        this.button = createButton("Ready!")
        this.greeting = createElement('h3')  
        this.resetButton = createButton('Restart!')  
    }
     display(){
        
        this.title.html("Car Racing")
        this.title.position(displayWidth/2, 0);

        this.title2.html("Name")
        this.title2.position(70, 140)

        
        this.inputBox.position(130, 160);

        this.resetButton.position(displayWidth - 100, 20);

        this.button.position(250, 200);

        
        this.button.mousePressed(()=>{

            this.inputBox.hide()
            this.button.hide()
            this.title2.hide()

            player.name = this.inputBox.value()
            playerCount = playerCount + 1
            player.index = playerCount
            
            player.updatePlayerInfo()
            player.updatePlayerCount(playerCount)
            
            this.greeting.html("Welcome " + player.name)
            this.greeting.position(130, 160);

        })

        this.resetButton.mousePressed(()=>{
            game.updateGameState(0);
            player.updatePlayerCount(0);
        })
    }
    hide(){
        this.inputBox.hide()
        this.button.hide()
        this.title2.hide()
        this.greeting.hide();
    }


}
