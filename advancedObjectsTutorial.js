//referenbce type
let object1 ={value: 10};
let object2 = object1; //we are are asignating a box for object1 &2
let object3 ={value: 10} 
//we cannot say object1 === object3 because they are diferents boxes objects


//context vs scope
//scope
function b(){
    let a=4;
}
//context tells you were we are within the object
this === window object
//this is the enviroment of the object that we're righ now
cosnt object4= {
    a: function() {
        console.log(this)
    }
}
 //now 'this' refers to object 4

//instantiation ---to make intances or multiples copies of objects
class Player {
    constructor(name,type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }

introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
}
}
class Wizard extends Player{
    constructor(name,type){
        super(name,type)
    }
    play(){
        console.log(`WEEE I'm a ${this.type}`);
    }
}
const wizard1 = new Wizard('shelly','healer');
const wizard2 = new Wizard('shawn','dark magic');

//clone a object 
var a = 5;
var b = a;
b++;

let obj = {a:'a', b:'b',c:'c'};
let clone = Object.assign({},obj); //to clone an object
let clone2 = {...obj} //do the same that clone
obj.c = 5; //we dont change the original object
console.log(clone);
console.log(clone2); 
//when we have an object inside an object
var a = 5;
var b = a; //pass by value
b++;

let obj = {a:'a', b:'b',c:{deep: 'try and copy me '}};
let clone = Object.assign({},obj); //to clone an object -- pass by reference
let clone2 = {...obj} //do the same that clone --pass by reference
let superClone =JSON.parse(JSON.stringify(obj)); //superclone make a deep clone of the object
obj.c.deep = 'hahaha'; //we dont change the original object
console.log(clone);
console.log(clone2);

//type coercion:
== is type coercion for example 1=='1' js is going to transform a value to be equal
=== is equal 
object.is(-0,+0) is pretty much like === expept in few cases

//ES7
'hello'.includes('o'); //console = true

cost pets =['cat','dog','bat'];
pets.includes('dog') //console = true


//Exponential operator

const square = (x) => x**2
square(2) = 4 //console
const cube = (y) => y**3
cube(4) = 64 //console
