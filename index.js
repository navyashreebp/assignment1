
const fsPromise = require("fs").promises;



//create a promoise to display a mesaage and cal the promise.
const promise = new Promise((resolve, reject) => {
    resolve("Hello world");
}); 

promise.then(message => console.log(message));



//Create a file using fs module and async/await.
async function createFile(fileName, fileContents) {
    await fsPromise.writeFile(fileName, fileContents);
}

createFile("new.txt", "Hello New file.")
.then(() => console.log("file created successfully."))
.catch(err => console.log(err.toString()));