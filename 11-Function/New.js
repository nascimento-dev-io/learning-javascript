// New permite que crie objetos tanto das funções construtoras quanto das classes.

// Criando objetos que possuem propriedades semelhantes
const person = {
  name: "Linus Torvalds",
  city: "Helsinki",
  year: 1969,
  getAge(){
    return (new Date()).getFullYear() - this.year;
  }
};

const person1 = {
  name: "Bill Gates",
  city: "Seattle",
  year:1955,
  getAge(){
    return(new Date()).getFullYear() - this.year;
  }
}

// Reaproveitando propriedades em conubs (getAge()) ... 
const personPrototype = {
  getAge(){
    return (new Date()).getFullYear() - this.year;
  }
};

// Criando uma função fabrica para reaproveitar código, função essa que retorna um objeto.
const createPerson  = function(name, city, year){
  const person = {
    // Shorthand notation
    name,
    city,
    year,
    // getAge(){
    //   return (new Date()).getFullYear - this.year;
    // }
  };
  Object.setPrototypeOf(person, personPrototype)
  return person;
};

const createPerson = createPerson("Linus Torvalds", "Helsinki", 1965);


// A função construtora retorna um novo objeto ao ser invocada por meio do operador new.
const Person = function(name, city, year){
  this.name = name;
  this.city = city;
  this.year = year;
  // this.getAge = function(){
  //   return(new Date()).getFullYear() - this.year;
  // };
};
//Toda função tem uma propriedade chamada prototype, que é vinculada ao __proto__ do objeto criado pelo operador new. ( so as funções tem e so s funções construtoras usam).  
Person.prototype.getAge = function(){
  return(new Date()).getFullYear() - this.year;
};

const newPerson = new Person("Bill Gates", "Seattle", 1955)

// Criando o algoritmo de new

const _new = function(fn, ...params){
  const objeto = {};
  Object.setPrototypeOf(objeto, fn.prototype);
  fn.apply(objeto, params);
  return objeto;
};

const newPerson2 = _new(Person, "Jorge Nascimento", "João Pessoa", 1989);

// Nunca esqueça de usar new para função construtora.








