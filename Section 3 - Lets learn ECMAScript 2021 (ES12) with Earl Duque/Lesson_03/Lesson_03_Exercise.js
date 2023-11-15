/*
Create a function that calculates and returns the volume of a cube. Use the exponentiation operator to calculate the volume.

Hints:
The volume of a cube is the side length raised to the power of 3.
Use the exponentiation operator ** in your calculation.
*/

function cubeVolume(side) {
    return side ** 3;
}

let volume = cubeVolume(5);
gs.info('Volume of the cube: ' + volume);