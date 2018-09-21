/**
 * Created by konan on 24-May-17.
 */

this.system = this.system || {};
(function(){
    "use strict";

    const Player = function(stats){
        this.init(stats);
    };

    const p = Player.prototype;
    p.sliderPuzzleSolvedLevels = null;
    p.solveCredits = null;
    p.solveCreditsBarLevel = null;
    p.totalTimePlayed = null;

    p.init = function (stats) {
        console.log("init player with stats " + stats.sliderPuzzleSolvedLevels);
        this.sliderPuzzleSolvedLevels = stats.sliderPuzzleSolvedLevels;
        this.solveCredits = stats.solveCredits;
        this.solveCreditsBarLevel = stats.solveCreditsBarLevel;
        this.totalTimePlayed = stats.totalTimePlayed;
    };

    p.levelSolved = function (level,time) {
        if(!this.sliderPuzzleSolvedLevels.hasOwnProperty(level)){
            this.sliderPuzzleSolvedLevels[level] = time;
        }else{
            if(this.sliderPuzzleSolvedLevels[level] > time){
                this.sliderPuzzleSolvedLevels[level] = time;
            }
        }
    };

    p.updateTotalTimePlayed = function(seconds) {
        this.totalTimePlayed += seconds;
    };

    p.updateSolveCredits = function (credits,barLevel) {
        this.solveCredits = credits;
        this.solveCreditsBarLevel = barLevel;
    };

    system.Player = Player;

})();