// Um Set é um objeto que armazena elementos únicos, que podem ser de qualquer tipo de dados.

const charsets = new Set(["ASCII", "ISO-8859-1", "UTF-8"]); // Set {"ASCII", "ISO-8859-1", "UTF-8"}

Array.from(charsets); // ==> ["ASCII", "ISO-8859-1", "UTF-8"]

// size: Retorna a quantidade de elementos
console.log(charsets.size); // ==> 3

// add: Adiciona um elemento
charsets.add("new value");

// forEach: itera sobre o set
charsets.forEach(function(charset){
  console.log(charset);
});

// has: Retorna true se o elemento existir
console.log(charsets.has("ASCII")); // true

// delte: Remove um elemento
charsets.delete("new value"); // true

// clear: Remove todos elementos
console.log(charsets);
charsets.clear();
console.log(charsets);


// Diferença de um Set para um Array : Set não permite elemento duplicado.
const array = ["10", "10", "10"]

const set = new Set(array);

console.log(set); // ==> Set { '10' }

