// tipos primitivos: string, number (int ou float) e boolean ( verdadiro ou falso)
// + tipos prmitivos: undefined, null, symbol (ES2015)

let minhaVar = "minha string" //String usando asás duplas
let minhaVar2 = 'minha "string" com aspas simples'; //Neste caso como a palavra string esta com enfâse entre aspas duplas a string foi declarada com aspas simples.
let minhaVar3 = `minha template literal`; // Neste caso também pode ser usado as crases.

// Abixo alguns exemplos de concatenação:
let idade = 40;
let msg = "eu possuo " + idade + " anos"; // metodo mais antigo
let msg1 = `eu possuo ${idade} anos`; // metodo mais atual, neste caso obriga-se o uso da crase.

//Como consultar o tipo primitivo de uma variavel?
// Usando a comando "ypeof", axemplo abaixo

console.log(typeof msg1, typeof idade, typeof minhaVar);
// Resutado: string number string

// Tipo: number
const n1 = 10;
const n2 = 1.1;
console.log(`O tipo de n1 é ${typeof n1} e seu valor é ${n1}.`)
console.log(`O tipo de n2 é ${typeof n2} e seu valor é ${n2}.`)
// resposta: O tipo de n1 é number e seu valor é 10.
// resposta: O tipo de n2 é number e seu valor é 1.1.

// Tipo: boolean (somente true ou false)
const isValid = false;
console.log(typeof isValid);

// Tipo: undefined
let varTeste; //Não teve um valor definido
console.log(varTeste);
console.log(typeof varTeste);

// Tipo: null
let varTeste2 = null; //Parecido com undefined porém tem que ser declarado o vlaor.
console.log(varTeste2);
console.log(typeof varTeste2); // Neste caso por um erro no JavaScript ele retorna o tipo como "object"



