
var arr = [10,20,10,20,40,40,100];
arr.sort((a,b)=>a-b);

for (var i = 0; i < arr.length; i++) {
    let count = 0;
    for (var j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }
    if (count === 1) { 
        console.log("Unique:", arr[i]);
    }
}

