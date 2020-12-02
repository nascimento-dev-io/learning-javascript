// Um Map é um objeto que armazena um conjunto de chaves e valores que podem ser de qualquer tipo de dados

const timeUnits = new Map([["second", 1], ["minute", 60], ["hour", 3600]]);

console.log(timeUnits); // ==> Map { 'second' => 1, 'minute' => 60, 'hour' => 3600 }

Array.from(timeUnits); // ==> [["second", 1], ["minute", 60], ["hour", 3600]]

// size: Retorna a quantidade de elementos
console.log(timeUnits.size); // ==> 3

// set: Adicionar um par de chave e valor
timeUnits.set("key", "value"); // outra forma de inserir chave e valor em um map

// forEach: itera sobre o mapa
timeUnits.forEach(function(value, key){
  console.log(key, value);
});

// has: Retorna true se a chave existir
console.log(timeUnits.has("hour")); // ==> true

// get: Retorna o valor de uma determinada chave
console.log(timeUnits.get("hour")); // 3600

// delete: Remove um par de chave e valor
console.log(timeUnits.delete("key")); // ==> true ( deleta a chave e retorna true ou false no caso da chave não existir)

// clear: remove todos os elementos
timeUnits.clear(); 
console.log(timeUnits); // ==> Map {}

// Diferença para um objeto é que as chaves do mapa podem ser de qualquer tipo.

const obj = {
  10: "Number",
  "10": "String",
  true: "Boolean",
  "true": "String"
};

// Valores inteiros e boleanos são subscritp para string
console.log(obj); // { '10': 'String', true: 'String' }

//

const map = new Map();
map.set(10, "Number");
map.set("10", "String");
map.set(true, "Boolean");
map.set("true", "String");

console.log(map); 
/* ==> Map {
  10 => 'Number',
  '10' => 'String',
  true => 'Boolean',
  'true' => 'String' } */

  // Map também não possui herança na sua crianção