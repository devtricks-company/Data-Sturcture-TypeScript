"use strict";
class LinkListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
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
            console.log(temp.value);
            temp = temp.next;
        }
    }
    getHead() {
        if (this.head !== null) {
            console.log("head is: ", this.head.value);
        }
        else {
            console.log("head is null");
        }
    }
    getTail() {
        if (this.tail !== null) {
            console.log("tail is: ", this.tail.value);
        }
        else {
            console.log("tail is null");
        }
    }
}
const linkList = new LinkList(1);
linkList.getHead();
