// Na linguagem JS , toda função permite a utilização de variaveis que não foram declaradas e nem passada s por parâmentro.

// Sempre que um variavel é referenciado que não existe dentro da função ela é buscado nos escopos das funções externas.(scope chain)

const v = 10;

function fn(){
  console.log(v);
};

fn(); // ==> 10

// O problema é que como as funções são de primeira classe, dependendo da situação poderia existir uma ambiguidade e isso foi resolvido com o conceito de closures

function fn(){
  const v = 10; // free variable
  return function(){
    console.log(v);
  };
};
const fn1 = fn();
const v = 100;

fn1(); // ==> 10

// Closure é uma função com um scope chain estático que é definida no momento em que a função é criada , por isso, todas as funções na linguagem JavaScript são closures

//ex. 02

const v1 = 10;
function fn1(){
  console.log(v1);
};

function fn2(fn1){
  const v1 = 100;
  fn1();
};

fn2(fn1); // ==> 10  - Devido o spoce chain estático o valor de v1 continua sendo 10 pois foi criado assim no momento da função fn1.

// Apesar de estático , o scope chain faz referência para objetos que estão na memória e podem ser compartilhados por mais de uma função.

function fnFactory(){
  let v = 10;

  return {
    m1(){
      console.log(++v);
    },
    m2(){
      console.log(--v);
    }
  };
};

const objeto = fnFactory();

// Referência do objeto compartilhada
objeto.m1(); // ==> 11
objeto.m2(); // ==> 10

//
// const obj1 = {};

// for(v = 0; v < 3; v++){
//   obj1[v] = function(){
//     console.log(v);
//   }
// };

// // A saida é 3 devido no momento que é o método é chamado fora do laço a variavel vale 3;
// obj1[0](); // ==> 3
// obj1[1](); // ==> 3
// obj1[2](); // ==> 3

// Resolvendo a questão anterior
const obj = {};

// Criando uma função auto invocada e dentro dela outra função pegando como parâmentro a variavel v no estado atual do laço.
for(var v = 0; v < 3; v++){
  obj[v] = (function(v2){
    return function(){
      console.log(v2);
    }
  })(v1);
};

obj[0](); // ==> 1
obj[1](); // ==> 2
obj[2](); // ==> 3

/*
for(var v = 0; v < 3; v++){
  obj[v]=(function(){
    console.log(this.v2);
  }).bind({v2:v1});
}
*/
