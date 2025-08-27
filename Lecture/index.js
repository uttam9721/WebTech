// // in case of var we car declare variable and initialize value and also we can redeclare value and update the value
// // var a =10;
// // var a =20
// // var a =50;
// // console.log(a);

// // in case of let we can update the value  means we can re initialize value but we can not re declare variable
// // let b = 10;
// // b=20;
// // console.log(b);


// // in case of const we can declare variable but we can not re assign value and re declare variable

// // const a = 10;
// // const a=20;
// // console.log(a);



// // what is hoisting
// // hoisting is a process of moving variable and function declarations on the top of their scope
// // it will work on the var not let or const ;

// // console.log(a);
// // var a=10;

// // A function is a block of code which is reusable is nature make reusable code reduce line of code
// // there are many type of functions
// // eg=> 
// // 1.Named function
// // 2.Anonymous Function
// // 3.First Class Function
// // 4.Function with expression
// // 5.IIFE
// // 6.Arrow Function
// // 8.Callback function



// // 1.Named function
// // A function declare with an identifier or name

// // function add(a,b){
// //     console.log(a+b);
// // }
// // add();

// // 



// // 2.Anonymous Function
// // A function declared without an identifier or name
// //    let ans= function (){
// //         console.log("Hii");  
// //     }
// //     ans()




// // 3.First Class Function
// // A function that is treated as a value and assigned to a variable

// // let first=function(){
// //     console.log("Fcf");
    
// // }
// // first();



// // 5.IIFE
// // (function(){
// //     console.log("IIFE");
    
// // })();



// // // 6. Arrow Function
// // const login = () => {
// //     // console.log("User already logged in");
// //     console.log(10);
// // };

// // login(); // ✅ call the function



// // callback function
// // function greet(name, callback) {
// //   console.log("Hello, " + name);
// //   callback(); // calling the callback function
// // }

// // function sayGoodbye() {
// //   console.log("Goodbye!");
// // }

// // greet("Uttam", sayGoodbye);



// // Closure function
// // A closure is a innerfunction container the outer function
// // A closure is a function it has two function parent function or child function
// // a child function contain parent property 

// // function parent() {
// //     let a = 10;
// //     function child() {
// //         console.log(a);
// //     }
// //     return child;
// // }

// // let ans = parent();
// // ans(); 





// // Interview Question

// // let str ="Uttam maurya";
// // function reverseString(str){
// //     return str.split("").reverse().join("")
// // }
// // console.log(reverseString(str));


// // or

// // let str ="Uttam maurya";
// // let ans = str.split("").reverse().join("");
// // console.log(ans);



// // create a program that check if a given year is leap or not 

// let year = 2023;

// if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log("Year is leap");
// } else {
//     console.log("Year is not leap");
// }
