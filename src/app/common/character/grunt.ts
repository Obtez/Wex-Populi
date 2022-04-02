export class Grunt {
  private type: string = 'Grunt';
  private baseStrength: number = 10;
  private strengthModifier: number = 0;
  private totalStrength: number = 0;

  constructor() {
    this.getStrengthModifier();
    this.totalStrength = Math.floor(this.baseStrength * this.strengthModifier);
  }

  private getStrengthModifier(): void {
    this.strengthModifier = (Math.random() * 0.5) + 1;
  }

  public get fighterType() {
    return this.type;
  }

  public get strength() {
    return this.totalStrength;
  }
}
