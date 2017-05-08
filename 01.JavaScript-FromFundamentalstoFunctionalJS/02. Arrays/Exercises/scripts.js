//Arrays as Collections

//Create an array.
//Create a variable called noiseArray and assign it to an array literal. Place at least one element in the array.



// Using a native array method…
// Add a noise to the beginning of the noiseArray.
// Add another noise to the end of the noiseArray.

let noiseArray = ['quack','honk'];

//Using Bracket Notation…
noiseArray[2] = 'sneeze';

//Nest the Array in the Object

let animal = {};
animal.username = 'DaffyDuck';
animal.tagline = 'Yippeee!';
animal['noises'] = noiseArray;

//Animal Collection

//A collection is an array of objects.
let animals = [];
animals.push(animal);

let quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };
animals[1] = quackers;

let animalObject1 = {username:'dog',tagname:'super dog',noises:['bal-bal','bau','phu']};
let animalObject2 = {username:'cat',tagname:'super cat',noises:['mua','meow','phu']};
animals.push(animalObject1);
animals.push(animalObject2);


console.log(animals);
