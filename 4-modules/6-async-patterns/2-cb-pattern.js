const fs = require('fs');


// callback function => always receive first argument as error
fs.readFile(__filename, function cb(err, data) {
  console.log('File data is', data);
});

console.log('TEST');
