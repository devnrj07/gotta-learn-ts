"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewSort = void 0;
var NewSort = /** @class */ (function () {
    function NewSort(data) {
        this.data = data;
    }
    NewSort.prototype.sort = function () {
        var length = this.data.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.data.compare(j, j + 1)) {
                    this.data.swap(j, j + 1);
                }
            }
        }
    };
    return NewSort;
}());
exports.NewSort = NewSort;
