// Prerequisites: A reasonable understanding of JavaScript fundamentals, including event handling and the basics of promises.
// Objective: To understand how to implement promise-based APIs.
// Implementing an alarm() API:
// Wrapping setTimeout():

// Use the setTimeout() API to implement the alarm() function.
// setTimeout() takes a callback function and a delay in milliseconds.

function setAlarm() {
    setTimeout(() => {
      console.log("Wake up!");
    }, 1000);
  }

// The Promise() constructor:

// The alarm() function returns a Promise using the Promise constructor.
// The Promise constructor takes an executor function with resolve and reject arguments.
// Inside the executor, perform asynchronous operations and call resolve for success or reject for failure.
function alarm(person, delay) {
    return new Promise((resolve, reject) => {
      if (delay < 0) {
        reject(new Error("Alarm delay must not be negative"));
      }
      setTimeout(() => {
        resolve(`Wake up, ${person}!`);
      }, delay);
    });
  }
  
//With .then() and .catch():



alarm("John", 2000)
  .then((message) => console.log(message))
  .catch((error) => console.error(`Couldn't set alarm: ${error.message}`));

//Using async/await:


async function setAlarmAsync() {
  try {
    const message = await alarm("Jane", 1500);
    console.log(message);
  } catch (error) {
    console.error(`Couldn't set alarm: ${error.message}`);
  }
}
setAlarmAsync();

// Example Usage:
// Set an alarm with .then() and .catch():


alarm("Bob", 3000)
  .then((message) => console.log(message))
  .catch((error) => console.error(`Couldn't set alarm: ${error.message}`));

  //Set an alarm using async/await:

async function setAlarmAsync() {
  try {
    const message = await alarm("Alice", 2500);
    console.log(message);
  } catch (error) {
    console.error(`Couldn't set alarm: ${error.message}`);
  }
}
setAlarmAsync();
//These examples demonstrate how to implement and use a promise-based API for setting alarms in JavaScript.





