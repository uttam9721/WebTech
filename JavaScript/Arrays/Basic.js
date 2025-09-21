// // // const prompt = require("prompt-async");


// // // let arr=[];
// // // arr.push(10);
// // // arr.push(20);
// // // arr.push(30);
// // // arr.push(40);
// // // arr[7]=50;
// // // // console.log(arr[1]);
// // // console.log(arr[4]);

// // // let arr=new Array(5)
// // // for(let i=0;i<arr.length;i++){
// // //     arr[i]=Number(prompt("Enter ur number.."))
// // //     console.log(arr[i]);
    
// // // }










// // let arr =[];
// // arr[0]=1;
// // arr[1]=2;
// // arr[2]=3;
// // arr[5]=5;
// // for(let i =0;i<arr.length;i++){
  
// // }
// // console.log(arr);

// let arr =[2,4,6,8,10];
// // let sum =0;
// // for(let i=0;i<arr.length;i++){
// //     sum=sum+arr[i];
// // }
// // console.log(sum);
// let max=arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log(max);


let arr=[10,20,30,40,50];
let i =0,j=arr.length-1;
while(i<=j){
    let temp=arr[j];
    arr[j]=arr[i];
    arr[i]=temp;
    i++;
    j--;
    
}
console.log(arr);
