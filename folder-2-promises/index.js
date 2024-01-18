//Promises are a fundamental concept in modern JavaScript for handling asynchronous operations. They represent the state of an operation, providing methods to handle success or failure. This article covers the use of promises, focusing on the Fetch API and its promise-based nature. The document introduces key concepts, such as chaining promises, error handling, promise terminology, combining multiple promises, and the use of async/await.

//Basic Promise Usage:

const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  if (operationSuccessful) {
    resolve("Operation succeeded");
  } else {
    reject("Operation failed");
  }
});

//Using Fetch API:

const fetchPromise = fetch("https://example.com/data.json");

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });


  //Chaining Promises:

  fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });


  //Handling Errors with Catch:

  fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });


  //Combining Multiple Promises with Promise.all:

  const promise1 = fetch("https://example.com/data1.json");
  const promise2 = fetch("https://example.com/data2.json");
  
  Promise.all([promise1, promise2])
    .then((responses) => {
      // Handle responses
    })
    .catch((error) => {
      console.error(`Failed to fetch: ${error}`);
    });
  

    //Using async/await:

    async function fetchData() {
      try {
        const response = await fetch("https://example.com/data.json");
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data[0].name);
      } catch (error) {
        console.error(`Failed to fetch data: ${error}`);
      }
    }
    
    fetchData();
    