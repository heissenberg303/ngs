
const greeting = delay => 
    setTimeout(() => {
    console.log("Hello world. " + delay);
    greeting(delay + 1);
}, delay * 1000);

greeting(1);