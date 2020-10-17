// O tipo Number ele é primitivo, imutável e é representado internamente pelo padrão IEEE 754 de 64bits.
// Suporte a decimal, octal, hexadecimal, binario

new Number(10);  // Decimal
new Number(08); // octal
new Number(0xFF); // Hexadecimal
new Number(0b11);  // binário

(10).toFixed(2);  // fixar quantidade de casa decimais após a virgula
(20).toPrecision(10) // Quantidade algarismo que deve ser representado.