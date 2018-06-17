const Pet = require('../src/pet.js')

describe('constructor', () => {
  it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);

    });
  it('inserts the pet name', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido')
  
    })

  });
  