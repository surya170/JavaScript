function fun_one(arg1?:String,arg2?:String,arg3?:String){
  console.log(arg1,arg2,arg3); // undefined undefined undefined
};

fun_one();

function fun_two(arg1?:String,arg2?:String,arg3?:String):void{
    console.log(arg1,arg2,arg3); // undefined undefined undefined
  };
  
  fun_two();
  fun_two("Angular","Nodejs","MongoDB");// Angular Nodejs MongoDB
  fun_two("ReactJs");
  fun_two(undefined,"Deno");
  fun_two(undefined,undefined,undefined);
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
  function fun_one2(arg2:string,arg1?:string) {
     console.log(arg1,arg2);
  }
  // fun_one2(); // Expected 1-2 arguments, but got 0.
  fun_one2("Hello_1"); // undefined Hello_1
  fun_one2("Hello_1","Hello_2"); // Hello_2 Hello_1

  // NormalParameter,OptionalParamter,DefaultParameter and RestParameter.
  function fun_one3(arg1:any,arg2:any="Hello_2",arg3?:any,...arg4:any):void {

  }
  fun_one3("Hello_1");   // Expected at least 1 argument but got 0.
  fun_one3("Hello_1","Hello_2");  // Hello_1 Hello_2 Hello_3 Hello_4
  fun_one3("Hello_1",undefined,"Hello_3","Hello_4"); // Hello_1 hello_2 Hello_3 Hello_4
  fun_one3(undefined,undefined,undefined,undefined); // undefined Hello_2 undefined  [ undefined ].
  fun_one3(null,null,null,null); // null null null null

  

