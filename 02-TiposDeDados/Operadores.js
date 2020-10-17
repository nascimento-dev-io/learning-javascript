// Aritmeticos + - / * %

2 + 2; // => 4
5 - 3; // => 2
4 * 5; // => 20
9 / 3; // => 3
7 % 2; // => 1

// Atribuição +=, -=, *=, /= e %=

let resultado = 10;

resultado += 2; // => 12
resultado -= 2; // => 8
resultado *= 2; // => 20
resultado /= 2; // => 5
resultado %= 2; // => 0

// Operadores Incremento e Decremento ++ | --

resultado = 10;
resultado--; // => 9
resultado++; // => 10

// Operadores binários (bit a bit) |(or) &(and) ^(xor) ~(not) <<(shift - deslocamento de bits)>> >>>(shift com mudança de sinal) - operações são realizada com 32bits 

4 | 3; /* => 7 ( Operação resultante de comparação em escala binária) */ 
(4).toString(2).padStart(32,0); // convertendo o valor em binário com 32bits
(3).toString(2).padStart(32,0); // é feita a comparação bit a bit do operador

3 & 1; // => 1
5 ^ 2; // => 7
~2;    // => -3
4 << 2; // => 16 
128 >> 1; // => 64
-2 >>> 1; // => 2147483647 



