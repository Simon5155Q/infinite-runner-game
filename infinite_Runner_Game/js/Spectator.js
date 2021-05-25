class Spectator {
    constructor(){
      this.specindex = null;
      this.name = null;
    }

  getSpecCount(){
      var specCountRef = database.ref('specCount');
      specCountRef.on("value",function(data){
        spectatorCount = data.val();
      })
    }
  
  
    updateSpecCount(count){
        database.ref('/').update({
          spectatorCount: count
        });
      }
  
    updatespec(){
        var specIndex = "spectators/spectator" + this.index;
        database.ref(specIndex).set({
          name:this.name,
        });
      }
  
    static getspecInfo(){
        var specInfo = database.ref("spectator");
        specInfo.on("value",(data)=>{
          allSpectators = data.val();
        })
        
      }
  }
  