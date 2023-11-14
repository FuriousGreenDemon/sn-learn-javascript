// Part 1
// Imagine that we want to know the date would it be if it was 30 days after today's date.
// What is wrong with the following code?

var now = new Date();
var later = now.getDate() + 30;
gs.info(later);

// Solution: We only get one number back and if it's more than 31 (the longest month is only 31 days) it doesn't restart back to 1

// Part 2
// To find the date 30 days after today, how would you edit the below code to display the date as if it was 30 days after today's date?

var now = new Date();
var later = now.setDate(now.getDate());
gs.info(new Date(later));

// Solution

var now = new Date();
var later = now.setDate(now.getDate() + 30);
gs.info(new Date(later));