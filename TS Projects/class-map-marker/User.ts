import faker from 'faker'

export class User{
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
}