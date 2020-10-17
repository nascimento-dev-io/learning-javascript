// O tipo String é primitivo, imultável e é representavedo internamente pelo padrãoUnicode, codificado em UTF-16

// Declara com aspas simples, aspas duplas e acento grave (crase)

'JavaScript';
"javaScript";
`javaScript`;

// Comparação

'javaScript' === "javaScript"; // => true
'javaScript' ===  'javaScript'; // => true
'javaScript' === `javaScript`; // => true


// Declaração com Função Construtora

new String("javaScript"); // => [String: 'javaScript']
new String('javaScript'); // => [String: 'javaScript']
new String('javaScript'); // => [String: 'javaScript']
 
// Performance, usandoa construtora é mas lenta.

let counter = 0;
console.time("Peformance");
while(counter < 10000){
   "javaScript";
   counter++;
}
console.timeEnd("Peformance");

// Utilizando a construtora

let counter = 0;
console.time("Peformance");
while(counter < 10000){
   new String("javaScript");
   counter++;
}
console.timeEnd("Peformance");

// Pode se usar escape \ \ em caso onde pode ter uma má intepretação em string como no caso de querer mostra uma mensagem com ""