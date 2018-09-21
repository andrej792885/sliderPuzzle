/**
 * Created by konan on 01-Aug-17.
 */

this.system = this.system || {};
(function(){
    "use strict";

    const SliderField = function(img,x,y,w,h){
        this.AbstractPuzzleField_constructor();
        this.initSliderField(img,x,y,w,h);
    };

    const p = createjs.extend(SliderField, system.AbstractPuzzleField);

    p.currentPos = null; // this sets on every move
    p.correctPos = null; // this sets on start

    p.initSliderField = function (img,x,y,w,h) {
        const field = new createjs.Bitmap(queue.getResult(img));
        field.sourceRect = new createjs.Rectangle(x,y,w,h);
        field.width = field.sourceRect.width;
        field.height = field.sourceRect.height;
        field.regX = w/2;
        field.regY = h/2;
        this.x = x + w/2;
        this.y = y + h/2;
        this.correctPos = {xPos:this.x,yPos:this.y};
        this.currentPos = {xPos:this.x,yPos:this.y};
        const frame = new createjs.Shape(new createjs.Graphics().setStrokeStyle(2).beginStroke("#73d0fc").drawRect (0, 0, field.width, field.height));
        frame.regX = field.regX;
        frame.regY = field.regY;
        this.addChild(field,frame);
    };

    p.setCurrentPos = function (x,y) {
        this.currentPos.xPos = x;
        this.currentPos.yPos = y;
    };

    p.checkPos = function () {
        let correct = false;
        if(this.currentPos.xPos === this.correctPos.xPos && this.currentPos.yPos === this.correctPos.yPos){
            correct = true;
        }
        return correct;
    };

    system.SliderField = createjs.promote(SliderField,"AbstractPuzzleField");

})();