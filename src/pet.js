function Pet(name) {

    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;

}

Pet.prototype.growUp = function() {

    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;

}

Pet.prototype.walk = function() {
    if((this.fitness + 4) <= 10) {
        this.fitness +=4;
    } else { 
        this.fitness = 10;
    }
}

Pet.prototype.feed = function() {
    if((this.hunger - 3) >= 0) {
        this.hunger - 3
    } else {
        this.hunger = 0
    }
}

Pet.prototype.checkUp = function() {
    if(this.fitness <= 3 && this.hunger >= 5) {
        return ('I am hungry and need a walk')
    }
    if(this.fitness <= 3) {
        return ('I need a walk')
    }
    if(this.hunger >= 5) {
        return ('I am hungry')
    }
    return ('I feel great!')
}

Pet.prototype.isAlive = function () {
    if(this.fitness > 0 && this.hunger < 10 && this.age < 30) {
        return 'Your pet is alive and kicking'
    } else {
        return 'Your pet is dead :('
    }
};

module.exports = Pet;
