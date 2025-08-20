'use strict';
// Data needed for a later exercise
/* const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

/* const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

/* const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]); */

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, entrieIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[entrieIndex]]; //* [] required for Data Property
  },
};
/* openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
}; */

//! ---------------- DESTRUCTURING ARRAY ---------------------------------- //

let [first, , second] = restaurant.categories; //* OUTPUT: Italian Vegetarian

// To swap position
[first, second] = [second, first];
console.log(first, second); //* OUTPUT: Vegetarian Italian

// Receive 2 returns value from an Object Method
const [starter, entrie] = restaurant.order(0, 0);
console.log(starter, entrie); //* OUTPUT: Focaccia, Pizza

// Nested Array
const nestedArr = [2, 4, [5, 6]];
const [i, , j] = nestedArr;
console.log(i, j); //* OUTPUT: 2, [5,6]
const [x, , [y, z]] = nestedArr;
console.log(x, y, z); //* OUTPUT: 2, 5, 6

//! ---------------- DESTRUCTURING OBJECT ---------------------------------- //

// const { name, location, categories } = restaurant; //* OUTPUT:

// To rename the variables
const {
  name: restaurantName,
  location: myLocation,
  categories: restaurantCategories,
} = restaurant;

// If a new Object does not have any value, we can still set them up as default empty array
const { dessertMenu = [], liquorMenu = [] } = restaurant;

// To mutating variables
let a = 111;
let b = 222;
const obj = { a: 1, b: 2, c: 3 };
({ a, b } = obj); // To force a and b to use the values declared from obj, mutating!!
console.log(a, b);
//* OUTPUT: 1, 2
