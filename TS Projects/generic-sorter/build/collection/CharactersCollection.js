"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(input) {
        this.input = input;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.input.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharactersCollection.prototype, "data", {
        get: function () {
            return this.input;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftI, rightI) {
        return this.input[leftI].toLowerCase() > this.input[rightI].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (leftI, rightI) {
        var characters = this.input.trim().split('');
        var tempchar = characters[leftI];
        characters[leftI] = characters[rightI];
        characters[rightI] = tempchar;
        //join back the string and assign it to input
        this.input = characters.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
