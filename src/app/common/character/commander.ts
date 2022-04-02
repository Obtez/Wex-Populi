export class Commander {
  private type: string = 'Commander';
  private baseStrength: number = 40;
  private strengthModifier: number = 0;
  private totalStrength: number = 0;

  constructor() {
    this.getStrengthModifier();
    this.totalStrength = Math.floor(this.baseStrength * this.strengthModifier);
  }

  private getStrengthModifier(): void {
    this.strengthModifier = (Math.random() * 0.1) + 1;
  }

  public get fighterType() {
    return this.type;
  }

  public get strength() {
    return this.totalStrength;
  }
}
