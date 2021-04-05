"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var NewSort_1 = require("../NewSort");
var CharactersCollection = /** @class */ (function (_super) {
    __extends(CharactersCollection, _super);
    function CharactersCollection(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
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
}(NewSort_1.NewSort));
exports.CharactersCollection = CharactersCollection;
