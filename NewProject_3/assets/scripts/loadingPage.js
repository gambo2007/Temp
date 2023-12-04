cc.Class({
    extends: cc.Component,

    properties: {
        avatar: cc.Sprite,
        Atlas :cc.SpriteAtlas,
        editbox: cc.EditBox,
        loadingPage:cc.Layout,
        gamePage:cc.Layout,
        id:0,
    },

    onLoad() {
        this.id = 0;
        this.img = this.Atlas.getSpriteFrames();
    },

    start() {
        cc.log(this.img)
    },

    update(dt) {
        
    },
    changeNextImgs(){
        if (this.id > 10) {
            this.id = 0;
        } else {
            this.id++;
        }
        this.avatar.spriteFrame = this.img[this.id];
        cc.log(this.id);
    },
    changeBackImgs(){
        if (this.id < 0) {
            this.id = 10;
        } else {
            this.id--;
        }
        this.avatar.spriteFrame = this.img[this.id];
        cc.log(this.id)
    },
    
    onSubmit(){
        cc.log(this.id)
        this.playerData = {
            id: this.id,
            value: this.editbox.string,
        }
        cc.log(this.playerData)
        var jsonString = JSON.stringify(this.playerData);
        cc.sys.localStorage.setItem("gameData", jsonString);
        cc.log("Game data saved!");
        this.loadingPage.node.active = false;
        this.gamePage.node.active = true;
    }
});
