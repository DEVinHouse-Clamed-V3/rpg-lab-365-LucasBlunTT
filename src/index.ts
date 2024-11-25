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
{
  ('EX5');
}
import Arma from './models/Arma';
import Personagem from './models/Personagem';
import Inimigo from './models/Inimigo';

// Criando armas
const espadaLonga = new Arma(
  'Espada Longa',
  50,
  'Uma espada longa feita de aço refinado.',
);
const arcoLongo = new Arma(
  'Arco Longo',
  40,
  'Um arco usado para ataques à distância.',
);
const machadoDeGuerra = new Arma(
  'Machado de Guerra',
  60,
  'Um machado pesado e mortal.',
);

// Criando o personagem principal
const heroi = new Personagem('Cavaleiro', 150, 30);
console.log(
  `Personagem criado: ${heroi.getNome()} com ${heroi.getVida()} de vida e ${heroi.getForca()} de força.`,
);

// Criando inimigos
const goblin1 = new Inimigo('Goblin 1', 80, 15);
const goblin2 = new Inimigo('Goblin 2', 70, 20);
const orc = new Inimigo('Orc', 100, 25);
const troll = new Inimigo('Troll', 120, 35);
const dragao = new Inimigo('Dragão', 300, 50);

// Equipando armas aos inimigos
goblin1.equiparArma(arcoLongo);
goblin2.equiparArma(espadaLonga);
orc.equiparArma(machadoDeGuerra);

// Mostrando os inimigos criados
const inimigos = [goblin1, goblin2, orc, troll, dragao];
console.log('Inimigos criados:');
inimigos.forEach((inimigo) => {
  console.log(
    `${inimigo.getNome()} com ${inimigo.getVida()} de vida e ${inimigo.getForca()} de força.`,
  );
});

// Cenário de combate
console.log('\n--- Início do Combate ---');

let rodada = 1;
while (
  heroi.getVida() > 0 &&
  inimigos.some((inimigo) => inimigo.getVida() > 0)
) {
  console.log(`\n--- Rodada ${rodada} ---`);

  // Heroi ataca um inimigo aleatório vivo
  const inimigoAlvo = inimigos.find((inimigo) => inimigo.getVida() > 0);
  if (inimigoAlvo) {
    heroi.atacar(inimigoAlvo);
  }

  // Cada inimigo vivo realiza uma ação aleatória contra o heroi
  inimigos.forEach((inimigo) => {
    if (inimigo.getVida() > 0) {
      inimigo.comportamentoAleatorio(heroi);
    }
  });

  rodada++;
}

// Resultado do combate
console.log('\n--- Fim do Combate ---');
if (heroi.getVida() > 0) {
  console.log(`${heroi.getNome()} sobreviveu com ${heroi.getVida()} de vida!`);
} else {
  console.log(`${heroi.getNome()} foi derrotado!`);
}

inimigos.forEach((inimigo) => {
  if (inimigo.getVida() > 0) {
    console.log(
      `${inimigo.getNome()} sobreviveu com ${inimigo.getVida()} de vida!`,
    );
  } else {
    console.log(`${inimigo.getNome()} foi derrotado.`);
  }
});
