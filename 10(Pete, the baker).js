// Pete likes to bake some cakes. He has some recipes and available. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available available (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). available that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const cakes = (recipe, available) => {
  let quantity = [];

  let recipeElements = Object.keys(recipe); //[flour, suger,eggs]
  let availableElements = Object.keys(available); //[flour, suger,eggs,milk]

  for (index in recipeElements) {
    //using for in we are getting index of the key
    for (ingredient of availableElements) {
      //using for of we are getting the key

      const key = recipeElements[index]; //we are getting the key
      if (key === ingredient && recipe[key] <= available[ingredient]) {
        quantity.push(Math.floor(available[ingredient] / recipe[key]));

        break;
      } else if (index < availableElements.length) {
        if (recipe[key] > available[key]) {
          quantity.push(0);
          break;
        }
        continue;
      } else {
        quantity.push(0);
      }
    }
  }

  quantity.length ? (amount = Math.min(...quantity)) : (amount = 0);
  return amount;
};
console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);

console.log(cakes({ apples: 3, flour: 300 }, { flour: 300, apples: 3 }));

console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
