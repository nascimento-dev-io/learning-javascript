// O Execution Context é o ambiente onde o código é executado, sendo composto pelo variable object, scope chain e this.

// Dentro de uma função é possivel acessar variaveis existente s fora dela, por meio do scope chain

// Variavel criada fora do escopo da função.
const v = 10;
// Função consegue acessar a variavel externa, mesmo sendo uma função dentro de outra.
const f = function(){
  //Não é possivel acessar de fora uma variavel que foi declarada dentro de uma função.
  const v2 = 15;
  return function(){
    // Variaveis internas tem prioridade sobre as externas devido a cadeia de prototiposs
    console.log(v);
  }
};
console.log(v2); // erroreference: v2 is not defined.
f()(); // ==> 10 

// Toda função tem uma variavel this que contém a referência para o objeto responsável pela sua invocação.

const objeto = {
  name: "Jorge",
  getName(){
    // this da função interna não referência o objeto criado, sendo assim é criado uma variavel 'that' par pea essa referência
    const that = this; // Caso  não utilize arrow function

    const fn = () => { // substituindo por arrow function funciona devido ela não ter o this
      return this.name;
    }
    return fn();
  }
};
objeto.getName();


