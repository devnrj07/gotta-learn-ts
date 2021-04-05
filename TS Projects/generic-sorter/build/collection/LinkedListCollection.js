"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            var length = 1;
            if (!this.head) {
                return 0;
            }
            var temp = this.head;
            while (temp.next) {
                temp = temp.next;
                length++;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head)
            throw new Error('Index out of bound!');
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index does not exist');
    };
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var ptr = this.head;
        while (ptr.next) {
            ptr = ptr.next;
        }
        ptr.next = node; // add Node as next to last node
    };
    LinkedList.prototype.compare = function (leftI, rightI) {
        if (!this.head)
            throw new Error('nothing to cover');
        return this.at(leftI).value > this.at(rightI).value;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var tempNode = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = tempNode;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
