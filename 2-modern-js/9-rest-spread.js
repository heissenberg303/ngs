const [first, ...restOfItems] = [10, 20, 30, 40];
console.log(first);
console.log(restOfItems);

const data = {
  temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};

const { temp1, temp2, ...person } = data;

const newArray = [...restOfItems];

const newObject = {
  ...person,
};

console.log(newArray[0]);
console.log(newObject);
console.log("This is object access by its field firstName : " + newObject.firstName);




