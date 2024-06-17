Sure, here is the complete `README.md` document with the disclaimer added:

```markdown
# **Object Enhancements Exercise**

In this exercise, you’ll refactor some ES5 code into ES2015. Write your code in the sections with a comment to “Write an ES2015 Version”.

**Disclaimer: This document was organized with the help of Chat GPT.**

## **Same keys and values**

```jsx
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}
```

## **Same keys and values ES2015**

```jsx
/* Write an ES2015 Version */
```

## **Computed Property Names**

```jsx
let favoriteNumber = 42;

let instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
```

## **Computed Property Names ES2015**

```jsx
/* Write an ES2015 Version */
```

## Object Methods

```jsx
let instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}
```

## **Object Methods ES2015**

```jsx
/* Write an ES2015 Version */
```

## **createAnimal function**

Write a function which generates an animal object. The function should accept 3 arguments:

- species: the species of animal (‘cat’, ‘dog’)
- verb: a string used to name a function (‘bark’, ‘bleet’)
- noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

Use one or more of the object enhancements we’ve covered.

```jsx
const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"
```

[Solution](https://lessons.springboard.com/Solution-7eee406482f74110b6c0ecde71bc7de2?pvs=21)
```

This `README.md` document includes all the sections and placeholders for the ES2015 refactored code, along with the disclaimer stating that Chat GPT was used to help organize the document.