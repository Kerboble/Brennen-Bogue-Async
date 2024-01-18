// Overview:
// Prerequisites: A reasonable understanding of JavaScript fundamentals, including event handling.
// Objective: Understand how to use web workers for asynchronous tasks.
// Workers in JavaScript:
// Workers enable running tasks in a separate thread to prevent the main thread from becoming unresponsive during long-running operations.
// Main code and worker code run in separate environments and communicate through messages, avoiding direct access to each other's variables.
// Types of Workers:
// Dedicated Workers: Used by a single script instance.
// Shared Workers: Shared by different scripts running in different windows.
// Service Workers: Act as proxy servers, caching resources for offline functionality (used in Progressive Web Apps).
// Example: Generating Primes with a Worker
// The main script creates a new worker using new Worker("./generate.js").
// Clicking "Generate primes" sends a message to the worker with the command "generate" and the number of primes to generate.
// The worker, upon receiving the message, generates primes and sends back the result using postMessage().
// The main script listens for the worker's message event and updates the DOM accordingly.
// Code Example:


//main.js:

const worker = new Worker("./generate.js");

document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota,
  });
});

worker.addEventListener("message", (message) => {
  document.querySelector("#output").textContent =
    `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});


// generate.js:

addEventListener("message", (message) => {
    if (message.data.command === "generate") {
      generatePrimes(message.data.quota);
    }
  });
  
  function generatePrimes(quota) {
    // ... (same prime generation logic)
  
    postMessage(primes.length);
  }
  

//Conclusion:
//Web workers provide a solution for running tasks concurrently without freezing the main thread. While workers have limitations, such as no access to the DOM, they are valuable for enhancing the responsiveness of web applications.