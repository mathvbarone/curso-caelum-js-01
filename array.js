console.log("===ARRAY===");

//ARRAY LITERAL
const carros = ["Uno", "Gol", "Corsa", "Brasilia"];

//ARRAY OOP
const cars = new Array("Gol", "Palio", "Celta");

console.log(carros, carros.constructor);
// console.log(cars, cars.constructor);

//ARRAY API
carros.push("Vectra"); //ACRESCENTA O VECTRA
carros.unshift("Omega");//ACRESCENTA O OMEGA
carros.splice(2, 0, "Camaro"); //ACRESCENTA O CAMARO
carros.splice(4, 1, "Monza");//ACRESCENTA O OMEGA
carros.splice(1, 1); //ACRESCENTA O CAMARO
carros.pop(); //TIRA O ULTIMO
carros.shift();//TIRA O PRIMEIRO
carros.reverse(); //REVERTE A ORDEM
carros.sort(); //DEIXA EM ORDEM ALFABETICA
carros.forEach(
  function(carro, index, array){
      console.log("carro", carro, index, array);
  });

  //CALLBACK É UMA FUNCAO QUE É PASSADA COMO PARAMETRO;D

console.log(carros);
