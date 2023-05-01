const promise = new Promise((resolve, reject) => {
    resolve("Hello world");
});

promise.then(message => console.log(message));