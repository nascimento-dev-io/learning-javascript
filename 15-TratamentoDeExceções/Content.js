// Na linguagem JS , qualquer tipo de dado pode ser lançado como um erro interropendo o fluxo de execução.

const Regtangle = function(x, y){
  this.x = x;
  this.y = y;
  this.calculeArea = function(){
    if (this.x > 0 && this.y > 0){
      return this.x * this.y;
    } else{
      throw "Invalid value for x or y";
    }
  }
}

//Usando o try catch é feito um tratamento de excesões retornando o erro caso algum problema na execução ocorra
try {
  const rectangle = new Rectangle(10, 2);
  rectangle.calculeArea();
} catch (e) {
  console.log(e);
}

