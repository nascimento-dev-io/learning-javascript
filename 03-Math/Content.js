// Math API - Objeto global que contém constante matamática e métodos para realização de operações de operações envolvendo números. 

// Constantes

Math.E; // => 2.718281828459045
Math.LN10; // => 2.302585092994046
Math.LN2; // => 0.6931471805599453
Math.LOG10E; // => 1.4426950408889634
Math.PI // => 3.141592653589793
Math.SQRT2; // => 1.4142135623730951
Math.SQRT1_2; // => 0.7071067811865476

// Operações de arredondamentos

// Math.abs - converte o sinal de um número para positivo.
// ceil - Arredonda o número para cima.
// floor - Arrendonda o número para baixo.
// round - Arrendonda o número para cima se a parte decimal for de 5 a 9 e para  baixo se for  de 0 a 4;
// sign - Retorna 1 se o número for positivo e -1 se for negativo.
// trunc - Elimine a parte decimal do número ,tornando-o um inteiro

Math.abs(10); // =>10
Math.abs(-10); // => 10
Math.ceil(1.1); // => 2
Math.ceil(-1.1); // => -1
Math.floor(9.9); // => 9
Math.floor(-9.9); // => 10
Math.round(4.5); // => 5
Math.round(-4.5); // => -4
Math.sign(5); // => 1
Math.sign(-5); // => -1
Math.trunc(2.3); // => 2
Math.trunc(-2.3); // => -2

// Operações aritméticas / trigonometria 

// cbrt - Retorna a raiz cúbica do número
// cos - Retorna o coseno de um ângulo
// exp - Retorna E elevado a um expoente
// hypot - Retorna a raiz quadrada dos quadrado dos números.
// log - retorna o logaritmo do número em base natural.
// pow - Retorna o número elevado a um determinado expoente.
// sin - Retorna o seno de um ângulo
// sqrt - Retorna a raiz quadrada do número.
// tan - Retorna a tangente de um ângulo

Math.cbrt(8); // => 2
Math.cos(Math.PI/3); // => 0.5000000000000001
Math.exp(1); // => 2.718281828459045
Math.hypot(3,4); // => 5
Math.log(1); // => 0
Math.pow(2, 10); // => 1024
Math.sin(Math.PI / 2); // => 1
Math.sqrt(4); // => 2
Math.tan(Math.PI/4); // => 0.9

// min / max / randon

// min - Retorna o menor número passado por parâmentro.
// max - Retorna o maior número passado por parâmentro.
// randon - Retorna um número randômico entre 0 e , não incluindo o 1;

Math.min(1,2,3,4,5,6); // => 1
Math.max(1,2,3,4,5,6); // => 6
Math.floor(Math.random() * 1000);