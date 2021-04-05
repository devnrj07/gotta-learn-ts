"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
var CharacterCollection = /** @class */ (function () {
    function CharacterCollection(input) {
        this.input = input;
    }
    Object.defineProperty(CharacterCollection.prototype, "length", {
        get: function () {
            return this.input.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharacterCollection.prototype, "data", {
        get: function () {
            return this.input;
        },
        enumerable: false,
        configurable: true
    });
    CharacterCollection.prototype.compare = function (leftI, rightI) {
        return this.input[leftI].toLocaleLowerCase() > this.input[rightI].toLocaleLowerCase();
    };
    CharacterCollection.prototype.swap = function (leftI, rightI) {
        var characters = this.input.trim().replace(/\s/g, '').split('');
        var tempchar = characters[leftI];
        characters[leftI] = characters[rightI];
        characters[rightI] = tempchar;
    };
    return CharacterCollection;
}());
exports.CharacterCollection = CharacterCollection;
