// As promises são objetos responsáveis por modelar comportamento assícrono, permitindo seu tratamento de uma forma mais fácil e direta.

// Para criar uma promise basta instancia la, executando a função resolve em caso de sucesso, sendo tratado por meio do then

// Em caso de fracasso, a função reject deve ser executada, sendo tratada por meio do catch

// É possivel centralizar o tratameno das promises encadeado seus retornos


function sum(a, b){
  return new Promise(function(resolve, reject){
    if(!a || !b) return reject("Invalid input") 
    setTimeout(function () {
      resolve(a + b);
    },1000);
  });
};

// sum(2, 2).then(function(a){
//   return sum(4, 4).then(function(b){
//     return sum(a, b).then(function(result){
//       console.log(result);
//     });
//   });
// }).catch(function(e){
//   console.log(e);
// });

// Podemos executar várias promises ao mesmo tempo, retornando após todas terem sucesso usando Promise.all

Promise.all([
  sum(2, 2),
  sum(4, 4)
]).then(function(values){
    const [a, b] = values;
    return sum(a, b).then(function(result){
      console.log(result);
    })
  }).catch(function(e){
    console.log(e);
  });

  // Também podemos executar várias promises ao mesmo tempo, retornando após a primeira ter sucesso usando Promise.race


