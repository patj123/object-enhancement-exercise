// Disclaimer: This document was organized with the help of Chat GPT.

// Function 1: Same keys and values ES2015
// Instructions: Refactor the createInstructor function using ES2015 shorthand syntax for object literals.

function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    };
}



// Function 2: Computed Property Names ES2015
// Instructions: Refactor the instructor object to use computed property names in ES2015 syntax.

let favoriteNumber = 42;

let instructor1 = {
    firstName: "Colt"
    [instructor1] = "This is my favorite number"
}

// Function 3: Object Methods ES2015
// Instructions: Refactor the instructor object methods using ES2015 shorthand syntax for functions.

let instructor2 = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
};


// Function 4: createAnimal function
// Instructions: Write the createAnimal function using ES2015 syntax for object property shorthand and method definition shorthand.

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise) {
    return {species, [verb] (){return noise}};
}

