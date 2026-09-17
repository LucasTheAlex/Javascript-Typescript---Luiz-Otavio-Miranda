//               01234567
let umaString = "Um texto";

console.log(umaString[4]);
console.log(umaString.charAt(6));
console.log(umaString.concat(" pra min"));
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m', 3));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[x]/));
console.log(umaString.replace('Um', 'Outra'));
console.log(umaString.length);
console.log(umaString.slice(3, 8));
console.log(umaString.substring(umaString.length - 5));
console.log(umaString.slice(3, 8));
console.log(umaString.split(' ', 1));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());