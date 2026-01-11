const PI = 3.14;
let area = 0;
function circleArea(radius) {
    return radius * radius * PI;
}

area = circleArea(3);
console.log(area);

area = circleArea(5);
console.log(area);

area = circleArea(8);
console.log(area);


// Scope Example
let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    