// Um objeto é uma coleção dinâmica de propriedades definidas por chaves, que podem ser do tipo string ou symbol, e valores que podem ser de qualquer tipo de dados,

// É possivel criar objetos de várias formas : pela notação literal, por meio de uma função construtura ou do método create da Object API.

{} // literal
new Object(); // Construtora
Object.create(null); // API

//
const book = {
  title: "Clean Code",
  author: "Robert C Martin",
  pages: 464,
  language: "English",
  available: true
};

// Shorhand notation, quando o nome de uma variavel é utilizado com o mesmo nome da chave, utiliza se apenas o nome da variavel. {title, author, pages, language, available}

// Quando se utiliza nome composto no nome da chave utiliza se aspas.

const person = {
  //name-sobrenome: "Jorge Nascimento",  - gera erro na chave // Quando utilizado numero na chave a mesma é covertida para string
  'nome-sobrenome': "Jorge Nascimento"
};

// Computar chaves em tempo de execução

const key1 = "title";
// book[key1] = "other title";

// Além do notação literal , é possivel atribuir propriedades aos objetos por meio da usa referência.

const car = {}; 
car.marca = "Ferrari"; 
car.ano = "2020"; 
car.modelo = "Spider";

// Propriedades consultadas por meio de sua referência

car.modelo; // => "Spider"

// Utiliando o for in

for (let key in car) {
  console.log(car[key]); // interando sobre as chaves do objeto
}


// Criando um cópia do objeto

const car2 = {};

for( let key in car){
  car2[key] = car[key];
}







