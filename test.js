const { Pos } = require("@mathrandom7910/pos");
const MathPlus = require("./index");

/*console.log("direction:", 
MathPlus.getAngle(new Pos(1, 0), new Pos(0, 0)), 
"direction method 2:",
MathPlus.getAngle(1, 0, 0, 0),
"distance: ", MathPlus.getDistance(new Pos(0, 0), new Pos(1, 1)), 
"distance method 2:", 
MathPlus.getDistance(0, 0, 1, 1));*/

console.log("DISTANCE", MathPlus.getDistance(new Pos(100, 100), new Pos(100, 100)))

//console.log(MathPlus.calcVec(new Pos(0, 0), MathPlus.toRad(30), 10));