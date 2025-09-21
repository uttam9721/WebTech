// wap to print minimum number of an array;
let arr = [10,5,6,7,4,50];
let min=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log(min);
