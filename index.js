const meuNome = "Martinez";
const idade = 18;
const altura = 1.82
const massa = 68;
const cidade = "São José dos Pinhais"

console.log(altura)
console.log(massa)
console.log(cidade)
console.log(meuNome)
console.log(idade)

//Atividade passada sobre formatura(primeira aula de node.js)
const prompt = require('prompt-sync')
const entrada = prompt('');

const nomeCompleto = "Kauan Martinez";
const anoNascimento = 2006;
const anoFormatura = 2028;

let anoAtual = 2024;
let idade = 18;

console.log("olá eu sou " +  nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " anos " + " e nasci no ano de " + anoNascimento);

idade = idade + 1;
anoAtual = anoAtual + 1;

console.log("Eu vou fazer " + idade + " anos, ano que vem, em " + anoAtual + ". Quero estar cursando engenharia de software, e pretendo me formar em " + anoFormatura);



//Agência de viagens Hawaii Paris China Russia Cuba

console.log("__________________________________________________________________")
console.log(" ")
console.log("                 Bem vindo a Bomrruk Airlines!")
console.log(" ")
console.log("----------------------agência-de-viagens--------------------------");

const listaDeDestinos = new Array(
  "Hawaii",
  "Russia",
  "China",
  "Paris",
  "Cuba"
);

var nomeComprador = entrada("Qual seu nome?");  
var idadeComprador = entrada("Qual sua idade?");
if(idadeComprador >= 18) {
  console.log("Ola Senhor(a) " + nomeComprador);
  console.log("Comprador maior de idade");
  console.log("Destinos disṕniveis: " + listaDeDestinos);


}

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Austria");
console.log(listaDeDestinos);
listaDeDestinos.push("Campo Mourão");
console.log*(listaDeDestinos);
listaDeDestinos.push("Ponta grossa");
console.log(listaDeDestinos);
listaDeDestinos.push("Itapoa");
console.log(listaDeDestinos);

const LoginCerto = "Kauan";
const SenhaCerta = "Kauan123";

var login = entrada("Digite seu login: ");
var senha = entrada("Digite sua senha: ");
while (login != LoginCerto || senha != SenhaCerta){
  console.log ("Login ou senha incorretos")
  login = entrada("Digite o seu login:");
  senha = entrada("Digite sua senha:")
}


if(idadeComprador <= 18)
console.log("O senhor(a)não é maior de idade")

var contador= 0;
while(contador <9){
console.log(listaDeDestinos[contador]);  
  contador++;


}
var destino = entrada("Digite um numero que corresponde ao destino(0-8)");
console.log(`destino selecionado: ${listaDeDestinos[destino]}`);

//tive que enviar denovo 30/09/2024