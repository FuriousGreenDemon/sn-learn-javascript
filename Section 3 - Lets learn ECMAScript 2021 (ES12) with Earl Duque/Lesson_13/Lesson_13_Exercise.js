/*
Write a function mergeTasks that merges two arrays of task IDs into one.
The function should take two arrays as arguments and return a new array containing all unique task IDs, using the Spread operator.

Hints:
Use the Spread operator to combine arrays.
*/

// Solution

function mergeTasks(array1, array2) {
    let combinedArray = [...array1, ...array2];
    return [...new Set(combinedArray)]; //Preview of a future lesson!
}

let tasks1 = ['TASK001', 'TASK002', 'TASK003'];
let tasks2 = ['TASK002', 'TASK004'];
let mergedTasks = mergeTasks(tasks1, tasks2);
gs.info('Merged Tasks: ' + mergedTasks.join(', '));