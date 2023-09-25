"use strict";
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
        if (this.head !== null) {
            console.log("head is: ", this.head.getValue());
        }
        else {
            console.log("head is null");
        }
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
        return this;
    }
    shift() {
        var _a;
        const nextNode = this.get(1);
        (_a = this.head) === null || _a === void 0 ? void 0 : _a.setNext(null);
        this.head = nextNode;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
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
const linkList = new LinkList(1);
linkList.push(2);
linkList.push(10);
linkList.insert(1, 6);
linkList.remove(1);
linkList.reverse();
linkList.printList();
