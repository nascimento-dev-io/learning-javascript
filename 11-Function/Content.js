// Um função é um objeto que contém código executável


// function declaration
function sum(a, b){
  return a + b;
};

//function expression
const sum = function(a,b){
  return a + b;
};

// Na function declaration a mesma é içada para o inicio do contexto de execução sendo assim ela pode ser chamada antes de declarada.

// Na linguagem JavaScript,as funções são de primeira classe, ou seja, podem ser atribuida a uma variavel, passadas por parâmentro ou serem retornada de uma outra função.

// Função que retorna outra função
// Para ter acesso a a função interna é necessário realizar uma dupla invocação calculator()()
const calculator = function(fn){
  return function(a, b){
    return fn(a, b);   
  };
};

calculator(sum)(2,2); // ==> 4

//É possivel invocar uma função com menos ou mais parâmentros, não necessariamente seguindo o que esta declarado, no caso de passar menos parâmentros o valor enviado é undefined e é retornando um NaN, caso seja passada mais parâmentros do que o declarado esses seráo ignorados.

// É possivel também definir valores padrão para o parâmentro

const subtract = function( a = 0, b = 2 ){
  return a - b; 
}

subtract(5); // => 3


// Por meio da variavel implícita arguments é possivel acessar os parâmentros da função invocada  

const argsFunction = function(){
  return arguments;
};

// retorna um objeto com indice e valor passado.
argsFunction(1, 2, 3, 4, 5); // => { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

// Também é possivel acessar os parâmentros da função invocada por meio do rest paramenter
// Retorna um array com os parâmentros passados, deve ser usado como último da lista de parâmentros

const restFunction = function(...numbers){
  return numbers;
}
restFunction(1, 2, 3, 4, 5);  // => [ 1, 2, 3, 4, 5 ]





