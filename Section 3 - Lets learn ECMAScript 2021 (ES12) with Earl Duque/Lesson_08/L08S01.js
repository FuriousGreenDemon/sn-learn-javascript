//
// L08S01 - String padding
//

// Example using padStart
let accountNumber = '12345';
let paddedAccountNumber = accountNumber.padStart(10, '0');
gs.info('Padded Account Number: ' + paddedAccountNumber); // Outputs: 0000012345

// Example using padEnd
let shortRemark = 'OK';
let paddedRemark = shortRemark.padEnd(5, '.');
gs.info('Padded Remark: ' + paddedRemark); // Outputs: OK...
