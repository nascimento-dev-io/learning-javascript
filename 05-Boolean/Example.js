// Utilizando function

function generatorSerial(max){
  return Math.floor(Math.random * max);
}

console.lof(generatorSerial()); 
// No caso de não passar parametro ele gera undefined e retorna um NaN ( sem e gerar excessão)

function generatorSerial(max){
  max = max || 1000
  return Math.floor(Math.random * max);
}

// Validação da entrada caso seja undefined

// Operador ternário  (expressão) ? true: false

(10) ? 'good' : 'bad'; // => 'good'
(0) ?  'good' : 'bad'; // => 'bad'