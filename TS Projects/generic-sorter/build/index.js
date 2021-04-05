"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NewSort_1 = require("./NewSort");
var Collection_1 = require("./Collection");
var CharactersCollection_1 = require("./collection.interfaces/CharactersCollection");
/**
 * Main code case 1 : bad style
 */
var sorted = new Sorter_1.Sorter([11, 2, 3, 9, 69]);
sorted.sort();
console.log('>>>Case 1:>>>>>>', sorted.data);
/**
 * runner code case 2 : Simple Collection (number[]) , Sortable interface
 */
var numbersCollection = new Collection_1.Collection([11, 2, 3, 9, 69]);
var goodSorted = new NewSort_1.NewSort(numbersCollection);
goodSorted.sort();
console.log('>>>Case 2:>>>>>>', numbersCollection.data);
/**
 * runner code case 3 : extend interface , add support for string just by implementing 3 methods (data, swap, compare)
 */
var charactersCollection = new CharactersCollection_1.CharactersCollection('zAopEC');
var sortedCharacters = new NewSort_1.NewSort(charactersCollection);
sortedCharacters.sort();
console.log('>>>Case 3:>>>>>>', charactersCollection.data);
