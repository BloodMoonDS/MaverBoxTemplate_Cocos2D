cc.Class({
    extends: cc.Component,
    properties: {
        Escenas: String,
        

    },

    onLoad: function () {
        cc.game.addPersistRootNode(this.node);
        
    },  
    loadNextScene: function () {
        cc.tween(this.node)
            .to(1,{position: cc.v2(640,360)},{easing: 'cubicInOut'})
            .call(()=> {this.LoadScene(); })
            .to(1, {position: cc.v2(-640,360) },{easing: 'cubicInOut'})
            .start();
        
    },
    LoadScene: function () {
        cc.director.loadscene(Escenas);
        
    }
    
});
