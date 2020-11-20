// As funções do tipo getter e setter servem para interceptaro acesso as propriedades de determinado objeto.

const rectangle = {
  // Utilize chaves diferentes para a função setter e a propriedade do objeto 
  set x(x) {
    if(x > 0){
      this._x = x;
    }else{
      console.log("Invalid value for x")
    }
  },
  set y(y){
    if(y > 0){
      this._y = y;
    }else{
      console.log("Invalid value for y")
    }
  },
  get area(){
    return this._x * this._y;
  }
};

//Por meio da operação definepropertyda Object API, também é possivel definir funções do tipo gettere setter.

// Definindo a propriedade set x
Object.defineProperty(rectangle, "x", {
  set(x){
    if(x > 0){
      this._x = x;
    }else{
      console.log("Invalid value for x")
    }
  }
});

// Definindo a propriedade set y
Object.defineProperty(rectangle, "y", {
  set(y){
    if(y > 0){
      this._y = y;
    }else{
      console.log("Invalid value for y")
    }
  }
});

//Definido o metodo get para area
Object.defineProperty(rectangle, "area", {
  get(){
    return this.x * this.y;
  }
});