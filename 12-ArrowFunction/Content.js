// As Arrow Functions tem uma abordagem mais simples e direta para escrever uma função e podem melhorar a legibilidade do código em diversas situações.

// Com a arrow function se retira a palavra function e apos os parantese se utiliza o =>, podendo também retirar as chaves e nesse caso será realizado um return sem o uso da palavra.
const sum = (a, b) => a + b;
// {
//   return a + b;
// };

const subtract = (a, b) => a - b;
// {
//   return a - b;
// };

// Pegando uma função por parâmentro e retornando uma função pegando os parâmetros da função passada na função interna e retornando-a.

// Cuidado com a legibilidade do código, outra opção das arrow function é quando a função possui apenas um parâmentro não precisa utilizar os parenteses
const calculate = fn => (a, b) => fn(a, b);
// (fn) =>{
//   return (a, b) =>{
//     return fn(a, b);
//   };
// };

calculate(sum)(2, 3); // ==> 5

// Arrow functions não possuem as suas próprias variáveis this e arguments

const person = {
  name:"James Gosling",
  city: "Alberta",
  year: 1955,
  getAge: () =>{
    return (new Date()).getFullYear - this.year;  // retorna NaN
  }
};

const sum = () =>{
  let total = 0;

  for(let argument in arguments){
    total += arguments[argument];
  }
  return total;
};

sum(a, 2, 3, 4, 5); // Gera erro devido a função anomina não gerar o objeto arguments


// ArrowFunction em função fábrica.
const createPerson = (name, city, year) => ({name, city, year});

const person = createPerson("Alan Kay", "Springfield", 1940);



