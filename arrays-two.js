var array = "Ned Jon Robb Bran Rickon".split(' ');

console.log(array.toString());
console.log(array.join(' | '));

array.push("Sansa");
array.unshift("Sansa");

console.log(array);

var elemento = array.pop();

console.log(elemento);