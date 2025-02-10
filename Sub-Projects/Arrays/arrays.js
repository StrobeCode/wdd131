const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`//the html string made from step
}
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
// document.querySelector("#myList").innerHTML = stepsHtml.join("");

const grades = ['A', 'B', 'A']

function gpa(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    } else if (grade === 'B') {
        points = 3;
    }
    return points;
    
}

const gpaPoints = grades.map(gpa);
console.log(gpaPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
  });
  const gpaAverage = pointsTotal / gpaPoints.length;
  console.log(gpaAverage);
  
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']

const sixFruits = fruits.filter(function (fruit) {
    return fruit.length < 6;
    });
    console.log(sixFruits);

const numbers = [12, 34, 21, 54];
const LuckyNumber = 21;
let LuckyIndex = numbers.indexOf(LuckyNumber);
console.log(LuckyIndex);
