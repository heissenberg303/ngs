// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 }  = Math;

// With require
// const { readFile } = require('fs');


const circle = {
  label: 'circleX',
  radius: 2,
};

// const circleArea = (radius) =>
//   (PI * radius * radius).toFixed(2);
//
// console.log(circleArea(circle.radius));


// =====================================================
// {will call field inside the object}

const circleArea = ({ radius }, {precision = 2} = {}) =>
    (PI * radius * radius).toFixed(precision);
// end scope of function

console.log(circleArea(circle, {precision: 5}));

//{precision = 2} = {} use empty object to the same call for second argument of the function


// can use comma for skip third argument
const [first, second,, forth] = [10, 20, 30, 40];

console.log(first + forth);

const [first, ...restOfItems] = [10, 20, 30, 40];