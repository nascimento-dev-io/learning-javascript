// Template literal é uma forma de declarar uma String que permite a interpolação deexpressões.

//Exemplo

let host = "localhost";
let port = "3000";
let resource = "users";
let url = "htpps://" +host+":"+port+"/"+resource;
console.log(url);

// Com template literal

url = `https:// ${host}:${port}/${resource} `
console.log(url)

//Outra caracteristica é poder escrever string com multi linha, sem necessidade de caracteres especiais ( + \ \n).

let monthsOfYear = ` 0 - Jan
1 - Feb
2 - Mar
3 - Apr
4 - May
5 - Jun
6 - Jul
7 - Aug
8 - Set
9 - Oct
10 - Nov
11 - Dec`;


