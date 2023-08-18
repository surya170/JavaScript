// Variable
// variable are used to stored the data
// Ex:String,number,boolean,objects,....
// we will define the variables by using "var","let" or "const"
// "let" & "const" keywords are introduced in ES6.
// variables should contains a-z ,A-Z , 0-9 , $ and _
// variables should not start with digits
// Synatx: 
// var/let/const variablename = value;


//String 
//group of chars called String 
// we will represent strign in ""(double quote), ''(single quote), ``(backtick).
// ``(backtick) is introduced in ES6.
// ``(backtick) is also called as template literal
// ``(backtick) operator used to define paragraph.

var sub = "FullSatck UI";
var wish = `Welcome to ${sub}`;
console.log(wish); // Welcome to FullSatck UI

var sub1 = "REact Js";
var sub2 = "Node js";
var sub3 = "Mongo DB";
var mern = `MERN Stack : ${sub1} <==>${sub2}<==>${sub3}`;
console.log(mern); // MERN Stack : REact Js <==>Node js<==>Mongo DB

//number data type
//Five Types of numbers possible 
//  decimal , double , hexadecimal , octal , binary 
// heaxdecimal number should prefix with "0x"
//octal number should prefix with "0o"
// binary number should prefix with "0b"
var decimalNum = 100;
var doubleNum = 100.12345;
var hexadecimalNum = 0xABC123;
var octalNum = 0o123;
var binaryNum = 0b1010;

console.log(decimalNum, doubleNum, hexadecimalNum, octalNum, binaryNum);  // output : 100 100.12345 11256099 83 10
//100 100.12345 11256099 83 10

// boolean datatype
// true or false 
var flag = true;
console.log(flag); // true

// BigInt Datatype
// if we want to store the number above these range 2^63 to -2^63-1
// BigInt datatype will represent with "n".

var my_number =123235467888888372412323546788888837241232354678888883724123235467888888372412323546788888837241232354678888883724;
console.log(my_number); // 1.2323546788888838e+113

// Note: We can not see the number it was rounded 
// if we want to see with out round val use "n" at the suffix

var my_number =123235467888888372412323546788888837241232354678888883724123235467888888372412323546788888837241232354678888883724n;
console.log(my_number); // 123235467888888372412323546788888837241232354678888883724123235467888888372412323546788888837241232354678888883724n


// Symbol Datatype
// Security to Data.

var my_data = Symbol("ReactJS");
console.log(my_data); // Symbol(ReactJS)

// undefined & null

//undefined Data Type & Null Data Type 
// Psychologicall Example for these Data type is
// For Example You have Mobile Phone With you but it is not working because of other reasons so it is undefined
// For My self i dont have mobile phone is null
// object is there but not working is undefined
// object itself is not there is null.



// ==  (Comapre only value) & === ( Compare both Value and DataType)

console.log(10 == "10");  // true
console.log(10 == "ten"); //false
console.log(10 === "10"); // false


console.log(undefined == undefined);    // true 
console.log(undefined === undefined);   // true
console.log(null == null);              // true
console.log(null === null);            // true
console.log(undefined == null);        // true
console.log(undefined === null);       // false


// Array Data type
// Collection of indexed and hetrogenous elements are called Array.
// If we go for in java it homogenous but in javascript it is hhetrogenous.
// If we want to iterate the array we use for loop
// In Es6 foreach() loop is used to iterate the array.

var arr1 = [10,20,30,40,50];
var arr2 = [60,70,80,90,100];

arr1.forEach( (element,index) => {
    console.log(element,arr2[index]);
});

var frontEnd_Subjects = ["Angular","ReactJS","VueJS"];
var backEnd_Subjects =  ["NodeJS","SpringBoot","Deno"];

frontEnd_Subjects.forEach((element,index)=>{
    console.log(element,backEnd_Subjects[index]);
});

// JSON Data Type 
// Java Script Object Notation
// Json is used to transfer the data over the network.
// JSON is light weight 
// JSON is easy to read and parse.
// Json is used to represent the objectives
// To REpresnts the  objects ----> {}   and represents array ----> []  
// How To represent the data we go for to represent tha data  we use ---> Key and value, key&Value seperated by using ":" , pairs seperated by using ".".

var obj = {
  sub_one : "React JS",
  sub_two : "NodeJS",
  sub_three : "MongoDB"
};

console.log(obj.sub_one,obj.sub_two,obj.sub_three); // React JS NodeJS MongoDB


// var 123 = "hello";  // invalid : becoz variable not start with digit

var $abc123 = "hello";   // valid
var _abc123 = "hello";  // valid 
var _123abc = "hello";  // valid  
// var abc#123 = "hello";  // invalid

for(var i=0;i<5;i++) {
   console.log(i);
}
/*
0
1
2
3
4
*/

for(var i=0;i<5;i++) {

}
console.log(i); // we get output as 5. 

// Scope of i is visible inside the for loop only.
// We are expecting the value 0 1 2 3 4 but we get only 5 that is bug in the var keyword.
// let : Reference : i is not defined (ES6)

// Here, Var keyword breaks the scope rule.
// let keyword obey the scope rule.

var data = 100; // Global Variable
console.log(data); // 100
//block 
{
    var data = 200; // Local variable
    console.log(data); // 200
}
console.log(data); // 200  Actually we are Excepting answer is 100 but we are getting 200 our think is correct but due to bug in the var 
// Keyword we are unexpected value.
// let is correct
// If any global number is effected by local number then we  called global polluting issue.
// global polluting issue raised because of var keyword.
// we can overcome global polluting issue by using let keyword.
// 

var data = 100;
var data = 200;
console.log(data);   // As a developer we are expecting  Error  but we are getting 200.

// To overcome the bug we are going for let keword

/*
let data = 100;
let data = 200;
console.log(data);   // We are getting error : SyntaxError: Identifier 'data' has already been declared

// var keyword allows the duplicate variables
// let keyword  won't allows the duplicate variables.
*/

// declarations and initilization
// access the variable 

console.log(data1); //  undefined as answer
var data1 = 120; // declaration & Initialization
//console.log(data1); // 120

// declaring the variable with undefined value,before its declaration and initialization called variable hoisting.
// var keyword allows the variable hositing
// we can overcome variable hoisting by using "let" keyword.


for(var i=0;i<5;i++) {
    setTimeout(() => {
       console.log(i);
    },8000);
}
// output : 5 5 5 5 5

for(let i=0;i<5;i++) {
    setTimeout(() => {
       console.log(i);
    },8000);
}
// output : 0 1 2 3 4

/**************************************************************************************************************** */
 /* 
                        var                                             let 
  var keyword introduced in ES6.                           let Keyword introduced in ES6.
  duplicate variable allowed                               duplcates are not allowed
  global polluting issue raised                            We can overcome global polluting issue.
  variable hoisiting issue raised                          we can overcome variable hoisting issue
  Scope rule break by var keyword.                         Scope rule obey by let keyword

 */
/**************************************************************************************************************** */


// const 
// We can't modify the data (const);
// It is also introduced in Es6.

const data2 = 100;
// data2 = 300;  // TypeError: Assignment to constant variable.
console.log(data2);

const obj1 = {wish:"ReactJS"};
console.log(obj1);  // { wish: 'ReactJS' }
 // obj1={}; // TypeError: Assignment to constant variable.
obj1.wish = "Welcome To ES11";
console.log(obj1); // { wish: 'Welcome To ES11' }




