// O principal objetivo de herança é permitir o reuso de código por meio do compartilhamento de propriedades entre objetos , evitando duplicação.

// Na linguagem Javascipt a herança  é realizada entre objetos e não classes

// A propriedade __proto__ é uma referência para o prototipo do objeto

const functionalLanguage = {
  paradigm: "Functional"
};

const scheme = {
  name: "Scheme",
  year: 1975,
   // paradigm: "Functional" ,    - propriedade que se repete.
  __proto__: functionalLanguage
};

const javascript = {
  name: "Javascript",
  yaer: 1995,
  // paradigm: "Functional"
  __proto__: functionalLanguage
};

javascript.paradigm; // ==> Functional

// Quando a propriedade não é encontrada no objeto atual esse sera busca na sua cadeia de prototipos, chegando ate object que tem __proto__ null.


// O metodo hasOwnProperty pode ser utilizado para determinar se uma propriedade pertece ao objeto.

// ==> retorna true or false para propriedades que pertece ao objeto
for ( let key in scheme){
    console.log(key, scheme.hasOwnProperty(key));  
}

// Os metodos Object.setPrototypeOf e Object.getPrototypeOf permite a interação com prototipo do objeto

Object.setPrototypeOf(objeto, prototipo); // setando prototipo atraves da API do Object 

Object.getPrototypeOf(javascript); // retorna o seu prototipo
// Com o metodo Object.create é possivel criar um objeto passando seu prorotipo como parâmentro

const scheme = Object.create(functionalLanguage);
scheme.name = "Scheme";
scheme.year = 1975; 


// Sem prototipo o objeto perde algumas operações importantes ( metodo como hasOwnProperty)

// Caso a mesma propriedade exista no objeto e no seu protoptipo , a propriedade do prototipo é retornada, fazendo sombraa proriedadedo prototipo.







