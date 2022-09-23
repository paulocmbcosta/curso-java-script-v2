/* Para uma pessoa viajar para o exterior:
- Precisa ser maior de 18 anos 
OU 
- Acompanhado dos pais 
E 
- Ter comprado o bilhete */

let idade = 21;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = (idade >= 12 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);

// Operadores logicos && tem preferencia

