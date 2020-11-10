// O tipo Symbol é primitivo, único e imúltavel, atuando como chave únicaem um objeto.

Symbol("a");
Symbol("b");
Symbol("c");

Symbol("d") == Symbol("d"); // => false

// Além disso, é utlizado em operações realizados pelo interpretador , como o comando for/of ou em operações da String API como match, split, replace e muitas outras.

let regexp = /JavaScript/;
regexp[Symbol.match] = false;
"/JavaScript/".startsWith(regexp); // => true

