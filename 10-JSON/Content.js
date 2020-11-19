//JSON ou JavaScript Object Notation, é um formato de intercâmbio de dados , derivado da linguagem javascript que foi descoberto por Douglas Crockford e padronizado pela ECMA-404

// JSON suporta os tipos de dados | Number | String | Boolean | Object | Array | null

// O método JSON.stringify converte um determinado tipo de dado para JSON.

JSON.stringify("JavaScript"); // ==> ' "JavaScript"'

JSON.stringify({name: "Self", paradigm: "OO"}); // => '{"name":"Self","paradigm":"OO"}'

//O método JSON.parse converte um JSON para um determinado tipo de dado.

JSON.parse('"JavaScript"'); // => "JavaScript"

JSON.parse('{"name":"Self","paradigm": "OO"}'); // ==> {name: "Self", paradigm: "OO"}


// Comparando objeto aparti de sua conversão para JSON

const book = {
  name: "Refactoring",
  author: "Martin Fowler"
};

const book1 = {
  name: "Refactoring",
  author: "Martin Fowler"
};

JSON.stringify(book) === JSON.stringify(book1); // ==> true

// Clonando referência

const book2 = JSON.parse(JSON.stringify(book1));


