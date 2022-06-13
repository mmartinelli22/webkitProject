class Traveler {
    constructor(traveler) {
        this.name = traveler.name
    }

    findFirstName() {
        return this.name.split(' ')[0];
    }
}