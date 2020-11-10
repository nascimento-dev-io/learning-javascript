// O tipo Boolean é primitivo , imúltavel e representado pelas palavras true e false 

typeof(true); // => boolean
typeof(false); // => boolean

new Boolean(true); // => [Boolean: false]
new Boolean(false); // => [Boolean: false]

typeof(new Boolean(false)); // => object

// Exemplos

let condition = true;

if(condition){
  console.log("The condition is true")
}else{
  console.log("The condition is false")
}

// Exemplo 2

let condition = new Boolean(true);

if(condition){
  console.log("The condition is true") // Ambas entra no true devido coersão de tipo
}else{
  console.log("The condition is false")
}

// Warning -  Cuidado com a coersão de tipo, acontece quando um tipo de dados é utilizado em um contexto onde é convertido de forma implicita ou explicita.
    // Conversões pra false

!!0; // => false
!!NaN; // => false
!!""; // => false
!!false; // => false
!!undefined; // => false
!!null;// => false


    // Conversões pra true ( todo o resto)

!!-10; // => true    
!!"JavaScript"; // => true    
!!{}; // => true    
!![]; // => true    
!!"/JavaScript/"; // => true    
!!new Date(); // => true    
!!function() {}; // => true    