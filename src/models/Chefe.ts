import Arma from './Arma';
import Inimigo from './Inimigo';
import Personagem from './Personagem';

export default class Chefe extends Inimigo {
  private habilidadeEspecial: string;

  constructor(
    nome: string,
    vida: number,
    forca: number,
    arma: Arma | null = null,
    habilidadeEspecial: string = 'Explosão de Fúria',
  ) {
    super(nome, vida, forca, arma); // Chama o construtor da classe pai (Inimigo)
    this.habilidadeEspecial = habilidadeEspecial;
  }

  // Sobrescrevendo o método atacar para causar o dobro de dano
  public atacar(alvo: Personagem): void {
    const chanceDeFalha = Math.random() < 0.2; // 20% de chance de falha
    if (chanceDeFalha) {
      console.log(
        `${this.getNome()} tentou atacar ${alvo.getNome()}, mas falhou!`,
      );
      return;
    }

    const dano = this.calcularDano() * 2; // Dano dobrado
    console.log(
      `${this.getNome()} usou um ataque poderoso contra ${alvo.getNome()}, causando ${dano} de dano!`,
    );
    alvo.receberDano(dano);
  }

  // Novo comportamento especial quando a vida do Chefe chega a zero
  public receberDano(dano: number): void {
    super.receberDano(dano); // Chama o método da classe pai
    if (this.getVida() <= 0) {
      const chanceDeUltimaAcao = Math.random() < 0.2; // 20% de chance
      if (chanceDeUltimaAcao) {
        console.log(
          `${this.getNome()} realizou uma última ação antes de ser derrotado: ${
            this.habilidadeEspecial
          }!`,
        );
        this.ultimaAcao();
      }
    }
  }

  // Método para a última ação especial do chefe
  private ultimaAcao(): void {
    console.log(
      `${this.getNome()} libera uma explosão de energia antes de cair.`,
    );
    // Lógica da habilidade especial (exemplo: dano em área)
    // Isso pode ser expandido para atingir múltiplos personagens ou ter outro impacto.
  }
}
