{
  ('EX2');
}
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
{
  ('EX3');
}
// import  Arma  from "./models/Arma";
// import  Personagem  from "./models/Personagem";

// const espada = new Arma("Espada Longa", 50, "Uma espada de aço.");
// const machado = new Arma("Machado de Guerra", 70, "Um machado poderoso.");

// const heroi = new Personagem("Guerreiro", 100, 20);
// const inimigo = new Personagem("Goblin", 50, 10);

// console.log("--- Antes do Combate ---");
// console.log(`${heroi.getNome()} tem ${heroi.getVida()} de vida.`);
// console.log(`${inimigo.getNome()} tem ${inimigo.getVida()} de vida.`);

// heroi.equiparArma(espada);
// heroi.atacar(inimigo);

// inimigo.equiparArma(machado);
// inimigo.atacar(heroi);

// console.log("--- Após o Combate ---");
// console.log(`${heroi.getNome()} tem ${heroi.getVida()} de vida.`);
// console.log(`${inimigo.getNome()} tem ${inimigo.getVida()} de vida.`);
{
  ('EX4');
}
// import Arma from './models/Arma';
// import Personagem from './models/Personagem';
// import Inimigo from './models/Inimigo';

// const espada = new Arma('Espada Curta', 30, 'Uma espada curta e afiada.');
// const jogador = new Personagem('Heroi', 100, 20);
// const goblin = new Inimigo('Goblin', 50, 10);

// console.log('--- Início do Combate ---');
// console.log(`${jogador.getNome()} tem ${jogador.getVida()} de vida.`);
// console.log(`${goblin.getNome()} tem ${goblin.getVida()} de vida.`);

// goblin.equiparArma(espada);

// // Combate com ações aleatórias do inimigo
// for (let rodada = 1; rodada <= 5; rodada++) {
//   console.log(`\n--- Rodada ${rodada} ---`);
//   goblin.comportamentoAleatorio(jogador);
//   if (jogador.getVida() <= 0) {
//     console.log(`${jogador.getNome()} foi derrotado!`);
//     break;
//   }
// }
