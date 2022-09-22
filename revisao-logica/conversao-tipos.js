// Nos casos em que a operação for de *, / e - o java Script muda 
// temporariamente a string de forma implicita para number e faz
// o calculo. Nos casos de soma (+) ele concatena.
let n1 = "10";
let n2 = 2;
console.log(n1 * n2, typeof n1, typeof n2)

// Toda informação que vem da interface grafica do usuario vem como string

// Conversão de string em números:
// parseFloat, parseInt, Number()

// Exemplos de parseInt - Só consegue converter se o primeiro digito for número
let n3 = "10"
let n4 = 2;
n3 = parseInt(n3)
console.log(n3 + n4, typeof n3, typeof n3, n4)

// Exemplo de parseFloat  - Só consegue converter se o primeiro digito for número
let n5 = "10.987454"
let n6 = 2;
n5 = parseFloat(n5)
console.log(n5 + n6, typeof n5, typeof n6)

// Exemplo de conversão de número para string
let n7 = 11;
n7 = n7.toString();
console.log(n7, typeof n7);
