
cc.Class({
    extends: cc.Component,

    properties: {
        trueNumber:cc.Label,
    },
    onLoad () {

        var jsonString = cc.sys.localStorage.getItem("scoresData");
        var loadData = JSON.parse(jsonString);

        this.trueNumber.string = loadData.count;
    },

    start () {

    },

    // update (dt) {},
});
