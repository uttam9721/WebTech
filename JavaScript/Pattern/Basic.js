let prompt = require('prompt-sync')();

let n = Number(prompt('Enter ur number=: '));
// var sum=0;
// for(var i =1;i<=n;i++){
//     sum=sum+i;
//     console.log(sum);
    
// }
// console.log(sum,'final answer10');


// var fact=1;
// for(var i=1;i<=n;i++){
//     fact=fact*i;
// }
// console.log(fact);

// let isPrime=true;
// for(var i=2;i<=Math.floor(n/2);i++){
//     if(n%i===0){
//         isPrime=false;
//     }
//     console.log(isPrime);
// }


// for(var i=1;i<n;i++){
//     if(n%i===0){
//         console.log(i); 
//     }
// }

// for(var i=1;i<=n;i++){
//     for(var j=1;j<=n;j++){
//         process.stdout.write('* ')
        
//     }
//     console.log();
    
// }

// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 



// for(var i =1;i<=n;i++){
//     for(var j=1;j<=i;j++){
//         process.stdout.write('* ')
//     }
//     console.log();
    
// }
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 


// for(var i=1;i<=n;i++){
//     for(var j=1;j<=i;j++){
//         process.stdout.write(j+' ')
//     }
//     console.log();
    
// }
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 



// for(var i=1;i<=n;i++){
//     for(var j=1;j<=i;j++){
//         process.stdout.write(i+' ')
//     }
//     console.log();
    
// }
// 1 
// 2 2 
// 3 3 3 
// 4 4 4 4 
// 5 5 5 5 5 


// for(var i=1;i<=n;i++){
//     let ch=65;
//     for(var j=1;j<=i;j++){
//         process.stdout.write(String.fromCharCode(ch)+' ')
//         ch++;
//     }
//     console.log();
    
// }
// A 
// A B 
// A B C 
// A B C D 
// A B C D E 



// for(var i=1;i<=n;i++){
//     for(var j=1;j<=n-i+1;j++){
//         process.stdout.write('* ')
       
//     }
//     console.log();
// }
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 



// for(var i=1;i<=n;i++){
//     for(var j=n;j>=i;j--){
//         process.stdout.write('* ')
       
//     }
//     console.log();
// }
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 


// for(var i=1;i<=n;i++){
//     for(var j=1;j<=n-i+1;j++){
//         process.stdout.write(' ');
//     }
//     for(var j=1;j<=i;j++){
//         process.stdout.write('* ')
//     }

//     console.log();
    
// }
//      *
//     * *
//    * * *
//   * * * *
//  * * * * *



for(let i=1;i<=n;i++){
    for(let j=1;j<=n-i;j++){
        process.stdout.write('  ');
    }
    for(let j=1;j<=i;j++){
        process.stdout.write('* ')
    }

    console.log();
    
}
//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * *