// Métodos da APi de String

// length - Retorna o tamanho da String
// indexOf - Retorna a primeira posição encontrada do caractere passado por parâmentro
// lastIndexOf - Retonra a ultima posição encontrada do caractere passado por parâmentro
// toUpperCase - Retorna uma nova string convertendo as letras em maiusculas.
// toLowerCase - retorna uma nova string convertendo as letras em minúsculas

"JavaScript".length; // => 10
"PHP".indexOf("P"); // => 0
"PHP".lastIndexOf("P"); // => 2
"cobol".toUppercase(); // => "CABOL"
'ALGOL'.toLowerCase(); // => 'algol'


// charAt - Retorna o caractere na posição por parâmentro
// charCodeAt - Retorna o código com base na posição passado por parâmentro
// fromCharCode - Retorna um caractere com base no código passado por parâmentro.

"JavaScript".charAt(1); // => 'a'
"JavaScript".charCodeAt(1); // => 97
String.fromCharCode(97); // => 'a'


// includes - Retorna verdadeiro se a String contém a String passada por parâmentro.
// startsWith - Retorna verdadeiro se a String inicia com a String passada por parâmentro
// endsWith - Retorna verdadeiro se a String termina com a String passada por parâmentro  

"JavaScript".includes("Java"); // => true
"JavaScript ES6".startsWith("JavaScript"); // => true
"JavaScript ES6".endsWith("ES6"); // => true
"JavaScript ES6".endsWith("es6"); // => false


// localeCompare - Retorna -1 se a String passada por parâmetro for maior, 0 se for igual e 1 se for menor;
// Levando em consideração o charCode das string, ou seja, caracteres com assentos tem pesos diferentes

"javascript".localeCompare("javascript1"); // => -1
"javascript".localeCompare("javascript"); // => 0
"javascript".localeCompare("java"); // => 1


// Match - Retorna partes da String com base na RegExp passada por parâmentro
// Search - Retorna a primaira posição encontrada com base na RegExppassada por parâmentro
// Replace - Retorna uma nova string ou RegExp passado no priemiro parâmentro pelo segundo parâmentro

"C++".match(/\+/g); // => [ '+', '+' ]
"Java".search(/a/); // => 1 (index)
"JavaScript".replace("Java", "ECMA"); // => "ECMAScript"


// slice - Retorna um parte da string que esta invocando a função iniciando na posição passada no primeiro parâmentro ate a posição final passado no segundo parâmentro, caso não tenha segundo irá até o final
// split - Retorna um array contendo o resultado  da divisão da String original de acordo  com critério passado no parâmentro.
// substring - Similar ao slice, não aceita valores negativos como parâmentro e permite a inversão dos parâmentros.

"javaScript".slice(3,8); // => 'aScri' ( não inclui a posição final)
"JavaScript".slice(4); // => 'Script'
"JavaScript".slice(0, -6); // => "Java" ( pega primeiro paramentro e segundo começa a conta do final voltando as casas)
"JavaScript".slice(-6); // => "Script"
"C;C++;C#;Ruby".split(";"); // => [ 'C','C++', 'C#', 'Ruby' ]
"JavaScript".substring(0, 4); // => "Java"
"JavaScript".substring(4, 0); // => "Java"  (inverte os parÂmentros)


// concat - Retorna uma nova strinf resultante da concatenação da que esta invocando a função e da outra passada por parâmentro;
// padStart -  Completa a string com caracteres no inicio
// padEnd - Completa a string com caracteres no fim.
// repeat - repete um caractere
// trim - Elimina espaços em branco no inicio e no fim
// trimLeft - Elimina espaços em branco no inicio
// trimRight - Elima espaços no fim

"Jorge".concat(" Nascimento"); // => 'Jorge Nascimento'
"10".padStart(4,0); // => "0010"
"10".padEnd(4,0); // => "1000"
"C".concat("+".repeat(2)); // => "C++"
" Self ".trim(); // => 'Self'
" C#".trimLeft(); // => "C#"
"Java ".trimRight(); // => "Java"