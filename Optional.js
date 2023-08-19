function fun_one(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3); // undefined undefined undefined
}
;
fun_one();
function fun_two(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3); // undefined undefined undefined
}
;
fun_two();
fun_two("Angular", "Nodejs", "MongoDB"); // Angular Nodejs MongoDB
fun_two("ReactJs");
fun_two(undefined, "Deno");
fun_two(undefined, undefined, undefined);
/*
undefined undefined undefined
Angular Nodejs MongoDB
ReactJs undefined undefined
undefined Deno undefined
undefined undefined undefined
*/
//fun_two(undefined,null,null);
// optional  with regular
// In Comibuantion of optional with normal parameter, optional parameter should be in last position.
//  
function fun_one2(arg2, arg1) {
    console.log(arg1, arg2);
}
// fun_one2(); // Expected 1-2 arguments, but got 0.
fun_one2("Hello_1");
fun_one2("Hello_1", "Hello_2");
