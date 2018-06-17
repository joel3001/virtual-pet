const Pet = require('../src/pet.js')

describe('constructor', () => {
  it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

  it('inserts the pet name', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido')
    });


  it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.age).toEqual(0);
    });


  it('has a initial hunger of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.hunger).toEqual(0);
    });


    it('has a initial fitness of 10', () => {
      const pet = new Pet('Fido');
      expect(pet.fitness).toEqual(10);
    });
});




describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.age).toEqual(1);
  });

  it('increments the hunger by 5', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });

  it('decreases the fitness by 3', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
  
});

describe('walk', () => {
  it('increases fitness by to a maximum of 10', () => {
    const pet = new Pet('Fido');
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});

describe('feed', () => {
  it('decreases hunger to a minimum of 0', () => {
    const pet = new Pet('Fido');
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
});

describe('checkUp', () => {
  it('checks if the pet needs feeding and/or walking', () => {
    const pet = new Pet('Fido');
    pet.hunger = 7;
    pet.fitness = 3;
    pet.checkUp();
    expect(pet.checkUp()).toEqual('I am hungry and need a walk');
  });
});

describe('isAlive', () => {
  it('checks if the pet is dead', () => {
    const pet = new Pet('Fido');
    pet.hunger = 10;
    pet.fitness = 5;
    pet.age = 3;
    pet.isAlive();
    expect(pet.isAlive()).toEqual('Your pet is dead :(')
  })

  it('checks if the pet is alive', () => {
    const pet = new Pet('Fido');
    pet.hunger = 5;
    pet.fitness = 7;
    pet.age = 16;
    pet.isAlive();
    expect(pet.isAlive()).toEqual('Your pet is alive and kicking')
  })
})