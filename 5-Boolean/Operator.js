// Operadores de compração  == , ===, !=, !==, <, >, <=, >=

1 == 2; // => false
10 === 10; // => true
"a" != "b"; // => true
3 !== 2; // => true
10 > 11; // => false
5 >= 5; // => true
'z' < 'x';  // => false
'c' <= 'c'; // => true

// Coersão de tipo

0 == ""; // => true
0 == "0"; // => true
false == undefined; // => false
false == null; // => false
null == undefined; // => true
1 == true; // => true
0 == false; // => true
0 == "\n"; // => true

// para comparar o tipo de dados além da coersão se utiliza operaddor === ou !== / nesse caso é comparado também o seu tipo alem do valor e/ou coersão.

    // Operadores lógicos  || e &&

0 || 2; // => 2 
1 || 2; // => 1
1 && 2; // => 2
0 && 2; // => 0
