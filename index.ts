import { Pos, PrimitivePos } from "@mathrandom7910/pos";

const pi = Math.PI;

/**
 * Calculate distance between two points.
 * @param pos Position one.
 * @param pos1 Position two.
 */

export function getDistance(pos: PrimitivePos, pos1: PrimitivePos): number;

/**
 * Calculate direction between two points
 * @param x Position 1 x.
 * @param y Position 1 y.
 * @param x1 Position 2 x.
 * @param y1 Position 2 y.
 */

export function getDistance(x: number, y: number, x1: number, y1: number): number;

export function getDistance(pos: PrimitivePos | number, pos1: PrimitivePos | number, x1?: number, y1?: number) {
    if(pos instanceof PrimitivePos && pos1 instanceof PrimitivePos) {
        return Math.hypot(pos.x - pos1.x, pos.y - pos1.y);
    } else if(typeof pos == "number" && typeof pos1 == "number" && x1 != undefined && y1 != undefined){
        return Math.hypot(pos - x1, pos1 - y1);
    } else {
        throw new Error(`Invalid arguments! ${pos} ${pos1} ${x1} ${y1}`);
    }
}

/**
 * Calculate direction from two points and return the value in radians.
 * @param from From position.
 * @param to To position.
 */

export function getAngle(from: PrimitivePos, to: PrimitivePos): number;

/**
 * Calculate direction from two points and return the value in radians.
 * @param fromX From x.
 * @param fromY From y.
 * @param toX To x.
 * @param toY To y.
 */

export function getAngle(fromX: number, fromY: number, toX: number, toY: number): number;


export function getAngle(from: PrimitivePos | number, to: PrimitivePos | number, toX?: number, toY?: number){
    if(from instanceof PrimitivePos && to instanceof PrimitivePos){
        return Math.atan2(to.y - from.y, to.x - from.x);
    } else if(typeof from == "number" && typeof to == "number" && toX != undefined && toY != undefined) {
        return Math.atan2(toY - to, toX - from);
    } else {
        throw new Error(`Invalid arguments! ${from} ${to} ${toX} ${toY}`);
    }
}

/**
 * Calculate a 2d vector projection.
 * @param pos The position to calculate from.
 * @param dir The direction to project the vector in radians.
 * @param steps The amount of steps to take.
 * @returns The calculated vector.
 */

export function calcVec(pos: Pos, dir: number, steps: number) {
    return pos.add(Math.cos(dir) * steps, Math.sin(dir) * steps);
}

/**
 * Convert radians to degrees.
 * @param deg The degrees to be converted to radians.
 * @returns Radians from the degrees.
 */

export function toRad(deg: number) {
    return (pi * deg) / 180;
}

/**
 * Convert radians to degrees.
 * @param rad The radians to be converted to degrees.
 * @returns Degrees from the radians.
 */

export function toDeg(rad: number) {
    return rad * (180 / pi);
}

/**
 * Interpolates a value between 2 positions.
 * @param value The first value to interpolate.
 * @param value1 The second value to interpolate.
 * @param amount The fraction to interpolate (from 0 to 1).
 * @returns An interpolated number between the two assuming the amount is between 0 and 1.
 */

export function lerp(value: number, value1: number, amount: number) {
    return value + (value1 - value) * amount;
}

/**
 * Interpolates 2 position objects.
 * @param pos The first position to interpolate.
 * @param pos1 The second position to interpolate.
 * @param amount The fraction to interpolate (from 0 to 1).
 * @returns An interpolated position between the two assuming the amount is between 0 and 1.
 */

export function lerpPos(pos: PrimitivePos, pos1: PrimitivePos, amount: number) {
    return new Pos(lerp(pos.x, pos1.x, amount), lerp(pos.y, pos1.y, amount));
}

/**
 * Calculates an average angle between 2 given angles.
 * @param angle The first angle to average.
 * @param angle1 The second angle to average.
 * @returns The average of both of the angles.
 */

export function averageAngle(angle: number, angle1: number) {
    return ((360 + angle1 + ((((angle - angle1 + 180 + 360) % 360) - 180) / 2)) % 360);
}

/**
 * Returns a random float inbetween the minimum and maximum numbers.
 * @param min The minimum number it can return. 
 * @param max The maximum number it can return.
 * @returns A random float inbetween minimum and maximum.
 */

export function randFloat(min: number, max: number) {
    return Math.random() * (max - min) + min
}

/**
 * Returns a random integer inbetween the minimum and maximum numbers.
 * @param min The minimum number it can return. 
 * @param max The maximum number it can return.
 * @returns A random integer inbetween minimum and maximum.
 */

export function randInt(min: number, max: number) {
    return Math.round(randFloat(min, max));
}