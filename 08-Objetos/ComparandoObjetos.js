// A comparação dos objetos é feita por meio de sua referência , assim, ainda que dois objetos tenham exatamente as mesmas propriedades eles serão considerados diferentes.

const book = {
  title: "JavaScript",
  author: "Nascimento"
};

const book2 = {
  title: "JavaScript",
  author: "Nascimento"
};

book === book2; // ==> false

// Um das formas para comparar os objetos é analisandocada uma das propriedades por meio da comparação das palavras chaves e valores.

let equal = true;

for(let key in book){
  if(book[key] !== book2[key]) equal = false;
}

for(let key in book2){
  if(book[key] !== book2[key]) equal = false; 
}

// Para garantir que um objeto é igual ao outro é necessário verificar seus prototipos