// O objetivo dos exercicios é criar um SGBD, com suporte a comandos select, insert, delete e update.

/**
 * Extraia partes do comando como o nome da tabela e as colunas, armazenando-as em
variáveis.

Instruções

Dado o comando:
create table author (id number, name string, age number, city string, state s
tring, country string)

1.Extraia o nome da tabela e armazene em uma variável chamada "tableName".
2.Extraia as colunas da tabela e armazene em uma variável chamada "columns".
3.Manipule a variável "columns", separando cada coluna com seu respectivo tipo, em
uma string separada.
 */

 const statement = "create table author (id number, name string, age number, city string, state string, country string)";

const regexp = /create table ([a-z]+) \((.+)\)/;
const parsedStatement = statement.match(regexp);

const tableName = parsedStatement[1];

let columns = parsedStatement[2];

columns = columns.split(", ");




