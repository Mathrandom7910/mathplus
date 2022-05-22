const { Pos } = require("@mathrandom7910/pos");
const MathPlus = require("@mathrandom7910/mathplus");

console.log("direction:", 
MathPlus.getDir(new Pos(1, 0), new Pos(0, 0)), 
"direction method 2:",
MathPlus.getDir(1, 0, 0, 0),
"distance: ", MathPlus.getDist(new Pos(0, 0), new Pos(1, 1)), 
"distance method 2:", 
MathPlus.getDist(0, 0, 1, 1));