// Com o operador instanceOf é possivel verificar se um objeto foi criado por meio de uma determinada função construtora analisando a sua cadeia de protótipos.

const date = new Date();

date instanceof Date; // ==> true - Analisa se o objeto foi criado apartir da função construtura de Date

date instanceof Object; // ==> true - Devido a cadeia de prototipo

//Diferença entre typeof e instanceof

//typeof revela o tipo de dado
typeof date; // ==> object 

// Criando algoritmo simplifica de instanceof

const _instanceof = function(obj, fn){
  if(obj === fn.prototype) return true;
  if(obj === null) return false;
  return _instanceof(obj.__proto__, fn);
};

_instanceof(date, Date); // ==> true
