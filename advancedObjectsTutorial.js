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

//ES8
// String padding
.padStart()
.padEnd()
//console
'turtle'.padStart(10);
//  we get turtle with 10 spaces after it

//trailing commas in function's parameter list ad calls
//is a sintaxins, just make things look a litle bit nicer
const fun = (
    a,
    b,
    c,
    d, //allways with a coma
    ) => {
    console.log(a)
}
fun(1,2,3,4,) 

//objects by value
objects.value
objects.entries
//they are susesors of objeck.key



let obj ={
    username0: 'santa',
    username1: 'rudolf',
    username2: 'mr. grinch',
}
//now, it work like an array (but it's an object)

//old way: 

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

//Object.values -- we get the values of the objects

Object.values(obj).forEach(value =>{
    console.log(value);
})

//entries -- we get an array in console
Object.entries(obj).forEach(value =>{
    console.log(value);
})

//real life escenario
//we recieve tthe next info from the backend:

let obj ={
    username0: 'santa',
    username1: 'rudolf',
    username2: 'mr. grinch',
}
//we need to transform the usersnames0, 1

//maps return an array, remeber?
//we want to change the rudolf name

Object.entries(obj).map(value=>{ 
    retun value[1] + value[0].replace('username', ''); //value of second item + value of first username repalece username by '' (nothing)


})

//ES10
//.flat() transform varius and inseption array into 1

const array =[1,[2,3],[4,5]]
array.flat(1) //1 is the number of inside arrays that tis going to flatten
const entries = ['bob','sally',,,,,'cindy']
entries.flat() //cleans the entries
//flatmap
const jurassicParkChaos = jurassicPark.flatMap (creatue => cretaure + 'TRex')
const userEmail = '      eddytheeagle@gmail.com'
const userEmail2 ='jonny@gmail.com       '
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd()) //aviod blank spaces

userprofiles = [['commandeTom', 23],['dereckZlander', 40],['hansel', 18]]; // we have a desorganizated array   
Object.fromEntries(userprofiles) //transform the array into an object and organizes it

//try/catch allow us to try a piece of  code
try{
4+5
}catch{
console.log('you messed up')
}

//loops advanced:
//1
const basket = ['apples','oranges','grapes'];
for ( let i = 0; i < basket.length; i++){
    console.log(basket[i]);
}
//also we can use 
//2
basket.forEach(item =>{
    console.log(item);
})

//for of
//we are iterating this array (go back by one and looks for the items)
for (item of basket) {
    console.log(item);
}
//in strings
for (item of 'basket') {
    console.log(item);
}

//for in (works with object)
//allows us to loking at the properties
//enumerating -enumeratin objects
//so we create an object now

const basket = ['apples','oranges','grapes'];
const detailedBasket = {
    apples:5,
    oreanges:10,
    grapes: 1000
}


for (item in detailedBasket) {
    console.log(item);
}
//we can make a for in with the basket

for (item in basket) {
    console.log(item);
}