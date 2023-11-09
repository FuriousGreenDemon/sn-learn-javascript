//
// L06S01 - Logical assignment operator ||=
//

// Assume we have a function that might return a falsy value.
function getDisplayName() {
    // Sometimes, this function might return '', null, or undefined.
    return '';
}

let displayName = getDisplayName();
// Using ||= to assign a default value if getDisplayName() is falsy.
displayName ||= 'Default Name';
gs.info(displayName); // Outputs: 'Default Name'
