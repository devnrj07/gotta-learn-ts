"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
var Collection = /** @class */ (function () {
    function Collection(collection) {
        this.collection = collection;
    }
    Object.defineProperty(Collection.prototype, "data", {
        get: function () {
            return this.collection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "length", {
        get: function () {
            return this.collection.length;
        },
        enumerable: false,
        configurable: true
    });
    Collection.prototype.compare = function (leftIndex, rightIndex) {
        return this.collection[leftIndex] > this.collection[rightIndex];
    };
    Collection.prototype.swap = function (leftIndex, rightIndex) {
        var temp = this.collection[leftIndex];
        this.collection[leftIndex] = this.collection[rightIndex];
        this.collection[rightIndex] = temp;
    };
    return Collection;
}());
exports.Collection = Collection;
