import { Pos, PrimitivePos } from "@mathrandom7910/pos";
/**
 * Calculate distance between two points.
 * @param pos Position one.
 * @param pos1 Position two.
 */
export declare function getDistance(pos: PrimitivePos, pos1: PrimitivePos): number;
/**
 * Calculate direction between two points
 * @param x Position 1 x.
 * @param y Position 1 y.
 * @param x1 Position 2 x.
 * @param y1 Position 2 y.
 */
export declare function getDistance(x: number, y: number, x1: number, y1: number): number;
/**
 * Calculate direction from two points and return the value in radians.
 * @param from From position.
 * @param to To position.
 */
export declare function getAngle(from: PrimitivePos, to: PrimitivePos): number;
/**
 * Calculate direction from two points and return the value in radians.
 * @param fromX From x.
 * @param fromY From y.
 * @param toX To x.
 * @param toY To y.
 */
export declare function getAngle(fromX: number, fromY: number, toX: number, toY: number): number;
/**
 * Calculate a 2d vector projection.
 * @param pos The position to calculate from.
 * @param dir The direction to project the vector in radians.
 * @param steps The amount of steps to take.
 * @returns The calculated vector.
 */
export declare function calcVec(pos: Pos, dir: number, steps: number): Pos;
/**
 * Convert radians to degrees.
 * @param deg The degrees to be converted to radians.
 * @returns Radians from the degrees.
 */
export declare function toRad(deg: number): number;
/**
 * Convert radians to degrees.
 * @param rad The radians to be converted to degrees.
 * @returns Degrees from the radians.
 */
export declare function toDeg(rad: number): number;
/**
 * Interpolates a value between 2 positions.
 * @param value The first value to interpolate.
 * @param value1 The second value to interpolate.
 * @param amount The fraction to interpolate (from 0 to 1).
 * @returns An interpolated number between the two assuming the amount is between 0 and 1.
 */
export declare function lerp(value: number, value1: number, amount: number): number;
/**
 * Interpolates 2 position objects.
 * @param pos The first position to interpolate.
 * @param pos1 The second position to interpolate.
 * @param amount The fraction to interpolate (from 0 to 1).
 * @returns An interpolated position between the two assuming the amount is between 0 and 1.
 */
export declare function lerpPos(pos: PrimitivePos, pos1: PrimitivePos, amount: number): Pos;
/**
 * Calculates an average angle between 2 given angles.
 * @param angle The first angle to average.
 * @param angle1 The second angle to average.
 * @returns The average of both of the angles.
 */
export declare function averageAngle(angle: number, angle1: number): number;
/**
 * Returns a random float inbetween the minimum and maximum numbers.
 * @param min The minimum number it can return.
 * @param max The maximum number it can return.
 * @returns A random float inbetween minimum and maximum.
 */
export declare function randFloat(min: number, max: number): number;
/**
 * Returns a random integer inbetween the minimum and maximum numbers.
 * @param min The minimum number it can return.
 * @param max The maximum number it can return.
 * @returns A random integer inbetween minimum and maximum.
 */
export declare function randInt(min: number, max: number): number;
