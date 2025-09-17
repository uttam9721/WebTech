// // // // let arr = [1,5,4,6,3,2,7,9,10];
// // // // // arr.push(20);
// // // // // arr.pop()
// // // // // arr.shift()
// // // // // arr.unshift(0);
// // // // // arr.splice(0,1,"uttam");
// // // // // arr.sort((a,b)=>a-b);
// // // // // arr.reverse();
// // // // // arr.fill()
// // // // // console.log(arr);
// // // // // let ans =arr.slice(0,3);
// // // // // let ans = arr.concat()
// // // // console.log(ans);

// // // let arr = [1,2,3,4,5];
// // // // let res = arr.slice(0,3);
// // // // console.log(res);
// // // // arr.splice(0,2,'hii');
// // // // console.log(arr);
// // // // let ans = arr.slice(0,1);
// // // // console.log(ans);
// // // // let arr1=arr.forEach((e)=>console.log(e*2))
// // // // console.log(arr1);


// // // let ar = [1,2,3,'uttam','dev1'];
// // // for(let i =0;i<ar.length;i++){
// // //     if(typeof ar[i]!='number'){
// // //         console.log(ar[i]); 
// // //     }
// // // }


// // let arr = [
// //   { id: 1, color: 'red', price: 200 },
// //   { id: 2, color: 'red', price: 200 },
// //   { id: 3, color: 'orange', price: 200 },
// // ];

// // let resuld = arr.filter((e) => e.color === 'red');

// // let res = resuld.reduce((a, b) => a + b.price, 0);

// // console.log(res); // 400


// // let arr = [
// //   {id:1,color:'red',price:200},
// //   {id:1,color:'red',price:150},
// //   {id:1,color:'orange',price:100},
// // ]
// // // let res = arr.filter((e)=>e.color=='red');
// // // let ans = res.reduce((a,b)=> a +b.price ,0);
// // // console.log(ans);
// // let res = arr.filter((e)=>e.color=='red');
// // let ans = res.reduce((a,b)=> a+b.price,0);
// // console.log(ans);


// // let str = 'i love javascript taking training btmlayout';
// // // let ans = str.split(' ');
// // // let res = ans.filter((item)=>item.length>4);
// // // console.log(res);
// // let ans = str.split(' ').map((item)=>item.charAt(0).toUpperCase()+item.slice(1));
// // console.log(ans);


// let arr = [10,22,3,4];
// // console.log(...arr);
// // let copy=[...arr];
// // console.log(copy);
// arr.sort((a,b)=>a-b);
// console.log(arr);

// let str=10;
// let str ='uttam uttam';
// let ans =str.toLowerCase();
// let ans = str.toUpperCase()
// let ans = str.toString();
// console.log(str.length);

// let ans =str.trimStart()
// let ans = str.trimEnd()
// let ans = str.trim();
// let ans = str.replace('uttam','hii')
// let ans = str.replaceAll('uttam','hii')
// let ans = str.substr(0,2);
// let ans = str.substring(0,3)
// let ans = str.slice(0,2);
// let ans = str.split(' ');
// let ans = str.indexOf('t');

// console.log(ans);



// Array 
// let arr =[1,2,3,4,5];
// console.log(arr);
// arr[1]=200;
// delete arr[1];
// console.log(arr);


let arr = [10,5,6,4,2,3,0];
// let ans = arr.sort((a,b)=>a-b);
// console.log(ans);
// let ans = arr.reverse();
// arr.fill(0,1,3);
// console.log(arr);
// console.log(ans);

find 
every 
some filter map forEach call bind apply