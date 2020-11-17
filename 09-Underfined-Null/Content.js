// O tipo Undefined é retornado caso a chave não seja encontrada.

const book = {
  title: "JavaScript",
  author: "Nascimento"
};

book.pages;  // ==> undefined

// Diferença entre underfined e null, null indica a ausencia de valor enquanto undefined indica que aquela propriedade nõ existe. 

// É possivel consultar uma determida chave por meio do operador in 

"title" in book; // => true


// Não utilizar underfin ou null para apaga uma propriedade

// As propriedade s de um objeto podem ser apagadas por meio do operaor delete;

delete book.author; // ["author"] => as duas formas deletam uma propriedade



