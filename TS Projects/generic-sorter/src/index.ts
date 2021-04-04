import { Sorter } from './Sorter';
import { NewSort } from './NewSort';
import { Collection } from './Collection';
const sorted = new Sorter([11, 2, 3, 9, 69])
sorted.sort()

console.log(sorted)
const numbersCollection = new Collection([11, 2, 3, 9, 69])
const goodSorted = new NewSort(numbersCollection)
goodSorted.sort()
console.log(numbersCollection.data())