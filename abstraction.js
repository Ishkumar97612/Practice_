function fetchData(callback) {

  setTimeout(() => {
    const data = 'Some data';
    callback(null, data); // Pass null as the error parameter and the data as the result
  }, 2000);
}


fetchData((error, result) => {
  if (error) {
    console.error('An error occurred:', error);
  } else {
    console.log('Result:', result);a
  }
});


// Code for error message.............
// function fetchData(callback) {

//   setTimeout(() => {
//     const error = new Error('An error occurred');
//     callback(error, null); // Pass the error as the first parameter and null as the result
//   }, 2000);
// }

// fetchData((error, result) => {
//   if (error) {
//     console.error('An error occurred:', error);
//   } else {
//     console.log('Result:', result);
//   }
// });

