//
// L10S02 - includes()
//

// Checking if a string includes a specific substring.
let errorMessage = 'Fatal error: System shutdown';

// Using includes to check for a specific word.
if (errorMessage.includes('Fatal')) {
  gs.info('Critical issue found!');
}
