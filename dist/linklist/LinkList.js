"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkList = exports.LinkListNode = void 0;
class LinkListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
    setNext(next) {
        this.next = next;
    }
    getNext() {
        return this.next;
    }
}
exports.LinkListNode = LinkListNode;
class LinkList {
    constructor(value) {
        const newNode = new LinkListNode(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.getValue());
            temp = temp.getNext();
        }
    }
    getHead() {
        return this.head;
    }
    setHead(value) {
        const newNode = new LinkListNode(value);
        this.head = newNode;
    }
    getTail() {
        if (this.tail !== null) {
            console.log("tail is: ", this.tail.getValue());
        }
        else {
            console.log("tail is null");
        }
    }
    getLength() {
        return this.length;
    }
    get(index) {
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.getNext();
        }
        return temp;
    }
    push(value) {
        var _a;
        const newNode = new LinkListNode(value);
        (_a = this.tail) === null || _a === void 0 ? void 0 : _a.setNext(newNode);
        this.tail = newNode;
        this.length++;
        return this;
    }
    pop() {
        const lastNode = this.get(this.length - 2);
        lastNode === null || lastNode === void 0 ? void 0 : lastNode.setNext(null);
        this.tail = lastNode;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }
    unshift(value) {
        const newNode = new LinkListNode(value);
        newNode.setNext(this.head);
        this.head = newNode;
        this.length++;
        return this.head;
    }
    shift() {
        let temp = this.head;
        this.head = temp.getNext();
        temp === null || temp === void 0 ? void 0 : temp.setNext(null);
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    set(index, value) {
        if (index < 0 && index > this.length - 1)
            return undefined;
        const currentNode = this.get(index);
        if (currentNode) {
            currentNode === null || currentNode === void 0 ? void 0 : currentNode.setValue(value);
            return true;
        }
        return false;
    }
    insert(index, value) {
        const newNode = new LinkListNode(value);
        if (index < 0 && index > this.length)
            return undefined;
        if (index === 0)
            return this.unshift(value);
        if (index === this.length)
            return this.push(value);
        let prev = this.get(index - 1);
        let current = prev === null || prev === void 0 ? void 0 : prev.getNext();
        prev === null || prev === void 0 ? void 0 : prev.setNext(newNode);
        newNode.setNext(current);
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 && index > this.length)
            return undefined;
        if (index == this.length - 1)
            return this.pop();
        if (index === 0)
            return this.shift();
        let prev = this.get(index - 1);
        let current = prev === null || prev === void 0 ? void 0 : prev.getNext();
        let next = current === null || current === void 0 ? void 0 : current.getNext();
        prev === null || prev === void 0 ? void 0 : prev.setNext(next);
        current === null || current === void 0 ? void 0 : current.setNext(null);
        return true;
    }
    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp === null || temp === void 0 ? void 0 : temp.getNext();
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = temp === null || temp === void 0 ? void 0 : temp.getNext();
            temp === null || temp === void 0 ? void 0 : temp.setNext(prev);
            prev = temp;
            temp = next;
        }
        return this;
    }
}
exports.LinkList = LinkList;
