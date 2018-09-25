/**
 * Created by Conan on 21.7.2017..
 */

this.system = this.system || {};
(function(){
    "use strict";

    const SliderGame = function(numOfLevels,main){
        this.AbstractPuzzleGame_constructor("Slider",numOfLevels,main);
        this.initGame();
    };

    const p = createjs.extend(SliderGame, system.AbstractPuzzleGame);

    p.initGame = function () {
        this._hasBoardFrame = true;
    };

    p._superLoadLevel = p.loadLevel;
    p.loadLevel = function (gameName) {
        this._superLoadLevel(gameName);
        this.addBoardFrame();
    };

    p.addBoardFrame = function () { // drawing frame arond board
        const strokeThickness = 10;
        const startX = this.board.x - strokeThickness;
        const startY = this.board.y - strokeThickness;
        const endX = startX + this.board.getBoardWidth() + (strokeThickness*2);
        const endY = startY + this.board.getBoardHeight() + (strokeThickness*2);
        const line = new createjs.Shape();
        line.graphics.setStrokeStyle(strokeThickness);
        line.graphics.beginStroke("white");
        line.graphics.moveTo(startX, startY);
        line.graphics.lineTo(endX, startY);
        line.graphics.lineTo(endX, startY + (this.board.fieldHeight*(this.board.rows-1)));
        line.graphics.lineTo(endX + this.board.fieldWidth, startY + (this.board.fieldHeight*(this.board.rows-1)));
        line.graphics.lineTo(endX + this.board.fieldWidth, endY);
        line.graphics.lineTo(startX, endY);
        line.graphics.lineTo(startX, startY-(strokeThickness/2));
        line.graphics.endStroke();
        this.addChildAt(line,0);
    };

    p.addLevelsButtons = function (from,to) {
        console.log("adding buttons");
        //const solvedLevels = this.mainGame.player.switcherPuzzleSolvedLevels;
        const levelsBtns = this.levelsBtns = new createjs.Container();

        for(let i = from; i < to; i++){
            const num = i+1;
            const level = "level" + num;
            const img = system.CustomMethods.makeImage(this.levelsOptions.options[level].mainImage , true);
            const levelBtn = new system.ImageButton(img,0.3);

            const firstEnd = from + 3;//9

            if(i >= firstEnd){//second row
                levelBtn.x = (i - firstEnd) * 600;
                levelBtn.y = 400;
            }else{//first row
                levelBtn.x = (i - from) * 600;//6
            }

            levelBtn.name = num;

            levelBtn.addSticker();
            levelBtn.addBestTime();
            levelsBtns.addChild(levelBtn);

        }
        levelsBtns.on("click" , (e)=> {
            this.level = e.target.parent.name;
            this.loadLevel(this.gameName);
            this.levelsBtns.visible = false;
        });

        levelsBtns.x = 400;
        levelsBtns.y = 200;

        this.addChild(levelsBtns);
    };

    p.refreshLevelsButtons = function(from , to){
        const solvedLevels = this.mainGame.player.sliderPuzzleSolvedLevels;
        let childInd = 0;
        for(let i = from; i < to; i++){
            const num = i+1;
            const level = "level" + num;
            const levelBtn = this.levelsBtns.getChildAt(childInd);
            const imgName = this.levelsOptions.options[level].mainImage;
            system.CustomMethods.swapImages(levelBtn.getChildAt(0) , imgName);

            levelBtn.name = num;

            if(solvedLevels.hasOwnProperty(num)){
                levelBtn.showSticker(true);
                levelBtn.updateBestTimeTxt(system.CustomMethods.formatTime(solvedLevels[num]));
            }else{
                levelBtn.showSticker(false);
                levelBtn.updateBestTimeTxt("");
            }
            childInd++;
        }
    };

    system.SliderGame = createjs.promote(SliderGame,"AbstractPuzzleGame");
})();