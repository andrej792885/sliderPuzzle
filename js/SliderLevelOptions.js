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
                mainImage:"slider7"
            },
            level8:{
                rows:4,
                columns:3,
                fieldWidth:225,
                fieldHeight:225,
                mainImage:"slider8"
            },
            level9:{
                rows:4,
                columns:3,
                fieldWidth:225,
                fieldHeight:225,
                mainImage:"slider9"
            },
            level10:{
                rows:4,
                columns:3,
                fieldWidth:225,
                fieldHeight:225,
                mainImage:"slider10"
            },
            level11:{
                rows:4,
                columns:3,
                fieldWidth:225,
                fieldHeight:225,
                mainImage:"slider11"
            },
            level12:{
                rows:4,
                columns:3,
                fieldWidth:225,
                fieldHeight:225,
                mainImage:"slider12"
            }
/*            level13:{
                rows:4,
                columns:4,
                fieldWidth:225,
                fieldHeight:225,
                mainImage:"slider13"
            },
            level14:{
                rows:4,
                columns:4,
                fieldWidth:225,
                fieldHeight:225,
                mainImage:"slider14"
            },
            level15:{
                rows:4,
                columns:4,
                fieldWidth:225,
                fieldHeight:225,
                mainImage:"slider15"
            },
            level16:{
                rows:4,
                columns:4,
                fieldWidth:225,
                fieldHeight:225,
                mainImage:"slider16"
            },
            level17:{
                rows:4,
                columns:4,
                fieldWidth:225,
                fieldHeight:225,
                mainImage:"slider17"
            },
            level18:{
                rows:4,
                columns:4,
                fieldWidth:225,
                fieldHeight:225,
                mainImage:"slider18"
            }*/
        }
    };
    
    p.getOptionsForLevel = function(level){
        let lvl = "level" + level;
        return this.options[lvl];
        
    };

    system.SliderLevelOptions = SliderLevelOptions;

})();