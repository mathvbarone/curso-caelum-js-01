console.log("===OBJETOS===");

//OBJETO LITERAL
var carro = {}; //OBJ VAZIO

carro.modelo = "Gol"; //DOT NOTATION
carro.ano = 1997; //DOT NOTATION
carro["cor"] = "Amarelo"; //BRACKET NOTATION
carro["ligado"] = false; //BRACKET NOTATION

//DOT NOTATION
// objeto.metodo = function (){}

carro.ligar = function(){
  return carro.ligado = true;
}
carro.desligar = function(){
  return carro.ligado = false;
}


//BRACKET NOTATION
// objeto["metodo"] = function (){}

carro["buzinar"] = function(){
  return "biiiiii!";
}





console.log(carro);
