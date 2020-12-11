// Os gnerators tornam possivel pausar a execução de uma determinada função, permitindo a utilização do event loop de forma cooperativa.

// O retorno do método next é um objeto contendo value e done, seguindo o protocolo de iteração.

// Por meio do yield é possivel retornar valores de forma similar ao return

// Além disso , também é possivel enviar um valor para dentro do generator por meio do método next

// O método return encerra o generator podendo retornar um valor especifico

// O método throw lança uma excessão dentro do generator interropendo o fluxo de execução caso a excessão não tenha sido tratadaadequadamente

function* forever(){ // criando um generator
  let value = 1;
  while(true){
    try {
      const reset = yield value++;
      if(reset) value = 1;      
    } catch (e) {
      console.log(e);
    }
   
  }
};


function today(){
  let date = new Date()
  console.log(date);
};

const foreverGenerator = forever(); // ==> {}
typeof foreverGenerator; // ==> object
console.log(Object.getOwnPropertyNames(foreverGenerator.__proto__.__proto__)); // ==> [ 'constructor', 'next', 'return', 'throw' ]

// Os generators utilizam o metodo next para iterar sobre os valores disponiveis durante a execução da função.

// AO encontrar um yield, a execução da função é pausada até o método next ser invocado novamente
console.log(foreverGenerator.next()); // execura a função - retorna : { value: 1, done: false }
today();
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
console.log(foreverGenerator.next(true));
console.log(foreverGenerator.return("End")); // retorna underfined ou um valor especifico
// console.log(foreverGenerator.throw('error'));
// console.log(foreverGenerator.next()); 

// Como os generators implementam o protocolo de iteração é possivel utiliza los com Symbol.iterator de forma simples

function createIterable(...array){
  return {
    *[Symbol.iterator](){
      let i = 0;
      while(i < array.length){
        yield array[i++];
      }
    }
  };
}

const languages = createIterable("Fortran", " Lisp", "COBOL");
for ( let language of languages){
  console.log(language);
}


// Além disso, é possivel utilizar generators para sicronizar chamadas assicronas de forma similar ao async/await



