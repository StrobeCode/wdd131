nums = [12, 10, 8, 3]

console.log(nums.sort(compareFn));


function compareFn(a,b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
 return 0;
}
                

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];
                
let simpleSort = simpleList.sort();

console.log(simpleSort);

let lowerList = simpleList.map(function(fruit){ 
    return fruit.toLowerCase();
})

let lowerSort = lowerList.sort();
console.log(lowerSort);

let searchTerm = 'an';

let filterFruit = lowerList.filter(searchFruit);

function searchFruit(fruit) {
    return fruit.includes(searchTerm);
}