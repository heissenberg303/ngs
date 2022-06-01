const timerId = setTimeout(
  () => console.log('You will not see this one!'),
  0
);

// setImmediate

clearTimeout(timerId);

// clearInterval
// clearImmediate
