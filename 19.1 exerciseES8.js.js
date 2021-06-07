// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

//solution //redo
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

'🐢'.padStart(10);
'🐇'.padStart(10);



// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
"🐢======="
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
//ocupy the pad lenght 


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

//solution //redo

Object.entries(obj).map(value => value.join(" ")).join(' ')
