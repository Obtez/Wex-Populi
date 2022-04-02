import { Specialist } from './specialist';

describe('Specialist', () => {
  it('should create an instance', () => {
    expect(new Specialist()).toBeTruthy();
  });

  it('should create an instance with the fighterType "Specialist"', () => {
    const newSpecialist = new Specialist();

    expect(newSpecialist.fighterType).toEqual('Specialist');
  })

  it('should add the strength modifier -> total strength between 25 and 30', () => {
    const newSpecialist = new Specialist();

    expect(newSpecialist.strength).toBeGreaterThanOrEqual(25);
    expect(newSpecialist.strength).toBeLessThanOrEqual(30);
  });
});
