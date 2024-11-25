import Arma  from "./Arma";
import  Personagem  from "./Personagem";

export default class Inimigo extends Personagem {
    constructor(nome: string, vida: number, forca: number, arma: Arma | null = null) {
        super(nome, vida, forca, arma); // Chamando o construtor da classe pai (Personagem)
    }

    // Sobrescrevendo o método atacar
    public atacar(alvo: Personagem): void {
        const chanceDeFalha = Math.random() < 0.2; // 20% de chance de falha
        if (chanceDeFalha) {
            console.log(`${this.getNome()} tentou atacar ${alvo.getNome()}, mas falhou!`);
            return;
        }

        const dano = this.calcularDano();
        console.log(`${this.getNome()} atacou ${alvo.getNome()} causando ${dano} de dano!`);
        alvo.receberDano(dano);
    }

    // Método de comportamento aleatório
    public comportamentoAleatorio(jogador: Personagem): void {
        const acao = Math.random();
        if (acao < 0.5) {
            // 50% de chance de atacar
            this.atacar(jogador);
        } else {
            // 50% de chance de esperar
            console.log(`${this.getNome()} está observando o jogador e não atacou nesta rodada.`);
        }
    }

    // Método privado herdado de Personagem para cálculo de dano
    protected calcularDano(): number {
        const danoArma = this.getArma() ? this.getArma()!.getDano() : 0;
        return this.getForca() + danoArma;
    }
}
