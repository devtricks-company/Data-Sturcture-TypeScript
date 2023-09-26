"use strict";
class NodeDoublyLinkList {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
    getNext() {
        return this.next;
    }
    setNext(next) {
        this.next = next;
    }
    getPrev() {
        return this.prev;
    }
    setPrev(prev) {
        this.prev = prev;
    }
}
class DobulyLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
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
    getTail() {
        return this.tail;
    }
    getLength() {
        return this.length;
    }
    push(value) {
        var _a;
        const newNode = new NodeDoublyLinkList(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.setPrev(this.tail);
            (_a = this.tail) === null || _a === void 0 ? void 0 : _a.setNext(newNode);
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        var _a;
        if (this.length === 0)
            return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            let temp = this.tail;
            this.tail = temp.getPrev();
            temp === null || temp === void 0 ? void 0 : temp.setPrev(null);
            (_a = this.tail) === null || _a === void 0 ? void 0 : _a.setNext(null);
        }
        this.length--;
        return this;
    }
    unshift(value) {
        var _a;
        const newNode = new NodeDoublyLinkList(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.setNext(this.head);
            (_a = this.head) === null || _a === void 0 ? void 0 : _a.setPrev(newNode);
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift() {
        if (this.length === 0)
            return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            let temp = this.head;
            this.head = temp.getNext();
            temp === null || temp === void 0 ? void 0 : temp.setNext(null);
            temp === null || temp === void 0 ? void 0 : temp.setPrev(null);
        }
        this.length--;
        return this;
    }
    get(index) {
        if (index < 0 && index > this.length)
            return undefined;
        if (index < this.length / 2) {
            let temp = this.head;
            for (let i = 0; i < index; i++) {
                temp = temp.getNext();
            }
            return temp;
        }
        else {
            let temp = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.getPrev();
            }
            return temp;
        }
    }
    set(index, value) {
        if (index < 0 && index > this.length)
            return undefined;
        let current = this.get(index);
        current === null || current === void 0 ? void 0 : current.setValue(value);
        return this;
    }
    insert(index, value) {
        var _a;
        if (index < 0 && index > this.length)
            return undefined;
        if (index === 0)
            return this.unshift(value);
        if (index === this.length - 1)
            return this.push(value);
        const newNode = new NodeDoublyLinkList(value);
        const current = this.get(index);
        newNode.setNext(current);
        newNode.setPrev(current.getPrev());
        (_a = current === null || current === void 0 ? void 0 : current.getPrev()) === null || _a === void 0 ? void 0 : _a.setNext(newNode);
        current === null || current === void 0 ? void 0 : current.setPrev(newNode);
        this.length++;
        return this;
    }
    remove(index) {
        var _a, _b;
        if (index < 0 && index > this.length)
            return undefined;
        if (index === 0)
            return this.shift();
        if (index === this.length - 1)
            return this.pop();
        const current = this.get(index);
        (_a = current === null || current === void 0 ? void 0 : current.getPrev()) === null || _a === void 0 ? void 0 : _a.setNext(current.getNext());
        (_b = current === null || current === void 0 ? void 0 : current.getNext()) === null || _b === void 0 ? void 0 : _b.setPrev(current.getPrev());
        current === null || current === void 0 ? void 0 : current.setNext(null);
        current === null || current === void 0 ? void 0 : current.setPrev(null);
        this.length--;
        return this;
    }
}
const doublyLinkList = new DobulyLinkList();
doublyLinkList.push(12);
doublyLinkList.push(18);
doublyLinkList.push(15);
doublyLinkList.insert(1, 22);
console.log("get: ", doublyLinkList.get(3));
doublyLinkList.remove(3);
doublyLinkList.printList();
console.log(doublyLinkList.getLength());
