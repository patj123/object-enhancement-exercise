// Disclaimer: This document was organized with the help of Chat GPT.

// Function 1: Same keys and values ES2015
// Instructions: Refactor the createInstructor function using ES2015 shorthand syntax for object literals.

function createInstructor(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    };
}

// ES2015 Version
/* Write an ES2015 Version */

// Uncomment the below function when writing the ES2015 version
/*
function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName
  };
}
*/

// Function 2: Computed Property Names ES2015
// Instructions: Refactor the instructor object to use computed property names in ES2015 syntax.

let favoriteNumber = 42;

let instructor = {
    firstName: "Colt"
};

instructor[favoriteNumber] = "That is my favorite!";

// ES2015 Version
/* Write an ES2015 Version */

// Uncomment the below code when writing the ES2015 version
/*
let favoriteNumber = 42;

let instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};
*/

// Function 3: Object Methods ES2015
// Instructions: Refactor the instructor object methods using ES2015 shorthand syntax for functions.

let instructor = {
    firstName: "Colt",
    sayHi: function () {
        return "Hi!";
    },
    sayBye: function () {
        return this.firstName + " says bye!";
    }
};

// ES2015 Version
/* Write an ES2015 Version */

// Uncomment the below code when writing the ES2015 version
/*
let instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return `${this.firstName} says bye!`;
  }
};
*/

// Function 4: createAnimal function
// Instructions: Write the createAnimal function using ES2015 syntax for object property shorthand and method definition shorthand.

function createAnimal(species, verb, noise) {
    // Your ES2015 code here
    return {
        species: species,
        [verb]: function () {
            return noise;
        }
    };
}

// Uncomment the below code when writing the ES2015 version
/*
const createAnimal = (species, verb, noise) => {
  return {
    species,
    [verb]() {
      return noise;
    }
  };
};

const d = createAnimal("dog", "bark", "Woooof!");
console.log(d.bark());  // "Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
console.log(s.bleet()); // "BAAAAaaaa"
*/
