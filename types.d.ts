import { BTSNode } from "./BTS/BTSNode";
import { LinkListNode } from "./linklist/LinkList";
import { BTS } from "./BTS/BTS";
export interface Stack<T> {
  size(): number;
  isEmpty(): void;
  top: LinkListNode<T> | null;
  push(value: T): void;
  pop(): LinkListNode<T> | null;
}

export interface IBTSNode<T> {
  value: T;
  left: BTSNode<T> | null;
  right: BTSNode<T> | null;
}

export interface IBTS<T> {
  root: BTSNode<T> | null;
  insert(value: T): BTS<T> | undefined;
  contain(value: T): boolean;
  minValueNode(currentNode: BTSNode<T> | null): BTSNode<T> | null;
}
