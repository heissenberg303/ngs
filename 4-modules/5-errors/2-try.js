const path = require('path');
const fs = require('fs');

const files = ['./1-loop.js', 'kjkjhh', '.npmrc'];

files.forEach(file => {
  try {
    //const filePath = path.resolve(process.env.HOME, file);
    const data = fs.readFileSync(file, 'latin1');
    console.log('File data is', data);
  } catch (err) {
    console.log('File not found');
  }
});
