class Form {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h3');
    }
  
    hide(){
      this.title.hide();
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
    }
  
    display(){
       this.title = createElement('h2')
      this.title.html("Iguana Run");
      this.title.position(displayWidth/2 - 110, displayHeight/4 - 50);
      
     
      
      this.input.position(displayWidth/2 - 100, displayHeight/4 + 50);
      this.button.position(displayWidth/2 - 40, displayHeight/4 + 100);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
  
        player.name = this.input.value();
        spectator.name = this.input.value();
        
        playerCount+=1;
        player.index = playerCount;
        player.update()
        player.updateCount(playerCount);  
        spectatorCount+=1;
        spectator.specindex = spectatorCount;
        spectator.updatespec();
        spectator.updateSpecCount(playerCount);    
        this.greeting.html("Welcome to Iguana Run" + player.name)
        this.greeting.position(displayWidth/2 - 50, displayHeight/4)
      });
  
    }
  }