import faker from 'faker'
import { MapLike } from './CustomMap';

export class User implements MapLike{
    name:string
    location : {
        longitude : number,
        latitude :  number
    }

    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            latitude : parseFloat(faker.address.latitude()),
            longitude : parseFloat(faker.address.longitude())
        }
    }

    title(){
        return `User : ${this.name}`;
    }
}