import { Stack } from "../types";
import { LinkListNode } from "../linklist/LinkList";
import { LinkList } from "../linklist/LinkList";

export class LinkStack<T> implements Stack<T> {
  public linkList: LinkList<T>;
  public top: LinkListNode<T> | null;

  constructor(value: T) {
    this.linkList = new LinkList<T>(value);
    this.top = this.linkList.getHead();
  }

  public size(): number {
    return this.linkList.getLength();
  }

  public isEmpty() {
    if (this.linkList.getLength()) {
      return false;
    } else {
      return true;
    }
  }
  public push(value: T) {
    this.top = this.linkList.unshift(value);
  }
  public pop(): LinkListNode<T> | null {
    return this.linkList.shift();
  }
}
