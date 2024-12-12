const { debounce } = require("lodash");

const MAX_CALLS = 10;

const printNum = (num) => {
    console.log(`num of call is ${num}`);
};

const printNumDebounced = debounce(printNum, 200);

const start = () => {
    console.log('Hello world!');

    let i = 1;

    const intervalId = setInterval(() => {
        console.log(`trie of call is ${i}`);
        printNumDebounced(i);

        if (i >= MAX_CALLS) {
            clearInterval(intervalId);
            return;
        }

        i++;
    }, 100);
};

start();
