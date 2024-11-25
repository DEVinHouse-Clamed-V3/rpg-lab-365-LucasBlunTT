// import Arma from './models/Arma';

// const espada = new Arma(
//   'Espada Longa',
//   50,
//   'Uma espada feita de aço, ideal para combates corpo a corpo.',
// );
// console.log(`Arma: ${espada.getNome()} - Dano: ${espada.getDano()}`);
// console.log(`Descrição: ${espada.getDescricao()}`);

// try {
//   espada.setDano(-10); // Deve lançar um erro.
// } catch (error) {
//   if (error instanceof Error) {
//     console.error(error.message);
//   } else {
//     console.error('Unknown error', error);
//   }
// }

import  Arma  from "./models/Arma";
import  Personagem  from "./models/Personagem";

const espada = new Arma("Espada Longa", 50, "Uma espada de aço.");
const machado = new Arma("Machado de Guerra", 70, "Um machado poderoso.");

const heroi = new Personagem("Guerreiro", 100, 20);
const inimigo = new Personagem("Goblin", 50, 10);

console.log("--- Antes do Combate ---");
console.log(`${heroi.getNome()} tem ${heroi.getVida()} de vida.`);
console.log(`${inimigo.getNome()} tem ${inimigo.getVida()} de vida.`);

heroi.equiparArma(espada);
heroi.atacar(inimigo);

inimigo.equiparArma(machado);
inimigo.atacar(heroi);

console.log("--- Após o Combate ---");
console.log(`${heroi.getNome()} tem ${heroi.getVida()} de vida.`);
console.log(`${inimigo.getNome()} tem ${inimigo.getVida()} de vida.`);

