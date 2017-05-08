// let myObject = {};
// myObject.name = 'pesho';
// myObject.object = {
//     value:2,
//     time:'Time is up!'
// };
// let obj = JSON.parse(JSON.stringify(myObject.object)); //deep object copy
// let shadowCopy = {...myObject};
// shadowCopy.hero = 'HERO';
// console.log(myObject);

//#####Create a Friendslist
//Create an array for the list of friends' usernames.
//Create a variable called friends and assign it to the empty data structure.
//Using your animals array, add two usernames to friends.
//ensure that you are just putting the username value, not the entire object.
//be careful not to use a destructive method like pop() that will remove the whole value from the animals array.
//Inspect your friends data structure. What does it look like?

let noiseArray = ['quack','honk'];

//Using Bracket Notation…
noiseArray[2] = 'sneeze';

let animal = {};
animal.username = 'Mittens';
animal.tagline = 'Yippeee!';
animal['noises'] = noiseArray;

let animals = [];
animals.push(animal);

let quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };
animals[1] = quackers;

let animalObject1 = {username:'dog',tagname:'super dog',noises:['bal-bal','bau','phu']};
let animalObject2 = {username:'cat',tagname:'super cat',noises:['mua','meow','phu']};
animals.push(animalObject1);
animals.push(animalObject2);

let friends = [];
friends.push(animals[0].username,animals[1].username);

//Create a Relationships object

//Create a variable called relationships assign it to an empty object.
let relationships = {};
//Add your friends data structure to the relationships object.
relationships.friends = friends;

//Inspect your object. What is it's "length"?
// console.log(relationships);

//Create a variable called matches and assign it to an empty array.

let matches = [];
relationships.matches = matches;
// console.log(relationships);

//Using the relationships object, add at at least one username to matches.
relationships.matches.push('Pig');

// animals.forEach((animal,index)=>animals[index].relationships = relationships );
// animals.forEach((animal,index)=> animals[index].relationships = relationships);
for (let i = 0; i < animals.length; i++) {
    animals[i].relationships = relationships;
}
console.log(animals);