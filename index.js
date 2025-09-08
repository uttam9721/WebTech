// // // let arr = ["Hello Bro", "Hi Man"];
// // // let result =arr.map(str=>{
// // //     return str.split(" ").map(e=>e[0]).join("");
// // // })
// // // console.log(result);



// // // // let str = "uttam";
// // // // let rev ="";
// // // // for(let i =str.length-1;i>=0;i--){
// // // //     rev=rev+str[i];
// // // //     console.log(rev);
// // // // }


// // // let str = "nitin";
// // // let result = str.split(" ").reverse().join(" ");
// // // // console.log(result);
// // // if(str==result){
// // //     console.log("number is palindrome");
// // // }else{
// // //     console.log("number is not palindrome");
    
// // // }

// // let obj = { a: 1 };
// // let copy = obj;
// // copy.a = 2;
// // console.log(obj.a);

// function curry(a) {
//   return function(b) {
//     return a + b;
//   };
// }
// console.log(curry(2)(3)); // 5


// let str = "i love javascript";
// let result = str.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1))
// console.log(result);




// let arr = ["Hello Bro", "Hi Man"];
// let result =arr.forEach(str=>{
//     return let val= str.split(" ").map(e=>e[0]).join("");
// })
// console.log(result);
// // HB  HM



// let arr = ["Hello Bro", "Hi Man"];
// let result = arr.map(str => {
//   return str.split(" ").map(e => e[0]).join("");
// }).join(" ");
// console.log(result);
// // HB HM


// let arr =['a',10,'b',5,'c','3','d',2];
//         for(let i=1;i<arr.length-1;i*2){
//             let sum =0;

//             if(arr[i]==typeof number){
//                 sum=sum+arr[i];
                
//             }
//             console.log(sum);
//         }


// let arr =['a',10,'b',5,'c','3','d',2];
//         for(let i=0;i<arr.length;++i){
//             console.log(arr[i]);
           
                
//             }
        
let arr = ['a', 10, 'b', 5, 'c', 3, 'd', 2];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
        sum = sum + arr[i];   // accumulate numbers
    }
}

console.log(sum);  // Output: 17
