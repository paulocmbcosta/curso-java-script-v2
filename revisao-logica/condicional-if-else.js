let idade = 17;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = (idade >= 12 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);

//let msgMaiorIdade = ""
//if (idade >= 18) {
//    msgMaiorIdade = "É amior de idade"
//} else {
//    msgMaiorIdade = "É menor de idade"
//}

// Com o operador Ternario esse trecho acim pode ser substituido com o valor abaixo
let msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de idade"


if (comprouBilhete) {
    console.log("Sim, comprou bilhete")
} else {
    console.log(msgMaiorIdade)
}

let n1 = 5
let n2 = 8
let media = (n1 + n2) / 2;
if (media >= 7) {
    console.log("Aluno APROVADO");
    } else {
        console.log("Aluno REPROVADO")
    }
