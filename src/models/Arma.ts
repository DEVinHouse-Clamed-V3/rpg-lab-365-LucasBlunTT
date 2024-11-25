export default class Arma {
  private readonly nome: string;
  private readonly descricao: string;
  private dano: number = 0;

  constructor(nome: string, dano: number, descricao: string) {
    this.nome = nome;
    this.descricao = descricao;
    this.setDano(dano);
  }

  // Getters
  public getNome(): string {
    return this.nome;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public getDano(): number {
    return this.dano;
  }

  // Setter
  public setDano(dano: number): void {
    if (dano < 0) {
      throw new Error('O dano não pode ser negativo.');
    }
    this.dano = dano;
  }
}
