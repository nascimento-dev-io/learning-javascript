// O método Object.assign faz a cópia das propriedades dos objetos passados por parâmentro para o objeto alvo, que é retornado.

const javascript = Object.create({});

Object.assign(javascript,{
  name: "JavaScript",
  year: 1995,
  paradigm: "OO and Functional"
}, {
  author: "Brendan Eich",
  influenceBy: "Java, Scheme and Self"
});

// O metodo Object.keys retorna as chaves das propriedades do objeto

Object.keys(javascript); // retorna um array com as chaves
// ==> [ 'name', 'year', 'paradigm', 'author', 'influenceBy' ]

// O método Object.value retorna os valores das propriedades

Object.values(javascript); // retorna um array com os valores

// ==> [ 'JavaScript', 1995,'OO and Functional', 'Brendan Eich','Java, Scheme and Self' ]

// O metodo Object.entries retorna as propriedades do objeto em pares de chave e valor

Object.entries(javascript); // retorna um array com arrays com chave e valor

// ==> [ [ 'name', 'JavaScript' ], [ 'year', 1995 ],  [ 'paradigm', 'OO and Functional' ],[ 'author', 'Brendan Eich' ],[ 'influenceBy', 'Java, Scheme and Self' ] ]


// O método Object.is compara dois objetos, considerando os tipos de dados, de forma similiar ao operador === 

Object.is(javascript, javascript); // ==> true  ( comparação de referência)


              // defineProperty

// configurable - Permite que uma determinada propriedade seja apagada.

// enumerable - permite que uma determinada propriedade seja enumerada.

// value - Define o valor de uma determinada propriedade.

// whiteble - Permite que uma deteerminada propriedade tenha seu valor modificado

const JavaScript = {};

Object.defineProperty(JavaScript, "name", {
  // Caso apenas o value seja especificada as demais são consideradas falsa (enumerable | whiteble | configurable)
  value: "JavaScript",  
  enumerable: true, // Permite a exibição da propriedade
  writable: true,  // Permite a alteração do valor da propriedade
  configurable: true  // Permite que a propriedade seja apagada
});

// O interpretador não gera erro em caso essas opções esteja falso, as alteração são apenas ignoradas.





    // preventExtensions, seal, freeze

// preventExtensions - Impede que o objeto tenha novas propriedades, mas permite modificar ou remover as propriedades existentes

// seal - Impede que o objeto tenha novas propriedades ou apague propriedades existentes, mas permite modificar propriedades existentes

// freeze - Impede que o objeto tenha novas propriedades apague ou modifique propriedades existentes

Object.preventExtensions(JavaScript); // Objeto não pode ter novas propriedades.
Object.isExtensible(JavaScript); // ==> false

Object.seal(JavaScript); // Não permite novas propriedade ou deletar propriedade existentes;
Object.isSealed(JavaScript); // ==> false

Object.freeze(JavaScript); // Não permite novas propriedade, apaga-las ou modifica-las.
Object.isFrozen(JavaScript); // ==> false

// Não é possivel alterar o prototipo do objeto, se torna imultavel
