const https = require('https');


// Promis(function, why)

// fetch return Promise object
function fetch (url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (rd) => data = data + rd);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}


// To consume fetch function we use .then which will expose
// the data available after the async action
fetch('https://www.javascript.com/')
  .then(data => {
    console.log(data.length);
  });

// Alternatively, we can also consume any promise using the async/await feature here
// use keyword await before the promise that will give access to
// the data available after the async action
// simple than callbacks and using .then
// wrap function with async keyword
  (async function read() {
    const data = await fetch('https://www.javascript.com/');

    console.log(data.length);
  })();


const person = {
  firstName: 'Tom',
  lastName: 'Cruise',
  actor: true,
  age: 54 //made up
}

const { firstName: name, age } = person

console.log(person.firstName);