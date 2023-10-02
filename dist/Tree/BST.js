"use strict";
class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    getValue() {
        return this.value;
    }
    getLeft() {
        return this.left;
    }
    setLeft(node) {
        this.left = node;
    }
    getRight() {
        return this.right;
    }
    setRight(node) {
        this.right = node;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    getRoot() {
        return this.root;
    }
    setRoot(node) {
        this.root = node;
    }
    insert(value) {
        const newNode = new BSTNode(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (newNode.getValue() === temp.getValue())
                return undefined;
            if (newNode.getValue() < temp.getValue()) {
                if (temp.getLeft() === null) {
                    temp.setLeft(newNode);
                    return this;
                }
                temp = temp.getLeft();
            }
            else if (newNode.getValue() > temp.getValue()) {
                if (temp.getRight() === null) {
                    temp.setRight(newNode);
                    return this;
                }
                temp = temp.getRight();
            }
        }
    }
    contain(value) {
        this.root === null && false;
        let temp = this.root;
        while (temp) {
            if (value < temp.getValue()) {
                temp = temp.getLeft();
            }
            else if (value > temp.getValue()) {
                temp = temp.getRight();
            }
            else if (value === temp.getValue()) {
                return true;
            }
        }
        return false;
    }
    minumum() {
        if (this.root === null)
            return null;
        let temp = this.root;
        let min = null;
        while (temp) {
            min = temp.getValue();
            temp = temp.getLeft();
        }
        return min;
    }
    maximum() {
        if (this.root === null)
            return null;
        let temp = this.root;
        let max = null;
        while (temp) {
            max = temp.getValue();
            temp = temp.getRight();
        }
        return max;
    }
}
const bst = new BST();
bst.insert(5);
console.log(bst);
bst.insert(15);
console.log(bst);
bst.insert(3);
console.log(bst);
bst.insert(87);
console.log(bst);
console.log(bst.contain(15));
console.log(bst.minumum());
console.log(bst.maximum());
