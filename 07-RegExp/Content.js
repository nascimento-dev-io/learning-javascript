// As expresões regulares são estruturas formadas por uma sequência de carcteres que especificam  um padrão formal que servem para validar, extrair ou mesmo substituir caracteres dentro de um string

let regExp = /john@gmail.com/;  // new RegExp(/john@gmail.com/)
let result = regExp.test('john@gmail.com'); // => true - padrão identificado

regExp.exec("john@gmail.com"); // retorna um array com retorno index e input 

/*[ 'john@gmail.com',
  index: 0,
  input: 'john@gmail.com',
  groups: undefined ] */


                // Meta caracteres
  // . - representa qualquer caractere
  // \ - A barra é utilizada antes de caracteres especias com o objetivo de escapa-los.
  // ^ - inicia com um determinado caractere
  // $ - Finalizado com um determinado caractere 

  // Grupos de caracteres

  // [abc] - Aceita qualquer caractere dentro do grupo. nesse caso a, b, c
  //[^abc] - Não aceita qualquer caractere dentro do grupo , nesse caso a, b, c
  // [0-9] - Aceita qualquer caractere entre 0 e 9 
  // [^0-9] - Não aceita qualquer caractere entre 0 e 9

  // Quantificadores

  // Os quantificadores podem ser aplicados a caracteres, grupos, conjuntos ou metacarcteres

  // {n} - Qantifica um número especifico
  // {n,} - Quantifica um número minimo
  // {n,m} - Quantifica um número minimo e máximo
  // ? - Zero ou um
  // * - Zero ou mais
  // + - Um ou mais

   // Inicio pode ter uma ou mias letras, trantando o . escapando para que não se comporte como caractere especial.

   regExp = /^[a-z]+@gmail\.com$/;

   // Metacaracteres

   // \w - Representa o conjunto [a-zA-Z0-9_]
   // \W - Representa o conjunto [^a-zA-Z0-9_]
   // \d - Representa o conjunto [0-9]
   // \D - Representa o conjunto [^0-9]
   // \s - Representa um espaçõ em branco
   // \S - Representa um não espaço em branco
   // \n - Representa uma quebra de linha
   // \t - Representa um tab

   // Criando um expressão que trata a expressão reguar para o email criando também o grupo para os casos de .com, .com.br ...
   regExp = /^\w+@\w+(\.\w{2,3})+$/;

   // Grupo de captura 
   // () - Determina um grupo de captura para realizar a extração de valores de uma determina string
   
   regExp = /^(\w+)@\w+(\.\w{2,3})+$/; // para retornar o nome de usuario com o .exec no indice [1]

   




