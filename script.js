//js advanced tutorial

//scope - the default root scope is window 
//root Scope (window)
var fun = 5;

function funfunction(){
    //child scope
    var fun = 'hello';
    console.log(1, fun);
}

function funierfunction(){
    //child scope
    var fun = 'byee';
    console.log(2, fun);
}

function funiestfunction(){
    //child scope
    var fun = 'ahhh';
    console.log(3, fun);
}
console.log('window', fun);
funfunction();
funierfunction();
funiestfunction();

//javascript conditionals
1- else
2-if
3-else if
4-ternary operator
5-switch

//ternary operator

//condition ? expr1 : expr2
function isUserValid(bool){
    return bool;

}
var answer = isUserValid(true) ? 'you may enter' /* if its true this*/ : 'acces denied' /*if its false this*/

//ternary operator
var automatedAnswer =
'your account # is' + (isUserValid(false) ? '1234': 'not available');

// Ternary condition do the same that if/else but easier
function condition(){
    if (isUserValid(true)){
        return 'you may enter';
    } else {
        return 'access denied';
    }
} 
var answer2= condition();

//switch 
function moveCommand(direction){
    var whatHappens;   //intead of if/else we're using switch
    switch (direction){
        case 'forward':
            whatHappens = 'you encounter a monster';
            break;
         case 'back':
            whatHappens = 'you arrived home';
            break;
        case 'right':
            whatHappens = 'you find a river';
            break;
        case 'left':
            whatHappens = 'you run into a troll';
            break;
        default:
            whatHappens = 'enter a valid direction';
    }
    return whatHappens;
}
//copy this in console, then by putting window.moveCommand('right') you controle it

//variables let and const
// let+const 
const player = 'bobby'
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel)
}
console.log('outside', wizardLevel)

//destructuring

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}
// if we wanna grab this objects properties

const {player, experience } = obj;
let {wizardLevel } = obj;

//another example of grab objects properties
const a = 'simon';
const b = true;
const c = {};

const obj = {
    a,
    b,
    c
}

//template strings
//instead of
const greeting = 'hello'+ name + 'you seem to be doing' +greeting
//we can make 
const name = 'sally';
const age = 34;
const pet = 'horse';
const greetingBest= `hello ${name} you seem to be ${age-10} years old. and what a beatiful ${pet} you had. `;
//call it in console greetingBest

//default arguments
function greet(name='', age=30, pet='cat'){
    return `hello ${name} you seem to be ${age-10} years old. and what a beatiful ${pet} you had. `;
} //call it in console: greet() cheange person: greet('john',50,'monkey');

//js types= Symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');
//ensures no conflics to avoid bugs. you can't make sym2 ===sym3

//arrow functions
//without
function add (a,b){
    return a + b;
}
//with arrow fuction
const add = (a, b) => a + b;
//another example
const whereAmI = (username, location) => (username && location) ? 'im not lost': 'I am totally lost'

//advanced functions
//we have this function, we need to transform it into let and const 
const first =() => {
    const greet = 'hi';
    const second = () => {
        alert(greet);
    }
    return second;
}
const newFunc =first();
//closures - a function ran. the function executed. it's never going to execute again.
//but its going to remember that there are references to those variables
//so the child scope always has acces to the parent scope.

//currying -the process of converting a function that takes multiples arguments into a function that takes them one at a time
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
//inb the console=
curriedMultiply(3)(4); //we're saying a=3 b=4

//compose - put 2 actions together to form a 3rd function were the ouput of one funbct is the imput of the other
const compose = (f, g) => (a) => f(g(a)); //f & g are functions
const sum= (num) => num + 1

compose (sum, sum)(5); //f&g =sum a=5

//avoiding side efects, funbctional purity.
we need to avoid this things
Var c=1;
function b(){
    c=2;
}


//advanced arrays

var array=[1, 2, 3];
//canb be used with
for
forEach

//for each

const array = [1, 2, 3];

const double =[]
const newArray = array.forEach((num) => {
    double.push(num * 2);

})
console.log('forEach', double);

// map,filter,reduce --they are arrays
//map -- has less side effects than forEach
const array = [1, 2, 3];

const mapArray = array.map(num => num * 2);
console.log('map', mapArray);

//filter
const array = [1, 2, 10, 20];

const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);
//we can put any condition >, ===, search 'strings' (also to retun true or false)

//reduce --we can do filtering and maping with reduce

const array = [1, 2, 10, 20];

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0); //0 is the accumulator
console.log('reduce', reduceArray);