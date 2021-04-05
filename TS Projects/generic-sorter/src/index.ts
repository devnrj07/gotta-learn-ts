import { Sorter } from './Sorter';
import { NewSort } from './NewSort';
import { Collection } from './Collection';
import { CharactersCollection } from './collection.interfaces/CharactersCollection';
/**
 * Main code case 1 : bad style
 */

const sorted = new Sorter([11, 2, 3, 9, 69])
sorted.sort()
console.log('>>>Case 1:>>>>>>', sorted.data)


/**
 * runner code case 2 : Simple Collection (number[]) , Sortable interface
 */
const numbersCollection = new Collection([11, 2, 3, 9, 69])
const goodSorted = new NewSort(numbersCollection)
goodSorted.sort()
console.log('>>>Case 2:>>>>>>', numbersCollection.data)

/**
 * runner code case 3 : extend interface , add support for string just by implementing 3 methods (data, swap, compare)
 */

const charactersCollection = new CharactersCollection('zAopEC')
const sortedCharacters = new NewSort(charactersCollection);

sortedCharacters.sort()
console.log('>>>Case 3:>>>>>>', charactersCollection.data);