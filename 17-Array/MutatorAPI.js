// Os mutator methods quando invocados modificam o array.

/**
 * push: Adiciona um elemento no final
 * pop: Remove um elemento do final
 * unshift: Adiciona um elemento no inicio.
 * shift: Remove um elemento no inicio
 * splice: Remove, Substitui ou Adiciona um ou mais elementos em uma determinada posição.
 * sort: Ordena os elementos de acordo com a função de ordenação
 * reverse: Inverte a ordem dos elementos
 * fill: Preenche os elementos de acordo com a posição de inicio e fim 
 */

 const languages = ["Python", "C", "Java"];

 languages.push("C#"); // insere e retorna o novo length do array
 console.log(languages);  // ==> [ 'Python', 'C', 'Java', 'C#' ]

 languages.pop(); // remove o útimo elemento e o retorna
 console.log(languages); // ==> [ 'Python', 'C', 'Java' ]

 languages.unshift("JavaScript"); // Inseri o elemento no inicio e retorna o novo length
 console.log(languages); // ==> [ 'JavaScript', 'Python', 'C', 'Java' ]

 languages.shift(); // Remove o primeiro elemento e o retorna.
 console.log(languages); // ==> ["Python", "C", "Java"]

 // Splice(posição do elemento a ser removido, qtd de elementos a serem removido aparti daquele ponto)
 // Retorna um array com os elementos
languages.splice(1,1); // Remove C e retorna ["C"];
console.log(languages); // ==> [ 'Python', 'Java' ]

//Inserindo elementos com splice, quando não for remover no segundo parâmentro utiliza se 0
languages.splice(1,0,"C++", "C#"); // Partindo da posição 1 é inserido os elementos C++ e C#
console.log(languages); // ==> [ 'Python', 'C++', 'C#', 'Java' ]

//removendo os 2 elementos inseridos e colocando novamento o C
languages.splice(1, 2, "C"); // Retorna ["C++", C#]
console.log(languages); // ==> ["Python", "C", "Java"]

const languagesObj = [
  {
    name: "Python",
    year: 1991
  },
  {
    name:"C",
    year: 1972
  },
  {
    name:"Java",
    year:1995
  }
];

// Sort recebe uma função com parâmentros a e b, sendo seu retorno a - b pra ordernação crescente, b -a inverte a ordem.
languagesObj.sort(function(a, b){
  return a.year - b.year;

  // return (a.name <= b.name) ? -1 : 1; // Para ordenação por ordem alfabetica
  // return a.name.localeCompare(b.name); 
});

console.log(languagesObj); 
/*[ { name: 'C', year: 1972 },
    { name: 'Python', year: 1991 },
    { name: 'Java', year: 1995 } ] */

// reverse - inverte elementos do array
languages.reverse();
console.log(languages); // ==> ["Java", "C", "Python"]

// fill(value, pos. inicial, pos. final) - preenche com o value o intervalo passado no parâmentro

languages.fill("JavaScript",0, 2);
console.log(languages); // ==> [ 'JavaScript', 'JavaScript', 'Python' ]

