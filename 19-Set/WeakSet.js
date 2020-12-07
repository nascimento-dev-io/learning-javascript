// WeakSet é um objeto, similar ao Set, que permite apenas valores do tipo Object e mantém as referências de forma fraca, sendo volátil e não iterável

const weakSet = new WeakSet();  
const obj1 = {};

// add: Adiciona um novo elemento
weakSet.add(obj1); // Não pode utilizar tipos primitivos

// has: Retorna true se o elementoexistir
console.log(weakSet.has(obj1)); // ==> true

// delete: Remove um elemento
weakSet.delete(obj1); // true ( quando consegue remover)

console.log(weakSet);

// Para que serve:? serve para criar elementos sem se preocupar com memoryleaks
const circles = new WeakSet()
function Circle(radius){
  circles.add(this);
  this.radius = radius;

};

Circle.prototype.calculateArea = function(){
  if(!circles.has(this)) throw "Invalid object";
  return Math.PI * Math.pow(this.radius, 2)
};

const circle1 = new Circle(10);
const circle2  = {
  radius: 5
};
console.log(circle1);
console.log(circle1.calculateArea.call(circle2))