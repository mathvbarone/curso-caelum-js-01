console.log("===FUNÇÕES===");

//DECLARACAO DE FUNCAO (Nomeada)
function saudacao(nome){
  if (typeof nome != "string" ) {
      return false;
  }
  return "Boa tarde " + nome + "!";
}

//EXPRESSÃO DE FUNCAO (Anônima)
const soma = function (a, b){
  return a + b;
}
