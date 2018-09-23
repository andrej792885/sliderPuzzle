/**
 * Created by Conan on 28.7.2017..
 */

this.system = this.system || {};
(function(){
    "use strict";

    const SliderLevelOptions = function(){
        this.init();
    };

    const p = SliderLevelOptions.prototype;
    p.options = null;

    p.init = function () {
        this.options = {
            level1:{
                rows:3,
                columns:3,
                fieldWidth:300,
                fieldHeight:300,
                mainImage:"slider"
            },
            level2:{
                rows:3,
                columns:3,
                fieldWidth:300,
                fieldHeight:300,
                mainImage:"slider2"
            },
            level3:{
                rows:3,
                columns:3,
                fieldWidth:300,
                fieldHeight:300,
                mainImage:"slider3"
            },
            level4:{
                rows:3,
                columns:3,
                fieldWidth:300,
                fieldHeight:300,
                mainImage:"slider4"
            },
            level5:{
                rows:3,
                columns:3,
                fieldWidth:300,
                fieldHeight:300,
                mainImage:"slider5"
            },
            level6:{
                rows:3,
                columns:3,
                fieldWidth:300,
                fieldHeight:300,
                mainImage:"slider6"
            },
            level7:{
                rows:4,
                columns:3,
                fieldWidth:225,
                fieldHeight:225,
                mainImage:"slider"
            },
        }
    };
    
    p.getOptionsForLevel = function(level){
        let lvl = "level" + level;
        return this.options[lvl];
        
    };

    system.SliderLevelOptions = SliderLevelOptions;

})();