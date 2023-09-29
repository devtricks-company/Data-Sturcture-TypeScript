"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkStack_1 = require("./LinkStack");
const stack = new LinkStack_1.LinkStack(12);
stack.push(15);
console.log("pop value:", stack.pop());
