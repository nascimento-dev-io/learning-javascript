import {PI as pi, pow} from "./Math";

// import * as math from "./Math" - Importando tudo usando um alias

export default class Circle{
  constructor(radius){
    this.radius = radius;
  }

  get area(){
    return pi * pow(this.radius, 2);
  }
}