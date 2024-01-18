// Overview of Asynchronous JavaScript:

// JavaScript is single-threaded, but it supports asynchronous behavior through concepts like callbacks, promises, and async/await.
// Asynchronous code allows non-blocking execution, enabling the program to perform tasks without waiting for each to complete.
// Callbacks:

// Callbacks are functions passed as arguments to other functions, to be executed later.

// Example:


function fetchData(callback) {
  setTimeout(() => {
    console.log('Data fetched!');
    callback();
  }, 1000);
}

fetchData(() => {
  console.log('Callback executed!');
});


// Async/Await:

// Async functions make working with asynchronous code more readable.

// The await keyword is used inside an async function to wait for the resolution of a promise.

// Example:

// javascript
// Copy code

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Data fetched!');
      resolve('Data');
    }, 1000);
  });
}

async function fetchDataAsync() {
  const data = await fetchData();
  console.log(`Received: ${data}`);
}

fetchDataAsync();