// Por meio das operações call e apply é possivel invocar uma função passando o this por parâmentro


// o this se refere ao objeto que o chama que no caso é o  circle.
const calculateArea = function(fn){
  return fn(Math.PI * Math.pow(this.radius, 2)); 
};

const circle = {
  radius: 10, 
  calculateArea 
};


// Utilizando a operação call da função, passando o objeto como parâmentro
calculateArea.call(circle, Math.round );  // primeiro parâmentro é o this, os demais são parâmentro da função

// Utilizando a operação apply da função, passando o objeto como parâmentro 
calculateArea.apply(circle,[Math.ceil]); // parâmentro da função passado como array

//A diferença entre call e apply é que no apply os parâmenros são passando como um array


// A operação bind permite encapsular o this dentro da função , retornando-a.

const calculateAreaForCicle = calculateArea.bind(circle);
calculateAreaForCicle(Math.round);

