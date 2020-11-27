// Um Array é apenas um objeto que oferece operações para acessar e manipular suas propriedades.

// Formas de criar
//const languages = new Array("Python", "C", "Java");   - Com a função construtora
const languages = ["Python", "C", "Java"]; // Criando e iniciando o Array
languages[languages.length] = "JavaScript"; // Insrindo um valor no final do array pegando seu indice.

// É possivel iniciar um array passando apenas um Number para a função construtora

const numbers = new Array(10); // Array com 10 possições vazias

// A propriedade length indica a quantidade de elementos que existem dentro do array (Os elementos vazios sao considerados o length, caso o array tenha elementos com indices com espaços com elementos vazios esses são comtabilizado no length)

console.log(languages.length); // ==> 4


 
