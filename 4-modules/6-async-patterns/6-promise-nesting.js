const fs = require('fs').promises;

async function main() {
  const data = await fs.readFile(__filename);
  await fs.writeFile(__filename + '.copy', data);
  // More awaits here...
}


const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000)
  })
}

const doSomething = async () => {
  console.log(await doSomethingAsync())
}

console.log('Before')
doSomething()
console.log('After')

main();
console.log('TEST');



// For example here's how you would get a JSON resource, and parse it, using promises:

const getFirstUserData = () => {
  return fetch('/users.json') // get users list
      .then(response => response.json()) // parse JSON
      .then(users => users[0]) // pick first user
      .then(user => fetch(`/users/${user.name}`)) // get user data
      .then(userResponse => userResponse.json()); // parse JSON
};

getFirstUserData();


// And here is the same functionality provided using await/async:

const getFirstUserData = async () => {
  const response = await fetch('/users.json'); // get users list
  const users = await response.json(); // parse JSON
  const user = users[0]; // pick first user
  const userResponse = await fetch(`/users/${user.name}`); // get user data
  const userData = await userResponse.json(); // parse JSON
  return userData;
};

getFirstUserData();
