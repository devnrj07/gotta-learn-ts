import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './WorkPlace';
const user = new User()
console.log({ user })

const company = new Company();
console.log({ company })

const myMap = new CustomMap()
myMap.setView().addMarker(user)
myMap.addMarker(company)
