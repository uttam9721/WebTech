// wap to print maximum number of an array;

let arr = [10,5,6,7,4,50];
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);
