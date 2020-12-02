// WeakMap é um objeto , similar ao Map, que permite apenas chaves do tipo Object e mantém as referências de forma fraca, sendo volátil e não iterável.

const weakmap = new WeakMap();
const objeto1 = {};
const objeto2 = {};

// set: Adiciona um par de chave e valor
weakmap.set(objeto1, "objeto1");
weakmap.set(objeto2, "objeto2");

// has: Retorna true se a chave existir 
console.log(weakmap.has(objeto1)); // ==> true

// get: Retorna o valor de uma determinada chave
console.log(weakmap.get(objeto2)); // ==> objeto2

// delete: Remove um par de chave e valor
console.log(weakmap.delete(objeto2)); // true

// 
console.log(weakmap); // WeakMap { [items unknown] }

// Para que serve o weakMap | implementação de coleção com referência fraca para que você não tenha que remover esses elementos, que com o tempo poderia gerar um gargalo.

const areas = new WeakMap(); 
const rectangle1 = {
x : 10,
y : 2
};

const rectangle2 = {
x : 5,
y : 3
};

function calculateArea(rectangle){
  if(areas.has(rectangle)){
    console.log("Using Cache...")
    return areas.get(rectangle);
  };
  const area = rectangle.x * rectangle.y;
  areas.set(rectangle, area);
  return area;
}

console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle2));
console.log(calculateArea(rectangle1));

