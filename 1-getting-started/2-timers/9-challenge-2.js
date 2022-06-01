
let lastIntervalId, counter = 5;

const greetingFunction = delay => { 
    if (counter === 5) {
        clearInterval(lastIntervalId);
        lastIntervalId = 
        setInterval(() => 
        {
            console.log("Hello World. " + delay);
            greetingFunction(delay + 100);
        }, delay);
        counter = 0;
    }

    counter += 1;
};

greetingFunction(100);