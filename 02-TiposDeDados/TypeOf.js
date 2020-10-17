// Os tipo de dados se dividem em Primitivos e Objetos

// Os tipos primitivos são imutaveis, ou seja seu valor não se altera.
            //Primitivos
//** NUMBER | STRING | BOOLEAN | SYMBOL | NULL | UNDERFINED */

typeof 10;              // => 'number'
typeof 'JavaScript';   // => 'string'
typeof true;          // => 'boolean'
typeof Symbol();     // => 'symbol'
typeof null;        // => 'object'
typeof underfined; // => 'underfined'

//Objetos são valores que representam uma referência em memória que pode ser alterada.
//** FUNCTION | OBJECT | ARRAYS | REGEX | DATE... */

typeof function sum( a, b){ return a + b;};   // => 'function'
typeof {name: "Linus Torvald"};  // => 'object'
typeof [1, 2, 3, 4, 5];  // => 'object'
typeof /[a-zA-Z_$]/; // => 'object'
typeof new Date(); // => 'object'