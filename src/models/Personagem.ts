import Arma from './Arma'; // Importação da classe Arma

export default class Personagem {
  private nome: string;
  private vida: number;
  private forca: number;
  private arma: Arma | null;

  constructor(
    nome: string,
    vida: number,
    forca: number,
    arma: Arma | null = null,
  ) {
    this.nome = nome;
    this.vida = vida;
    this.forca = forca;
    this.arma = arma;
  }

  // Getters e Setters
  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getVida(): number {
    return this.vida;
  }

  public setVida(vida: number): void {
    this.vida = vida > 0 ? vida : 0; // Garante que a vida não seja negativa.
  }

  public getForca(): number {
    return this.forca;
  }

  public setForca(forca: number): void {
    this.forca = forca > 0 ? forca : 0; // Garante que a força não seja negativa.
  }

  public getArma(): Arma | null {
    return this.arma;
  }

  public setArma(arma: Arma | null): void {
    this.arma = arma;
  }

  // Métodos principais
  public atacar(alvo: Personagem): void {
    const chanceDeFalha = Math.random() < 0.5; // 50% de chance de falha
    if (chanceDeFalha) {
      console.log(`${this.nome} tentou atacar ${alvo.getNome()}, mas falhou!`);
      return;
    }

    const dano = this.calcularDano();
    console.log(
      `${this.nome} atacou ${alvo.getNome()} causando ${dano} de dano!`,
    );
    alvo.receberDano(dano);
  }

  public receberDano(dano: number): void {
    this.vida -= dano;
    console.log(
      `${this.nome} recebeu ${dano} de dano. Vida atual: ${this.vida}`,
    );
    if (this.vida <= 0) {
      console.log(`${this.nome} foi derrotado!`);
    }
  }

  public equiparArma(arma: Arma): void {
    this.arma = arma;
    console.log(`${this.nome} equipou a arma ${arma.getNome()}.`);
  }

  protected calcularDano(): number {
    const danoArma = this.arma ? this.arma.getDano() : 0;
    return this.forca + danoArma;
  }
}
