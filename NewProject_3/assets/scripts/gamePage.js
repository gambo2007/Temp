var randomParagraph = require('random-paragraph');
cc.Class({
    extends: cc.Component,

    properties: {
        avatar : cc.Sprite,
        username:cc.Label,
        Atlas :cc.SpriteAtlas,
        words:cc.Label,
        editBox: cc.EditBox,
        inputArray: [],
        count:0,
        
    },

    onLoad () {
        this.count =0;
        this.inputArray =[],
        this.img = this.Atlas.getSpriteFrames();

        var jsonString = cc.sys.localStorage.getItem("gameData");
        var loadData = JSON.parse(jsonString);

        this.avatar.spriteFrame = this.img[loadData.id];
        this.username.string = "Hello " + loadData.value;

    },

    start () {
        this.words.string = randomParagraph({ sentences: 1});
    },

    update (dt) {},

    onTextChanged() {
        const lastChar = this.editBox.string[this.editBox.string.length - 1];
        if (lastChar === ' ') {
            const userInput = this.editBox.string.trim();
            
            if (userInput !== '') {
                this.inputArray.push(userInput);
    
                cc.log(this.inputArray);
                this.check();
                this.editBox.string = '';
                this.editBox.blur();
                this.editBox.focus();
            }
        }
    },

    check(){
        var Words = this.words.string.split(" ");
        if ( this.inputArray[this.inputArray.length-1] === Words[this.inputArray.length-1]) {
            this.count++;
        }
        cc.log(this.count);

        this.scores = {
            count:this.count
        }
        cc.log(this.scores)
        var jsonString = JSON.stringify(this.scores);
        cc.sys.localStorage.setItem("scoresData", jsonString);
    }
});
