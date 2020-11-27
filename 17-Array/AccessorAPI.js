// Os accessor methods quando invocados retornam informações esepcificas sobre o array

// indexOf: Retorna a posição do primeiro elemento encontrado, caso não exista o elemento no array é retornado -1.
  const languages = ["Python", "C", "Java"];
  console.log(languages.indexOf("Python")); // ==> 0

// lastIndexOf: Retorna a posição do último elemento encontrado, caso tenha mais de um elemento igual no array
console.log(languages.lastIndexOf("Python")); // ==> 0

// includes: Retorna true se o elemento existir no array
console.log(languages.includes("JavaScript")); // ==> false

//concat: Retorna um novo array resultante da concatenação de um ou mais array.
const veiculos = ["HB20", "Opalla", "Agile"];
const motocicletas = ["Honda CB", "Kawasaki Ninja"];
// Arrays não são alterados, apenas é retornado um novo array com a concatenação
console.log(veiculos.concat(motocicletas)); // => [ 'HB20', 'Opalla', 'Agile', 'Honda CB', 'Kawasaki Ninja' ]

// slice: Retorna partes de um determinado array de acordo com a posição inicio e fim, posição fim é o valor -1, caso passe apenas o valor inicial irá retornar desse ponto até o final
console.log(veiculos.slice(1,3)); // ==> ['Opalla,'Agile']


// join: Converte o array para uma String, juntando os elementos com base em um separador.
const joinArray = veiculos.join("-"); 
console.log(joinArray); // ==> HB20-Opalla-Agile