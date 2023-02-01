<<<<<<< HEAD
//1 Block scoped let & const
for(let i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
}
console.log(i); // undefined

/*...................................................................................................................*/ 

// 2. Template Literals
let firstName="anna"
let lastName="rose"
let Name = `My name is ${firstName} ${lastName}`
console.log(Name);

/*...................................................................................................................*/ 

// 3. Multi-line Strings
let intro =`
   Hi, I'm Anna. 
   I'm From thrissur.
   .......
`
/*...................................................................................................................*/ 

// 4. Destructuring Assignment

//Array Destructuring
// 1
let fruits = ["Apple", "Banana"];
let [a, b] = fruits; // Array destructuring assignment
console.log(a, b);

// 2
function printFirstAndSecondElement([first, second]) {
    console.log('First element is ' + first + ', second is ' + second)
}

function printSecondAndFourthElement([, second, , fourth]) {
    console.log('Second element is ' + second + ', fourth is ' + fourth)
}

var array = [1, 2, 3, 4, 5]

printFirstAndSecondElement(array)  //First element is 1, second is 2 
printSecondAndFourthElement(array) //Second element is 2, fourth is 4 


//Object Destructuring
//1
let person1 = {name: "Peter", age: 28};
let {name, age} = person1; // Object destructuring assignment
console.log(name, age);

//2
function printBasicInfo({firstName, secondName, profession}) {
	console.log(firstName + ' ' + secondName + ' - ' + profession)
}

var person = {
  firstName: 'John',
  secondName: 'Smith',
  age: 33,
  children: 3,
  profession: 'teacher'
}

printBasicInfo(person)  //John Smith - teacher

/*...................................................................................................................*/ 

// 5 Enhanced object literals

// define fields with variable assignment of the same name
// define functions
// define dynamic (calculated) properties
const color = 'red'
const point = {
  x: 5,
  y: 10,
  color,
  toString() {
    return 'X=' + this.x + ', Y=' + this.y + ', color=' + this.color
  },
  [ 'prop_' + 42 ]: 42
}

console.log('The point is ' + point) //The point is X=5, Y=10, color=red 
console.log('The dynamic property is ' + point.prop_42)  //The dynamic property is 42 

/*...................................................................................................................*/ 

//6 Array methods

//find , forEach,map,filter,some,reduce,every

/*...................................................................................................................*/ 

//7.Spread operator
var array = ['red', 'blue', 'green']
var copyOfArray = [...array]

console.log('Copy of', array, 'is', copyOfArray) //Copy of ["red","blue","green"] is ["red","blue","green"] 
console.log('Are', array, 'and', copyOfArray, 'same?', array === copyOfArray) //Are ["red","blue","green"] and ["red","blue","green"] same? false

//Rest operator
function printColors(first, second, third, ...others) {
    console.log('Top three colors are ' + first + ', ' + second + ' and ' + third + '. Others are: ' + others)
  }
=======
//1 Block scoped let & const
for(let i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
}
console.log(i); // undefined

/*...................................................................................................................*/ 

// 2. Template Literals
let firstName="anna"
let lastName="rose"
let Name = `My name is ${firstName} ${lastName}`
console.log(Name);

/*...................................................................................................................*/ 

// 3. Multi-line Strings
let intro =`
   Hi, I'm Anna. 
   I'm From thrissur.
   .......
`
/*...................................................................................................................*/ 

// 4. Destructuring Assignment

//Array Destructuring
// 1
let fruits = ["Apple", "Banana"];
let [a, b] = fruits; // Array destructuring assignment
console.log(a, b);

// 2
function printFirstAndSecondElement([first, second]) {
    console.log('First element is ' + first + ', second is ' + second)
}

function printSecondAndFourthElement([, second, , fourth]) {
    console.log('Second element is ' + second + ', fourth is ' + fourth)
}

var array = [1, 2, 3, 4, 5]

printFirstAndSecondElement(array)  //First element is 1, second is 2 
printSecondAndFourthElement(array) //Second element is 2, fourth is 4 


//Object Destructuring
//1
let person1 = {name: "Peter", age: 28};
let {name, age} = person1; // Object destructuring assignment
console.log(name, age);

//2
function printBasicInfo({firstName, secondName, profession}) {
	console.log(firstName + ' ' + secondName + ' - ' + profession)
}

var person = {
  firstName: 'John',
  secondName: 'Smith',
  age: 33,
  children: 3,
  profession: 'teacher'
}

printBasicInfo(person)  //John Smith - teacher

/*...................................................................................................................*/ 

// 5 Enhanced object literals

// define fields with variable assignment of the same name
// define functions
// define dynamic (calculated) properties
const color = 'red'
const point = {
  x: 5,
  y: 10,
  color,
  toString() {
    return 'X=' + this.x + ', Y=' + this.y + ', color=' + this.color
  },
  [ 'prop_' + 42 ]: 42
}

console.log('The point is ' + point) //The point is X=5, Y=10, color=red 
console.log('The dynamic property is ' + point.prop_42)  //The dynamic property is 42 

/*...................................................................................................................*/ 

//6 Array methods

//find , forEach,map,filter,some,reduce,every

/*...................................................................................................................*/ 

//7.Spread operator
var array = ['red', 'blue', 'green']
var copyOfArray = [...array]

console.log('Copy of', array, 'is', copyOfArray) //Copy of ["red","blue","green"] is ["red","blue","green"] 
console.log('Are', array, 'and', copyOfArray, 'same?', array === copyOfArray) //Are ["red","blue","green"] and ["red","blue","green"] same? false

//Rest operator
function printColors(first, second, third, ...others) {
    console.log('Top three colors are ' + first + ', ' + second + ' and ' + third + '. Others are: ' + others)
  }
>>>>>>> abf0e16 (sec commit)
  printColors('yellow', 'blue', 'orange', 'white', 'black') //Top three colors are yellow, blue and orange. Others are: white,black 