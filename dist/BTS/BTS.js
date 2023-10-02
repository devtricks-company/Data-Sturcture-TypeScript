"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BTS = void 0;
const BTSNode_1 = require("./BTSNode");
class BTS {
    constructor() {
        this.root = null;
    }
    minValueNode(currentNode) {
        while ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.left) !== null) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }
    contain(value) {
        if (this.root === null)
            return false;
        let temp = this.root;
        while (temp) {
            if (value < temp.value) {
                temp = temp.left;
            }
            else if (value > temp.value) {
                temp = temp.right;
            }
            else {
                return true;
            }
        }
        return false;
    }
    insert(value) {
        const newNode = new BTSNode_1.BTSNode(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (temp.value === newNode.value)
                return undefined;
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }
            else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }
}
exports.BTS = BTS;
