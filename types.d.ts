import { LinkListNode } from "./linklist/LinkList";

export interface Stack<T> {
  size: () => number;
  isEmpty: () => void;
  top: LinkListNode<T> | null;
  push: (value: T) => void;
  pop: () => LinkListNode<T> | null;
}
