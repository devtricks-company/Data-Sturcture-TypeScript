class LinkListNode<T> {
  private value: T;
  private next: LinkListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }

  public getValue() {
    return this.value;
  }

  public setValue(value: T) {
    this.value = value;
  }

  public setNext(next: LinkListNode<T> | null) {
    this.next = next;
  }

  public getNext() {
    return this.next;
  }
}

class LinkList<T> {
  private head: LinkListNode<T> | null;
  private tail: LinkListNode<T> | null;
  private length: number;

  constructor(value: T) {
    const newNode = new LinkListNode<T>(value);
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
    } else {
      console.log("head is null");
    }
  }

  getTail() {
    if (this.tail !== null) {
      console.log("tail is: ", this.tail.getValue());
    } else {
      console.log("tail is null");
    }
  }

  getLength() {
    return this.length;
  }

  get(index: number) {
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp!.getNext();
    }
    return temp;
  }
  push(value: T) {
    const newNode = new LinkListNode<T>(value);
    this.tail?.setNext(newNode);
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    const lastNode = this.get(this.length - 2);
    lastNode?.setNext(null);
    this.tail = lastNode;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  unshift(value: T) {
    const newNode = new LinkListNode<T>(value);
    newNode.setNext(this.head);
    this.head = newNode;
    this.length++;
    return this;
  }

  shift() {
    const nextNode = this.get(1);
    this.head?.setNext(null);
    this.head = nextNode;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  set(index: number, value: T) {
    if (index < 0 && index > this.length - 1) return undefined;
    const currentNode = this.get(index);
    if (currentNode) {
      currentNode?.setValue(value);
      return true;
    }
    return false;
  }

  insert(index: number, value: T) {
    const newNode = new LinkListNode<T>(value);
    if (index < 0 && index > this.length) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    let prev = this.get(index - 1);
    let current = prev?.getNext();
    prev?.setNext(newNode);
    newNode.setNext(current!);
    this.length++;
    return true;
  }

  remove(index: number) {
    if (index < 0 && index > this.length) return undefined;
    if (index == this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let prev = this.get(index - 1);
    let current = prev?.getNext();
    let next = current?.getNext();
    prev?.setNext(next!);
    current?.setNext(null);
    return true;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp?.getNext();
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp?.getNext();
      temp?.setNext(prev);
      prev = temp;
      temp = next!;
    }
    return this;
  }
}

const linkList = new LinkList<number>(1);
linkList.push(2);
linkList.push(10);
linkList.insert(1, 6);
linkList.remove(1);
linkList.reverse();
linkList.printList();
