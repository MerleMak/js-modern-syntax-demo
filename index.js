/* -------- Destructuring Assignment - Objects --------- */

const tree = {
  name: 'oak',
  age: 1200,
  scientificName: 'quercus',
};

/*
const name = tree.name;
const age = tree.age;
const scientificName = tree.scientificName;
*/

// Destructuring an object
// const {name, age, scientificName} = tree;

// Renaming
const { name: colloquialName } = tree;
// console.log(colloquialName);

// Default value
const { keepsLeavesInWinter = false } = tree;
// console.log(keepsLeavesInWinter);
// console.log(tree);

// Rest syntax in object destructuring
const { name, ...information } = tree;

// console.log(name);
// console.log(information);

/* -------- Destructuring Assignment - Arrays --------- */

const animals = ['Lion', 'Tiger', 'Penguin', 'Bear', 'Whale'];

// Destructuring an array
// const [lion, tiger, penguin, bear, whale] = animals;

// console.log(tiger);

// Ignoring values
// const [lion, , penguin, bear, whale] = animals;

// console.log(penguin);
// console.log(tiger); // not defined

// Rest syntax in array destructuring
const [lion, tiger, penguin, ...rest] = animals;
console.log(lion);
console.log(tiger);
console.log(rest[1]);

/* ---------------- Rest Syntax ----------------- */

// Rest Operator
// The rest operator is used to collect multiple elements or properties into a single array or object. It "gathers" the rest of the elements.
// Used in function parameters and destructuring assignments.

function showZooAnimals(...allAnimals) {
  console.log(allAnimals);
  return `My zoo consists of the following animals: ${allAnimals.join(', ')}.`;
}

console.log(showZooAnimals('Monkey', 'Crocodil', 'Pig'));

/* ---------------- Spread Syntax ----------------- */

// Spread Operator
// The spread operator is used to expand or "spread" iterable elements (like arrays) or object properties into a new array or object.
// Used in array literals, object literals, and function calls.

const newAnimals = ['Whale', 'Dolphin', 'Wolf'];

console.log(showZooAnimals(...newAnimals));

// Add another value

const animalFood = ['Meat', 'Apple', 'Banana', 'Carrot'];

const newAnimalFood = 'Fish';

const allAnimalFood = [...animalFood, newAnimalFood];

console.log(allAnimalFood);

// Spread for concatenating two arrays

const allMyAnimals = [...newAnimals, ...animals];

console.log(allMyAnimals);

console.log(showZooAnimals(...allMyAnimals));

// Key Differences
// Direction of Operation:
//   - Spread: Expands collected elements into individual elements.
//   - Rest: Collects individual elements into a single array or object.
