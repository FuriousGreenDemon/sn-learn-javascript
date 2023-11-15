/*
Write a function assignToGroup that assigns a task to a group. The function should take two parameters: taskId and groupId, with groupId having a default value.
If groupId is not provided, the task should be assigned to a default 'General Support' group.
Test this function by passing only the taskId and then with both taskId and groupId.

Hints:
Use a fictional default group ID for 'General Support'.
Simulate the function's operation using gs.info to output the assignment.
*/

// Solution

function assignToGroup(taskId, groupId = '00a1b2c3d4e5f67890123456') {
    let groupName = groupId === '00a1b2c3d4e5f67890123456' ? 'General Support' : 'Specific Group';
    gs.info(`Task ${taskId} assigned to group ${groupName}`);
}

assignToGroup('abc123'); // Assumes default group assignment
assignToGroup('abc123', '1234abcd5678efgh'); // Assigns to specified group