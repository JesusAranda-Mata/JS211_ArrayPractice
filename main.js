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
let reptiles = pets.slice(4, 6);
console.log(`Array with reptiles ${reptiles}`);
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(`The pets array ${pets}`);

// .splice()
// Create a new array called removedReptiles, using the splice method to remove snake and lizard from the pets array.
// Console.log removedReptiles and pets and run the program.
// Go back and add the string 'hamster' in as a third parameter to your splice method, then run the program again and notice how the pets array has changed. Do you see how that works?
let removedReptiles = pets.splice(4, 2, "hamster");
console.log(`Reptiles are not pets ${removedReptiles}`);
//hamster replace the reptiles.
console.log(`The good pets are ${pets}`);

// .pop()
// Use the pop method to remove the last item from the pets array, saving it to a variable called removedPet.
// Console.log removedPet and pets and run the program.
let removedPet = pets.pop()
console.log(`Removing the last pet ${removedPet}`);
console.log(`The pets left over ${pets}`);

//.push()
//Use the push method to add removedPet back to the end of the pets array.
//Console.log pets and run the program.
pets.push(removedPet);
console.log(`The pets array restore ${pets}`);

//.shift()
//Use the shift method to remove and console.log the first item in the pets array.
pets.shift()
console.log(`Removing the first pet ${pets}`);

//.unshift()
//Use the unshift method to add the string 'turtle' as the first item in the pets array.
//Console.log the pets array and run the program. 
//If all went according to plan, you should see ['turtle', 'cat', 'fish', 'rabbit', 'hamster', 'bird'].
pets.unshift("turtle");
console.log(`The final array ${pets}`);

//.forEach()
//Create a numbers array by copy/pasting the following: const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
//Write code that will add 2 to each item in the array numbers.
//forEach requires a function to be passed into it as its first argument.
//Build a function called addTwo that can take in num, index, and arr as parameters—(num, index, arr)—and returns num + 2 at each index of the arr.
//Use .forEach() on the numbers array, passing in your freshly built function addTwo as an argument, in order to add 2 to each number in the array.
//Console.log numbers and run the program.
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
   //--numbers.forEach(element => console.log(element+2))
//numbers.forEach(addTwo, index, numbers) 

const addTwo = () => {
      for (let n = 0; n < numbers.length; n++){
         let num = numbers[n] + 2;
         //let num = num+2
         console.log("results: " + num);
      }
   }
   
addTwo()


/*----------------------------- 
Hints
Use repl.it to write the solution code first. (It's a faster environment vs using the node main.js command over and over again.)
Use your documentation.
Push yourself to learn on your own. Ask: How does this work?
Clone, setup, testing, and running instructions for all projects is below
-------------------------------*/