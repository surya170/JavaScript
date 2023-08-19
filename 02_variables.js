//variables
// variales are used to store the data.
// Ex: string,number,boolean ,objects......
// we will define the variables  by using "var","let" or "const".
// "let" and "const" keywords are introduced in ES6.
// variables should contain a-z,A-Z,0-9, $ and _
// variables should not starts with digits
// Syntax: 
//  var/let/const variablename = value;

//string
//group of characters called as string
// we will represent string in ""(double quotes), ''(single quotes) and ``(backtick)
// ``(backtick) operator introduced in Es6.
// ``(backtick) also called as template literal.
// ``(backtick) operator used to define the paragraphs.



var sub = "FullStack UI";
var Wish = `Welcome to ${sub}`;
console.log(Wish); // Welcome to Fullstack UI


var sub_one = `Reactjs`;
var sub_two = `Nodejs`;
var sub_three = `MongoDB`;
var mern = `MERN STACK : ${sub_one}<==>${sub_two}<==>${sub_three}`;
console.log(mern);


var tbl_name = `employees`;
var uname = `admin`;
var upwd = 'admin';
var login_query = `select * from ${tbl_name} where uname='${uname}' and upwd='${upwd}'`;
console.log(login_query);

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


// boolean data type
var flag = true;
console.log(flag);  // true


// BigInt datatype 
//if u want to store the value above these range 2^63 to 2^63-1.
//bigint datatype will represent with "n". (suffix)

var my_number = 123456789123456789123456789123456789123456789123456789123456789123456789123456789;
console.log(my_number);

var my$number = 123456789123456789123456789123456789123456789123456789123456789123456789123456789n;
console.log(my$number);


// Symbol Data Types
// it is used for security to data

var my_data = Symbol("React JS");
console.log(my_data);


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


// Array Data Type 
// collection of indexed and hetrogenous elements called as array.
// [] 
// forEach()  (ES6)
var arr1 = [10, 20, 30, 40, 50];
var arr2 = [60, 70, 80, 90, 100];

arr1.forEach((element, index) => {
    console.log(element, arr2[index]);
});

var frontEnd_Subjects = [`Angular`, `React Js`, `VueJs`];
var backEnd_Subjects = [`Nodejs`, `Deno`, `SpringBoot`];
frontEnd_Subjects.forEach((element, index) => {
    console.log(element, backEnd_Subjects[index]);
});


// JSON Data Type 

// JSON : JavaScript object Notation.
// JSON is used to transfer the data over the network
// JSON is light weight
// JSON is Eazy To parse
// Objects ---> {}  arrays ----> []  data ----> key&value pairs , KeyValue separated by using ":" pairs seperated by using ","

var obj = {
    sub_one: `React JS`,
    sub_two: `Node js`,
    sub_three: `MongoDB`,
};
console.log(obj.sub_one,obj.sub_two,obj.sub_three);




// Bugs in Var Keyword

for(var i=0;i<5;i++) 
{
   
};
console.log(i);    // var:5   // let : ReferenceError : i is not defined  (ES6)
// var keyword breaks the scope rule
// let keyword obeys the scope rule


//global variable
var data  = 100;
console.log(data);  // 100
//block
{
    //local variable
    var data = 200;
    console.log(data);  // 200
}
console.log(data);   //200  because of the bug in the keyword we are getting 200 so to overcome these bugs go for let
//  is global member effected by local number,called as global polluting issue
// global polluting issue raised because of var keyword
// We can overcome global polluting issue by using let keyword.



var data = 100;
var data = 200;
console.log(data);  //200  // we are Excepting error but we got 200.

/*
let data = 100;
let data = 200;
console.log(data);  //error
*/

// var keyword allows the duplicate vaiables
// let keyword do not allows the duplicate variables.

 // Process Of variable :

// declaration and intialization
// Access The variable

var data = 100;
console.log(data);  // 100

console.log(data1); //var :  undefinede // let: Error
var data1 = 200;

// accessing the variables with undefiend value,before it's declaration and initilization called as variable hoisting
// var keyword allows the variable hoisting
// we can overcome variable hoisting by using "let" keyword


for(var i=0;i<6;i++) {
    setTimeout(()=>{
        console.log(i);
    },8000);
};

// var : 6 6 6 6 6 6
// let : 0 1 2 3 4 5


/*************************************************************************************************
                      var                                             let
     var keyword introduced in ES1                          let keyword introduced in ES6
     duplicate variables allows                             won't allow the duplicate variables
     global polluting issues raised                         we can oveercome gllobal global polluting issue
     variable hosting issue raised                          we can overcome variable hoisting issue
     scope rule break by the var keyword                    scope rule obey by the let keyword
**************************************************************************************************/


// const
// we can't modify the data (const)
// it is also introduced in ES6
