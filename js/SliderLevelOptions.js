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
                rows:4,
                columns:3,
                fieldWidth:266,
                fieldHeight:225,
                mainImage:"slider2"
            },
            level3:{
                rows:4,
                columns:4,
                fieldWidth:250,
                fieldHeight:150,
                mainImage:"slider3"
            },
            level4:{
                rows:5,
                columns:4,
                fieldWidth:175,
                fieldHeight:180,
                mainImage:"slider4"
            },
            level5:{
                rows:5,
                columns:5,
                fieldWidth:180,
                fieldHeight:180,
                mainImage:"slider5"
            },
            level6:{
                rows:5,
                columns:5,
                fieldWidth:200,
                fieldHeight:120,
                mainImage:"slider6"
            }
        }
    };
    
    p.getOptionsForLevel = function(level){
        let lvl = "level" + level;
        return this.options[lvl];
        
    };

    system.SliderLevelOptions = SliderLevelOptions;

})();