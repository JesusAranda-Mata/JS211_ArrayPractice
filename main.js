//Array
let cars = ["Ford", "Chevy", "Pontiac", "GMC"];

//.length attribute
//Console.log the length of the array.
console.log(`American car manufactures: ${cars.length}`);

//concat() method
//Create another array called moreCars with 4 more different types of cars. The last car type should be Honda.
//Use the concat method to combine the cars and moreCars arrays into another array called totalCars.
//Console.log the new array.
let moreCars = ["Toyota", "Subaru", "Mitsubishi", "Honda"]
console.log(`Japanese car manufactures: ${moreCars.length}`);

let totalCars = moreCars.concat(cars);
console.log(`Good car makers ${totalCars} `);

//.indexOf() and .lastIndexOf() methods 
//Use the indexOf method to console.log the index of Honda in totalCars.
//Use the lastIndexOf method to console.log the index of Ford in totalCars.
console.log(`Array manufacturers position: Honda and GMC ${totalCars.indexOf('Honda')} ${totalCars.lastIndexOf('GMC')}`);

//.join() method
//Use the join method to convert the array totalCars into a string called stringOfCars.
//Console.log stringOfCars.
let stringOfCars = totalCars.join(", ")
console.log(`This is a big string ${stringOfCars}`);

///split()
//Use the split method to convert stringOfCars into an array called carsFromString.
//Console.log the array you just created.
let carsFromString = stringOfCars.split()
console.log(`Making the long string in to an array ${carsFromString}`);

// .reverse()
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
// Console.log carsInReverse.
let carsInReverse = totalCars.reverse()//.join(" ");
console.log(`Reverse the direction of the array ${carsInReverse}`);

// .sort()
// Use the sort method to put the array carsInReverse into alphabetical order.
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction: console.log(carsInReverse.indexOf('yourPrediction'));
//Chevy should be on position zero.
carsInReverse.sort();
console.log(carsInReverse.indexOf('Chevy'));
console.log(`The array in alphabetical order ${carsInReverse}`);

// .slice()
// Create a pets array by copy/pasting the following: const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
// Use the slice method to create a reptiles array with snake and lizard from the pets array.
// Console.log the reptiles array and run the program.
// Now console.log the pets array and run the program. Why do you think snake and lizard are still in the original array?
let pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird'];
let reptiles = pets.slice(5, 6);
console.log(`Array with reptiles ${reptiles}`);
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(`The pets array ${pets}`);