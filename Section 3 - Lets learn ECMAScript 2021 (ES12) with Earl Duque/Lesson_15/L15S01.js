//
// L15S01 - Trailing commas in function definitions
//

function createTask(title, description, ) {
    gs.info(`Task created with title: ${title} and description: ${description}`);
}

createTask('Review Code', 'Check the latest commit.');

// Function call with trailing comma
createTask(
    'Update Documentation',
    'Add details about new features',
);