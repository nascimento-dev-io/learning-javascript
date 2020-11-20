// Existe uma variavel implicita chamada this que faz que faz referÊncia para o objeto responsável pela sua invocação.

const rectangle = {
  x: 10,
  y: 2,
  // calculateArea: function(){}  - Forma anterior ao ES6
  calculateArea(){
    return this.x * this.y;
  }
};

// calculateArea também pode ser passado por referência de fora do objeto e ainda assim o this estaria referenciando o objeto que a chama no caso o rectangle.



