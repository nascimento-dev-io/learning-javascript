// Proxy  é capaz de interceptar diversos tipos de operações em um objeto alvo

// Existem métodos chamados de trap, para diversos tipos de eventos relacionados a um objeto como:

// O método set é invocado quando uma propriedade é definida no objeto

// O método deleteProperty é invocado quando uma propriedade é deletada

// O método get é invocado quando uma propriedade é  acessada

// A reflect API tem os mesmos métodos que a existem no Proxy, permitem a execução de diversos tipos de operações no objeto alvo.


function createArray(){
  return new Proxy({}, {
    set(target, key, value){
      target.length = target.length || 0
      target.length++;
      //target[key] = value;
      Reflect.set(target, key, value);
    },
    get(target, key){
      if(typeof key === "string" && key.match(/\d+/)){
        if(!( /*key in target*/Reflect.has(target, key))){
          throw `Property ${key} not found`
        }
      }
      return target[key];
    },
    deleteProperty(target, key){
      if(key in target){
        target.length--;
        Reflect.deleteProperty(target, key);
      }
    }
  });
}
const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";

//
delete languages[1];
console.log(languages);
console.log(languages.length);





 




