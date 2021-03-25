import faker, { fake } from 'faker';
import { MapLike } from './CustomMap';

export class Company implements MapLike {
    companyName: string;
    catchPhrase: string;
    location: {
        latitude: number;
        longitude: number;
    }

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude())
        }
    }

    title() {
        return `<h3>company : ${this.companyName} </h3>. <h4> ${this.catchPhrase} </h4>.`
    }
}