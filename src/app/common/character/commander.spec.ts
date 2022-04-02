import { Commander } from './commander';

describe('Commander', () => {
  it('should create an instance', () => {
    expect(new Commander()).toBeTruthy();
  });

  it('should create an instance with the fighterType "Commander"', () => {
    const newCommander = new Commander();

    expect(newCommander.fighterType).toEqual('Commander');
  })

  it('should add the strength modifier -> total strength between 40 and', () => {
    const newCommander = new Commander();

    console.log("Commander:", newCommander.strength);
    expect(newCommander.strength).toBeGreaterThanOrEqual(40);
    expect(newCommander.strength).toBeLessThanOrEqual(43);
  })
});
