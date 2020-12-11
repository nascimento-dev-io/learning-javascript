// Ex-11

/*
Envolva o código da função execute em um setTimeout com 1000ms.

Crie uma promise e retorne-a.

Execute o comando "create table".

Após a execução de "create table", utilize a função Promise.all para executar os 3
comandos "insert".

Após a execução dos 3 comandos "insert", faça um select retornando as colunas
"name" e "author".

*/

/*Ex - 12
Crie uma função utilizando async.

Invoque cada uma das funções execute utilizando await incluindo o Promise.all.

Envolva as chamadas em um bloco try/catch para tratar as exceções.

*/ 

import {Parser} from "./Parser";
import {DatabaseError} from "./DatabaseError"

export class Database {
  constructor(){
    this.tables = {},
    this.parser = new Parser();     
  }
  createTable(parsedStatement){    
    let [,tableName, columns] = parsedStatement;
    this.tables[tableName] = {
      columns:{},
      data: []
    };
    columns = columns.split(", ");
    
    for(let column of columns){
      column = column.trim().split(" ");
      const [name, type] = column;
      this.tables[tableName].columns[name] = type; 
    }
  }

  insert(parsedStatement){
    let [,tableName, columns, values] = parsedStatement;
    columns = columns.split(", ");
    values = values.split(", ");
    let row = {};
    for(let i = 0; i < columns.length; i++){
      const column = columns[i];
      const value = values[i];

      row[column] = value;
    }
    this.tables[tableName].data.push(row);

  }

  select(parsedStatement){
    let [,columns, tableName, whereClause] = parsedStatement;
    columns = columns.split(", ");
    let rows = this.tables[tableName].data;

    if(whereClause){
      const [columnWhere, valueWhere] = whereClause.split(" = ");
      rows = rows.filter(function(row){
      return row[columnWhere] === valueWhere;
        
      });
    }    
    rows = rows.map(function(row){
      let selectedRow = {};
       columns.forEach(function(column){
        selectedRow[column] = row[column];
       });
      return selectedRow;
    });
    return rows;
  }

  delete(parsedStatement){
    let [, tableName, whereClause] = parsedStatement;

    if(whereClause){
      let [columnsWhere, valueWhere] = whereClause.split(" = ")
      this.tables[tableName].data = this.tables[tableName].data.filter(function(row){
        return row[columnsWhere] !== valueWhere;
      });
    }else{
      this.tables[tableName].data = [];
    }
  } 
  execute(statement){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = this.parser.parse(statement);
        if(result){
          resolve(this[result.command](result.parsedStatement));
        }
        const message = `Syntax error: "${statement}"`;
        reject(new DatabaseError(statement, message));
      },1000);
    });
  }     

     
};