/** E x- 10
Crie um módulo chamado "database.mjs"

Mova as classe "Database", "Parser" e "DatabaseError" para o módulo
"database.mjs"

Exporte a classe "Database"

Importe a classe "Database" no main.mjs

Mova as classes "Parser" e "DatabaseError" para seus próprios módulos
realizando o mesmo procedimento feito na classe "Database"

*/
import {Database} from "./Database";

(async function(){
  try{
    const database = new Database();
    await database.execute("create table author (id number, name string, age number, city string, state string, country string)");
  
    await Promise.all([
      database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)"),
      database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)"),
      database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)")
    ]);
  
    const result = await database.execute("select name, age from author");
    console.log(result);

  }catch(e){
    console.log(e);
  }
})();

// database.execute("create table author (id number, name string, age number, city string, state string, country string)").then(function(){
//   return Promise.all([
//     database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)"),
//     database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)"),
//     database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)")
//   ]).then(function(){
//     return database.execute("select name, age from author").then(function(resut){
//       console.log(resut);
//     });
//   });
// }).catch(function(e){
//   console.log(e.message);
// });








