import Arma from './models/Arma';

const espada = new Arma(
  'Espada Longa',
  50,
  'Uma espada feita de aço, ideal para combates corpo a corpo.',
);
console.log(`Arma: ${espada.getNome()} - Dano: ${espada.getDano()}`);
console.log(`Descrição: ${espada.getDescricao()}`);

try {
  espada.setDano(-10); // Deve lançar um erro.
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error('Unknown error', error);
  }
}
