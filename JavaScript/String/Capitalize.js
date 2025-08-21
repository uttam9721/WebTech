let str = "i love javascript";
let cap = str
  .split(" ")
  .map(e => e.charAt(0).toUpperCase() + e.slice(1))
  .join(" ");

console.log(cap); // "I Love Javascript"
