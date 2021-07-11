// Assignment: JavaScript Hoisting
// -1
// console.log(hello);                                   
// var hello = 'world';
// will be:
var hello;
console.log(hello);
hello='world';
// prediction:
// undefined
// ****************************
// -2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
var needle='haystack';
function test(){
    var needle;
    needle='magnet';
    console.log(needle);
}
// predition: undefined; for the function never invoked.
// ***********************************
// -3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
var brendan;
function print(){
   var brendan;
   brendan='only okay';
   console.log(brendan);
}
brendan='super cool';
console.log(brendan);
// prediction:super cool.
// *****************************
// -4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

var food;
food="chicken";
console.log(food);
eat();
function eat(){
    var food;
    food='half_chicken';
    console.log(food);
    var food;
    food="gone";
}
// prediction: chicken, half_chicken
// **************************************************
// -5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);


mean();
console.log(food);
var mean=function(){
    var food;
    food='chicken';
    console.log(food);
    var food;
    food="fish";
    console.log(food);
}
console.log(food);
// prediction:Uncaught TypeError: mean is not a function
// **********************************************************************
// -6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

console.log(genre);
var genre;
genre="disco";
rewind();
function rewined(){
    var genre;
    genre='rock';
    console.log(genre);
    var genre;
    genre="r&b";
    console.log(genre);
}
console.log(genre);
// prediction: disco,rock, r&b,disco
// **************************************************
// -7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

var dojo;
dojo="san jose";
console.log(dojo);
learn();
function learn(){
    var dojo;
    dojo="seattle";
    console.log(dojo);
    var dojo;
    dojo="burbank";
    console.log(dojo);
}
console.log(dojo);
// prediction :san jose,seattle,burbank,san jose.
// ******************************************************************************
// -8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// prediction:{name: "Chicago", students: 65, hiring: true}



