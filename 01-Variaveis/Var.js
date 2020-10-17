// Na declaração com VAR quando o escopo é interpretado a variavel é inicializada como underfined caso se tente exibi la antes da mesma ser declarada.

console.log(pi)     // pi inicializada com underfined
var pi = 3.141592;

var pi = 3;  // permite a redeclaração da variavel

console.log(pi)  // => 3


if(true){
  var pi = 2;   // Mesmo sendo declarada dentro de um escopo a variaveis é acessada fora (içamento)
}

console.log(pi)  // => 2