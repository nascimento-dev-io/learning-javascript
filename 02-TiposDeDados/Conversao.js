// Forma mas simples de conversão de um número é chamando a função construtora Number

Number('10');
Number('0b10');
Number('0o10');
Number('0xFF');

Number('JavaScript'); //=> NaN

// Conversão com operadores númerico - Cuidado ! Nem todos operadores realiza a conversão para número. 

~~"10";
+'10';
'10' - 0;
'10' * 1;
'10' / 1;

// Utilizando o toString() para converter número em outras bases

(0xA).toString(10); // => '10'
(0b1010).toString(16) // => 'a'
(010).toString(2); // => '1000'
(10).toString(8); // => '12'


//Utilizando o parseInt, caso não seja decimal deve se informa de qual base o número estar.

parseInt('10', 10); // => 10
parseInt('9.9', 10); // => 9
parseInt('A', 16); // => 10
parseInt('11', 2); // => 3

// Utilizando o parseFloat - aconverte apenas números decimais

parseFloat('10'); // => 10
parseFloat('2.5'); // => 2.5
parseFloat('0xFF'); // => 0  (ignora as letras)
parseFloat('0b10') // => 0   (ignora as letras)

// IEE754 - Define o padrão de númeração em 64bits / Ocasiona anormalidade em determinadas situações

0.1 + 0.3; // => 0.30000000000000004
666.7 - 666.6; // => 0.10000000000002274
33.33* 3; // => 99.89999999999999
12.2 / 0.1 // => 121.99999999999999

// Infinity - positivo ou negativo | é retornado quando uma operação ultrassa os limites do tipo Number.

1 / 0; // => Infinity
Math.pow(10, 1000); // => Infinity
Number.MAX_VALUE * 2 ; // => Infinity
-Number.MAX_VALUE * 2; // => -Infinity
Math.log(0); // => -Infinity

// NaN - Retornado quando realizamos uma operação númerica onde não é possivel determinar o resultado.

10 * "JavaScript"; // => NaN
0/0; // => NaN
Math.sqrt(-9); // => NaN
Math.log(-1); // => NaN
parseFloat("JavaScript"); // => NaN

NaN === NaN; // false
isNaN(NaN); // true