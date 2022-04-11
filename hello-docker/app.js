let count = 0;
let interval = setInterval(() => {
    count++;
    console.log('Hello Docker!!!', count);

    if (count === 3) {
        clearInterval(interval)
    }
}, 1000);