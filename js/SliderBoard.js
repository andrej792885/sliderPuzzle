/**
 * Created by Conan on 27.7.2017..
 */

this.system = this.system || {};
(function(){
    "use strict";

    const SliderBoard = function(options,game){
        this.AbstractPuzzleBoard_constructor(options,game);
        this.initBoard();
    };

    const p = createjs.extend(SliderBoard, system.AbstractPuzzleBoard);
    let that;

    p.initBoard = function () {
        that = this;
    };

    p.generateFields = function () {
        let x;
        let y;
        for(let i = 0; i < this.rows; i++){
            y = i * this.fieldHeight;
            for(let j = 0; j < this.columns; j++){
                x = j * this.fieldWidth;
                const name = "n" + i + j;
                const field = new system.SliderField(this.mainImage,x,y,this.fieldWidth,this.fieldHeight);
                field.name = name;
                this.addChild(field);
            }
        }

        x = this.getBoardWidth();
        y = this.getBoardHeight() - this.fieldHeight;
        const fakeField = new system.SliderField(this.mainImage,x,y,this.fieldWidth,this.fieldHeight);
        fakeField.alpha = 0.01;
        fakeField.name = "fakeField";
        fakeField.mouseEnabled = false;
        this.addChild(fakeField);
    };

    p.rearrangeFields = function () {            // this is happening only on level start
        for(let i = 0; i < 100; i++){
            this.checkForNormalField();
        }
        this.game.framesBtn.enableClick(true);
    };

    p.checkForNormalField = function () { // find field to rotate with
        const that = this; // todo MOZDA NE MORA
        let found = false;
        const fake = this.getChildByName("fakeField");
        const directions = [
            {x:fake.currentPos.xPos-this.fieldWidth,y:fake.currentPos.yPos},//left from fake
            {x:fake.currentPos.xPos+this.fieldWidth,y:fake.currentPos.yPos},//right from fake
            {x:fake.currentPos.xPos,y:fake.currentPos.yPos-this.fieldHeight},//up from fake
            {x:fake.currentPos.xPos,y:fake.currentPos.yPos+this.fieldHeight}//down from fake
        ];

        checkFields();

        function checkFields() {
            const ind = Math.round(Math.random() * (directions.length-1));
            const direction = directions[ind]; // get random direction
            directions.splice(ind,1);     // and remove it to disable checking same field again
            for(let i = 0; i < that.numChildren-1; i++){
                const field = that.getChildAt(i);
                if(field.currentPos.xPos === direction.x){
                    if(field.currentPos.yPos === direction.y){
                        field.x = fake.currentPos.xPos;
                        field.y = fake.currentPos.yPos;
                        fake.x = field.currentPos.xPos;
                        fake.y = field.currentPos.yPos;
                        field.setCurrentPos(field.x,field.y);
                        fake.setCurrentPos(fake.x,fake.y);
                        found = true;
                    }
                }
            }
            if(!found){ // if not found field in that direction try another one
                checkFields();
            }
        }
    };

    p.onChoose = function (e) {
        system.CustomMethods.playSound("switch");
        const child = e.target.parent.name;
        const field = that.getChildByName(child); // take clicked object
        that.checkForFakeField(field);          // and check if can be moved
    };

    p.checkForFakeField = function (field) {
        const left = field.currentPos.xPos - this.fieldWidth;
        const right = field.currentPos.xPos + this.fieldWidth;
        const up = field.currentPos.yPos - this.fieldHeight;
        const down = field.currentPos.yPos + this.fieldHeight;
        let foundFake = false;
        let fakeChild = this.getChildAt(this.numChildren-1);

        if(fakeChild.x === left && fakeChild.y === field.y){         // checking left
            foundFake = true;
        }else if(fakeChild.x === right && fakeChild.y === field.y){  // checking right
            foundFake = true;
        }else if(fakeChild.x === field.x && fakeChild.y === up){     // checking up
            foundFake = true;
        }else if(fakeChild.x === field.x && fakeChild.y === down){   // checking down
            foundFake = true;
        }

        if(foundFake){ // if false field cant be moved
            this.rotateFields(field,fakeChild);
        }
    };

    p.rotateFields = function (field1 , field2) {
        this.enableMouse(false);
        this.doAnimation(field1,field2.x,field2.y);
        this.doAnimation(field2,field1.x,field1.y);
    };

    p.doAnimation = function (field,x,y) {
        createjs.Tween.get(field).to({x:x,y:y},200,createjs.Ease.getPowInOut(2)).call(function () {
            that.actionAfterAnimation(field,x,y);
        });
    };

    p.actionAfterAnimation = function (field,x,y) {
        field.setCurrentPos(x,y);
        that.animationsCounter++;
        if(that.animationsCounter === 2){
            that.selectedField = null;
            that.animationsCounter = 0;
            that.checkBoard();
        }
    };

    p.doSolveAnimation = function (field) {
        createjs.Tween.get(field).to({x:field.correctPos.xPos,y:field.correctPos.yPos},600).call(function () {
            that.animationsCounter++;
            field.setCurrentPos(field.x,field.y);
            if(that.animationsCounter === that.numChildren){
                that.animationsCounter = 0;
                that.checkBoard();
            }
        })
    };

    system.SliderBoard = createjs.promote(SliderBoard,"AbstractPuzzleBoard");
})();