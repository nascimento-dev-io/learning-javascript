// No ES6, ou ECMAScript 2015, foi especificado na própria linguagem, baseado no conceito de importação e exportação

// Por meio da palavra chave export é possível exporta qualquer tipo de dado existente dentro de um módulo

// A palavra chave import faz a importação de qualquer tipo dedados exportado para dentro do módulo

// Para utilizar modules no Node.js os arquivos devem ter a extensão .mjs além de executar com a flag --experimental-modules

// É possivel utilizar um alias na importação, renomeando o que estiver sendo importado

// Por meio do * é possivel importar tudo que estiver sendo exportado em um único objeto

// Também podemos importar e exportar de forma padrão utilizando a palavra-chave default

// Não é permitifo a importação ou exportação dentro de bloco

import Circle from './Circle';


const circle = new Circle(10);
console.log(circle);
console.log(circle.area);