// Objects and properties
// A JavaScript object has properties associated with it. A property of an object can be explained as a variable that is attached to the object. Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects. The properties of an object define the characteristics of the object. You access the properties of an object with a simple dot-notation:
//Dot Notation

//Work only with String

// let box = {};
// box.material = 'cardboard';
//
// let cb = box.material;
// box.material = 'titanium';
//
// console.log(cb);

//When to use Brackets The Rules
//string
//weird characters
//variables
//numbers
//expressions

//Iteration over objects
let box = {};
box.material = 'cardboard';
box.creator = 'Some Company';
box.year = 1923;
box.anotherObject = {
    someVariable: 'hello'
};

for (let key in box) {
    //Should check if box hasOwnProperty of key and then console.log!
    //The order of iteration object is not guarantee!
    if (typeof box[key] === "object") {
       Object.keys(box[key]).map(k => console.log(`${k} -> ${box[key][k]}`));
    } else {
        console.log(`${key} -> ${box[key]}`);
    }
}
