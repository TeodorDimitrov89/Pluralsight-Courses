//###Animal User Model

//Object
//An object to hold our data model...
//Create a variable, name it animal, and assign it an object literal.


//With Dot Notation…
//Add a property called username and assign it a value.
//Ensure that your username property exists in animal by inspecting it in the console.

let animal = {};
animal.username = 'DaffyDuck';

//With Bracket Notation…
//Add a property called tagline and give it a value.
//Check that your property exists in the animal object by inspecting it in the console.
//Create a variable called noises and assign it an empty array []
//Add the noises array to your object.
//Inspect your handiwork! Your object should look something like this:

animal['tagline'] = 'Yippeee';
let noises = [];
animal.noises = noises;

//Loops
let count = 0;
for(let key in animal) {
    count++;
    if(key ==='username') {
        console.log('Hi my name is ' + animal[key]);
    } else if(key === 'tagline') {
        console.log('I like to say ' + animal[key]);
    }
}
console.log(count);

