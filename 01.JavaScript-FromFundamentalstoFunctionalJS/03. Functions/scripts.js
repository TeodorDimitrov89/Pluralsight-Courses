// function AnimalMaker(name) {
//     return {
//         speak: function () {
//             console.log('my name is ',name);
//         }
//     };
// }
//
// let animalNames = ['Sheep','Linger','Big Bird'];
//
// let farm = [];
//
// for (let name of animalNames) {
//     let animal = AnimalMaker(name);
//     farm.push(animal)
// }
// farm.forEach(a => a.speak());
//Animal User

//Write a function, AnimalTestUser, that has one string parameter, username.
//It returns an object with a username property.

// In your AnimalTestUser function, create a check that sees how many arguments are passed. If there is more than one argument, create a property, otherArgs that is an array of the remaining arguments. Note: the arguments keyword is not a true array. Remember, it is an array-like object.

function AnimalTestUser(username) {
    let restArgs = [...arguments].splice(1)
    if(restArgs.length > 1) {
        return {
            username:username,
            otherArgs:restArgs
        }
    }
    return {
        username:username
    }

}
// let testSheep = AnimalTestUser('CottonBall',{'loves dancing': true}, [1,2,3]);
let testSheep = AnimalTestUser('CottonBall');
// console.log(testSheep); // { username: 'CottonBall' }

// Write a constructor function, AnimalCreator that returns a single animal object. The constructor function has 4 parameters: username, species, tagline, and noises. The animal object should have at least 5 properties: username, species, noises, tagline, and friends. The values should all be strings except noises and friends, which are arrays.

function AnimalCreator(username, species, tagline,noises) {
    return {
        'username':username,
        'species':species,
        'tagline':tagline,
        'noises':noises,
        'friends':[]
    }
}

let sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
// console.log(sheep);
let cow = AnimalCreator('Cow', 'cow', 'You can count on me!', ['buabau', 'brrrr', 'chewchewchew']);

let llama = AnimalCreator('Zeny', 'hybrid', 'You can count on me!', ['buabau', 'brrrr', 'chewchewchew']);
// console.log(cow);

// Write a function, addFriend that takes an animal object (like the one returned from the AnimalCreator function) and adds another animal object as a friend.

let addFriend = function (animal,friend) {
    animal.friends.push(friend.username);
    return animal
};

addFriend(sheep,cow);

let myFarm = [sheep,cow,llama];
addFriend(cow,sheep);
addFriend(llama,cow);
// console.log(myFarm);
function addMatchesArray(farm) {
    farm.forEach((animal,index) => farm[index].matches = []);
}
addMatchesArray(myFarm);
// console.log(myFarm[0]);

function giveMatches(farm) {
    farm.forEach((animal,index) => farm[index].matches.push(farm[index].friends[0]))
}
giveMatches(myFarm);
console.log(myFarm[0]);