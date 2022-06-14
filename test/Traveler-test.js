import { expect } from 'chai';
import Traveler from '../src/Traveler.js'
import { travelersData } from './tests.js';


describe('Traveler', () => {

    let traveler;

    beforeEach(() => {
        traveler = new Traveler(travelersData[0]);
    });

    it('Should be a function', () => {
        expect(Traveler).to.be.a('function');
    });

    it('Should show a traveler\'s name', () => {
        expect(traveler.name).to.equal('Ham Leadbeater');
    });

    it('Should be able to return a traveler\'s first name', () => {
        expect(traveler.returnFirstName()).to.equal('Ham');
    });
});