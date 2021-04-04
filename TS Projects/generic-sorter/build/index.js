"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NewSort_1 = require("./NewSort");
var Collection_1 = require("./Collection");
var sorted = new Sorter_1.Sorter([11, 2, 3, 9, 69]);
sorted.sort();
console.log(sorted);
var numbersCollection = new Collection_1.Collection([11, 2, 3, 9, 69]);
var goodSorted = new NewSort_1.NewSort(numbersCollection);
goodSorted.sort();
console.log(numbersCollection.data());
