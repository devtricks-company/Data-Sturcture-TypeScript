import { LinkStack } from "./LinkStack";

const stack = new LinkStack<number>(12);

stack.push(15);

console.log("pop value:", stack.pop());
