
function parent(a,b){
    let c = a+b;
    function child(m,n){
        ++c;
        let x = m*n;
        return x+c;
    }
    let total = child(10,20);
    return total;
}
let sum = parent(20,30);
document.writeln(sum)