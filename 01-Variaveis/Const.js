// Na declaração com CONST o escopo é respeitado, não pode ser reatribuido nem redeclarado..

// console.log(pi)     // => erro: pi ainda não foi declarada.
// const pi = 3.141592;

// const pi = 3;  // não permite a redeclaração da variavel


if(true){
  const pi = 2;   // Declarado dentro do escopo não pode acessada fora.
}

console.log(pi)  // => pi is not defined