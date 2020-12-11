// O Async/Await facilita a interação com chamadas assícronas, aguardando o retorno de uma determinada promise

// function sum (a, b, callback){
//   setTimeout(function(){
//     callback(a + b);
//   }, 1000);
// };

//  sum(2, 2, function(result){
//   console.log(result);
// });

// Promises

function sum (a, b){
  return new Promise(function(resolve, reject){
    if(!a || !b) return reject("Invalid Input")
    setTimeout(function(){
      resolve(a + b);
    }, 1000);
  }); 
};

sum(2, 2).then(function(a){
  sum(4, 4).then(function(b){
    sum(a, b).then(function(result){
      console.log(result);
    });
  });  
});

// Async/Await

// Para tratar possiveis excessões associadas as chamadas assícronas é possivel utilizar um bloco try/catch

// (async function(){
//   try{
//     const a = await sum(2, 2);
//     const b = await sum(4, 4);
//     const result = await sum(a, b);
//     console.log(result);
//   } catch(e){
//     console.log(e);
//   }
// })();

// iterando sobre funções assicronas

// è possivel usar o bloco for-await-of para iterar sobre um iterator de promises

// (async function(){
//   try{
//     const functions = [
//       sum(2, 2),
//       sum(4, 4)
//     ];
//     const results = [];
//     for(let fn of functions){
//       const result = await fn;
//       results.push(result);
//     }
//     const [a, b] = results;
//     const result = await sum(a, b);
//     console.log(result);
//   } catch(e){
//     console.log(e);
//   }
// })();

// for-await-of

(async function(){
  try{
    const functions = [
      sum(2, 2),
      sum(4, 4)
    ];
    const results = [];
    for await (let result of functions){
      results.push(result);
    }
    const [a, b] = results;
    const result = await sum(a, b);
    console.log(result);
  } catch(e){
    console.log(e);
  }
})();








