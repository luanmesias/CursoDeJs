let umaString = "O rato roeu a rouba do rei de roma.";

console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('o', 8));
console.log(umaString.match(/[a-z]/g));

console.log(umaString.replace(/r/g, '#'));
console.log(umaString.length);
console.log(umaString.slice(2, 6));
console.log(umaString.slice(32));
console.log(umaString.slice(-5));
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length -5, umaString.length -1));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());