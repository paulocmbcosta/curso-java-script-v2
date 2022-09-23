let idade = 17;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = (idade >= 12 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);

if (comprouBilhete) {
    console.log("Sim, comprou bilhete")
} else {
    if (idade >= 18) {
        console.log("É maior de idade, pode viajar");
    } else {
        console.log("Opa!!! É menor de idade")
    }
}

let n1 = 5
let n2 = 8
let media = (n1 + n2) / 2;
if (media >= 7) {
    console.log("Aluno APROVADO");
    } else {
        console.log("Aluno REPROVADO")
    }
