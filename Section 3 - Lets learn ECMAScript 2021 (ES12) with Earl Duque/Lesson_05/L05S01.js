//
// L05S01 - Numeric seperators
//

// Without numeric separators:
let billion = 1000000000;
gs.info(billion);

// With numeric separators:
let billionReadable = 1_000_000_000;
gs.info(billionReadable);

// Both output the same value:
// 1000000000

// Using numeric separators for time constants in milliseconds
const ONE_HOUR = 60 * 60 * 1_000; // One hour in milliseconds
const ONE_DAY = 24 * ONE_HOUR; // One day in milliseconds
gs.info('Milliseconds in one hour: ' + ONE_HOUR);
gs.info('Milliseconds in one day: ' + ONE_DAY);

// Not allowed:
// 100__000 multiple underscores
// 0_1 leading zeroes
// 100_ trailing underscores

// Also works with:
// 1_000.000_001 Decimals
// 0b01010110_00111000 Binary
// 0x40_76_38_6A_73 Hexadecimal