// Na declaração com LET o escopo é respeitado, pode ser reatribuida mas não redeclarada.

// console.log(pi)     // => erro: pi ainda não foi declarada.
// let pi = 3.141592;

// let pi = 3;  // não permite a redeclaração da variavel


if(true){
  let pi = 2;   // Declarado dentro do escopo não pode acessada fora.
}

console.log(pi)  // => pi is not defined