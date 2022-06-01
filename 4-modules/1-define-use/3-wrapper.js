// function (exports, module, require, __filename, __dirname) {
// hidden wrapping function


// let g = 1;
// g is local varible in wrapping function

//console.log(arguments);

exports.a = 42;
module.exports.b = 37;

// exports = () => {}; // not ok because you cannot break the assignment
// module.exports = () => {}; // ok because it's what being return


// return module.exports;
// }
