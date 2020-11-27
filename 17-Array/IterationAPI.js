// Os iteration methods quando invocados iteram sobre os elementos do array

/**
 * forEach: Executa a função passada por parâmentro para cada elemento.
 * filter: Retorna um novo array contendo somente os elementos que retornaram true na função passada por parâmentro.
 * find: Retorna o primeiro elemento que retornou true na função passada por parâmentro.
 * some: Retorna true se um ou mais elementos retornaram true na função passada por parâmentro.
 * every: Retorna true se todos elementos retornaram true na função passada por parâmentro.
 * map: Retorna um novo array com base no retorno da função passada por parâmentro.
 * reduce: Retorna um valor com base no retorno da função passada por parâmentro.   
 */


 // forEach: Executa a função passada por parâmentro para cada elemento.
 const frameworks = ["VueJS", "NextJS", "AngularJS"];
 frameworks.forEach((framework) => console.log(framework)); // ==> "VueJS", "NextJS", "AngularJS"

 // filter: Retorna um novo array contendo somente os elementos que retornaram true na função passada por parâmentro.
 const frameworks = [
   {
     name: "AngularJS",
     contributors: 1548
   },
   {
     name: "EmberJS",
     contributors: 746
   },
   {
     name: "VueJS",
     contributors: 240
   }
 ];

const resultFilter = frameworks.filter((framework)=>{
  return framework.contributors < 1000;
});

console.log(resultFilter);
// ==>
/**
 * [ { name: 'EmberJS', contributors: 746 },
     { name: 'VueJS', contributors: 240 } ]
 */

 // find: Retorna o primeiro elemento que retornou true na função passada por parâmentro.

 const resultFind = frameworks.find((framework) =>{
  return framework.name === "VueJS";
 }); 

 console.log(resultFind); // ==> { name: 'VueJS', contributors: 240 }

 // some: Retorna true se um ou mais elementos retornaram true na função passada por parâmentro.
 const resultSome = frameworks.some(function(framework){
   return framework.name === "AngularJS";
 });

 console.log(resultSome); // ==> true

 // every: Retorna true se todos elementos retornaram true na função passada por parâmentro.

 const resultEvery = frameworks.every(function(framework){
  return framework.contributors > 1000;
});

console.log(resultEvery); // ==> false

// map: Retorna um novo array com base no retorno da função passada por parâmentro.

const resultMap = frameworks.map((framework) => framework.name);

console.log(resultMap); // ==> ["AngulaJS", "EmberJS", "VueJS"]

// reduce: Retorna um valor com base no retorno da função passada por parâmentro.
// ( função recebe 2 parâmentros o total e o elemento, o segundo parâmentro do reduce é a inicialização do total)

const resultReduce = frameworks.reduce(function(total, framework){
  return total + framework.contributors;
},0);

console.log(resultReduce); // ==> 2534                          

