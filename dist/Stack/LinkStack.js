"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkStack = void 0;
const LinkList_1 = require("../linklist/LinkList");
class LinkStack {
    constructor(value) {
        this.linkList = new LinkList_1.LinkList(value);
        this.top = this.linkList.getHead();
    }
    size() {
        return this.linkList.getLength();
    }
    isEmpty() {
        if (this.linkList.getLength()) {
            return false;
        }
        else {
            return true;
        }
    }
    push(value) {
        this.top = this.linkList.unshift(value);
    }
    pop() {
        return this.linkList.shift();
    }
}
exports.LinkStack = LinkStack;
