// São conversões implementadas por Arrays, Maps, Sets e Strings que os tornam iteráveis por meio de um protocolo de iteração

const classicLanguages = ["Fortran", "Lisp", "COBOL"];

// o for of utilizase desse protocolo
for(let language of classicLanguages){
  console.log(language);
}

//
const modernLanguages = ["Python", "Ruby", "JavaScript"];

// Utilizando o spread operator
const languages = [...classicLanguages, ...modernLanguages];
console.log(languages); // ==> [ 'Fortran', 'Lisp', 'COBOL', 'Python', 'Ruby', 'JavaScript' ]


// Além do array é possivel utilizar o protocolo de iteração dos objetos Maps, Set e String
const mapLanguages = new Map([["Fortran", 1957], ["Lisp", 1958], ["COBOL", 1959]]);

for(let [language, year] of mapLanguages){
  console.log(language, year);
}

// O mesmo pode ser utilizado com Set...e String

const language = "JavaScript";

for(let char of language){
  console.log(char);
}

// Todo iterable tem uma propriedade de chave Symbol.iterator que define o protocolo de iteração para o objeto

const iterator = languages[Symbol.iterator]();
console.log(iterator.next()); // ==> { value: 'Fortran', done: false }