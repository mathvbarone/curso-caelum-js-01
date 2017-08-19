//Sintaxe Literal -> Simples/Implicito
const escola1 = "Caelum";


// Sintaxe OOP -> Complexo/Explicito
const escola2 = new String("Caelum");

console.log(escola1, typeof escola1, escola1.constructor, escola1.toUpperCase());
console.log(escola2, typeof escola2, escola2.constructor, escola1.toUpperCase());

console.dir(String.prototype); //String API
