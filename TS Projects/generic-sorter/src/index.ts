import { Sorter } from './Sorter';
import { NewSort } from './NewSort';
import { Collection } from './Collection';
import { CharactersCollection } from './collection/CharactersCollection';
import { LinkedList } from './collection/LinkedListCollection';
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
//const goodSorted = new NewSort(numbersCollection)
//goodSorted.sort()
console.log('>>>Case 2:>>>>>>', numbersCollection.data)

/**
 * runner code case 3 : extend interface , add support for string just by implementing 3 methods (data, swap, compare)
 */

const charactersCollection = new CharactersCollection('zAopEC')
//const sortedCharacters = new NewSort(charactersCollection);  //abstract class can't be instantiated
//sortedCharacters.sort()
charactersCollection.sort()    
console.log('>>>Case 3:>>>>>>', charactersCollection.data);

/**
 * runner code case 5 : Extended class to support LinkedList and inherit sort method 
 */

const LLCollection = new LinkedList();
LLCollection.add(100)
LLCollection.add(50)
LLCollection.add(-100)
console.log('>>>>>>Case 4:  Before>>>>>>>>')
LLCollection.print()
LLCollection.sort()
console.log('>>>>>>>>case 4: After>>>>>')
LLCollection.print()