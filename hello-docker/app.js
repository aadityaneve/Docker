let count = 0;
let interval = setInterval(() => {
    count++;
    console.log('Hello Docker!!!');

    count === 3 ?
        clearInterval(interval) :
        null
}, 1000);