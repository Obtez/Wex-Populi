import { Grunt } from './grunt';

describe('Grunt', () => {
  it('should create an instance', () => {
    expect(new Grunt()).toBeTruthy();
  });

  it('should create an instance with the fighterType of "Grunt"', () => {

    const newGrunt = new Grunt();

    expect(newGrunt.fighterType).toBe('Grunt')
  })

  it('should add the strength modifier -> totalStrength between 10 and 16', () => {
    const newGrunt = new Grunt();

    expect(newGrunt.strength).toBeGreaterThan(9)
    expect(newGrunt.strength).toBeLessThan(16)
  })
});
