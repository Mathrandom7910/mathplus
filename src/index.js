"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randInt = exports.randFloat = exports.averageAngle = exports.lerpPos = exports.lerp = exports.toDeg = exports.toRad = exports.calcVec = exports.getAngle = exports.getDistance = void 0;
const pos_1 = require("@mathrandom7910/pos");
const pi = Math.PI;
function getDistance(pos, pos1, x1, y1) {
    if (pos instanceof pos_1.PrimitivePos && pos1 instanceof pos_1.PrimitivePos) {
        return Math.hypot(pos.x, pos.y, pos1.x, pos1.y);
    }
    else if (typeof pos == "number" && typeof pos1 == "number" && x1 != undefined && y1 != undefined) {
        return Math.hypot(pos, pos1, x1, y1);
    }
    else {
        throw new Error(`Invalid arguments! ${pos} ${pos1} ${x1} ${y1}`);
    }
}
exports.getDistance = getDistance;
function getAngle(from, to, toX, toY) {
    if (from instanceof pos_1.PrimitivePos && to instanceof pos_1.PrimitivePos) {
        return Math.atan2(to.y - from.y, to.x - from.x);
    }
    else if (typeof from == "number" && typeof to == "number" && toX != undefined && toY != undefined) {
        return Math.atan2(toY - to, toX - from);
    }
    else {
        throw new Error(`Invalid arguments! ${from} ${to} ${toX} ${toY}`);
    }
}
exports.getAngle = getAngle;
/**
 * Calculate a 2d vector projection.
 * @param pos The position to calculate from.
 * @param dir The direction to project the vector in radians.
 * @param steps The amount of steps to take.
 * @returns The calculated vector.
 */
function calcVec(pos, dir, steps) {
    return pos.add(Math.cos(dir) * steps, Math.sin(dir) * steps);
}
exports.calcVec = calcVec;
/**
 * Convert radians to degrees.
 * @param deg The degrees to be converted to radians.
 * @returns Radians from the degrees.
 */
function toRad(deg) {
    return (pi * deg) / 180;
}
exports.toRad = toRad;
/**
 * Convert radians to degrees.
 * @param rad The radians to be converted to degrees.
 * @returns Degrees from the radians.
 */
function toDeg(rad) {
    return rad * (180 / pi);
}
exports.toDeg = toDeg;
/**
 * Interpolates a value between 2 positions.
 * @param value The first value to interpolate.
 * @param value1 The second value to interpolate.
 * @param amount The fraction to interpolate (from 0 to 1).
 * @returns An interpolated number between the two assuming the amount is between 0 and 1.
 */
function lerp(value, value1, amount) {
    return value + (value1 - value) * amount;
}
exports.lerp = lerp;
/**
 * Interpolates 2 position objects.
 * @param pos The first position to interpolate.
 * @param pos1 The second position to interpolate.
 * @param amount The fraction to interpolate (from 0 to 1).
 * @returns An interpolated position between the two assuming the amount is between 0 and 1.
 */
function lerpPos(pos, pos1, amount) {
    return new pos_1.Pos(lerp(pos.x, pos1.x, amount), lerp(pos.y, pos1.y, amount));
}
exports.lerpPos = lerpPos;
/**
 * Calculates an average angle between 2 given angles.
 * @param angle The first angle to average.
 * @param angle1 The second angle to average.
 * @returns The average of both of the angles.
 */
function averageAngle(angle, angle1) {
    return ((360 + angle1 + ((((angle - angle1 + 180 + 360) % 360) - 180) / 2)) % 360);
}
exports.averageAngle = averageAngle;
/**
 * Returns a random float inbetween the minimum and maximum numbers.
 * @param min The minimum number it can return.
 * @param max The maximum number it can return.
 * @returns A random float inbetween minimum and maximum.
 */
function randFloat(min, max) {
    return Math.random() * (max - min) + min;
}
exports.randFloat = randFloat;
/**
 * Returns a random integer inbetween the minimum and maximum numbers.
 * @param min The minimum number it can return.
 * @param max The maximum number it can return.
 * @returns A random integer inbetween minimum and maximum.
 */
function randInt(min, max) {
    return Math.round(randFloat(min, max));
}
exports.randInt = randInt;
