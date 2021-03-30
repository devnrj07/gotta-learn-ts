"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    /**
     * @function sort
     * @return bubble sort the provided array of numbers, strings or LinkedList
     */
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                //typescript guard : instanceof any kind of object value
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j]) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                //typescript typeguard : typeof only for primitive types
                if (typeof this.collection === 'string') {
                    //some different algo to sort string!
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
