class NodeDoublyLinkList<T> {
  private value: T;
  private next: NodeDoublyLinkList<T> | null;
  private prev: NodeDoublyLinkList<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  public getValue() {
    return this.value;
  }

  public setValue(value: T) {
    this.value = value;
  }

  public getNext() {
    return this.next;
  }

  public setNext(next: NodeDoublyLinkList<T> | null) {
    this.next = next;
  }

  public getPrev() {
    return this.prev;
  }

  public setPrev(prev: NodeDoublyLinkList<T> | null) {
    this.prev = prev;
  }
}

class DobulyLinkList<T> {
  private head: NodeDoublyLinkList<T> | null;
  private tail: NodeDoublyLinkList<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.getValue());
      temp = temp.getNext();
    }
  }

  public getHead() {
    return this.head;
  }

  public getTail() {
    return this.tail;
  }

  public getLength() {
    return this.length;
  }

  public push(value: T) {
    const newNode = new NodeDoublyLinkList<T>(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.setPrev(this.tail!);
      this.tail?.setNext(newNode);
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  public pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.tail;
      this.tail = temp!.getPrev();
      temp?.setPrev(null);
      this.tail?.setNext(null);
    }
    this.length--;
    return this;
  }

  public unshift(value: T) {
    const newNode = new NodeDoublyLinkList<T>(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.setNext(this.head);
      this.head?.setPrev(newNode);
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  public shift() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      this.head = temp!.getNext();
      temp?.setNext(null);
      temp?.setPrev(null);
    }
    this.length--;
    return this;
  }

  public get(index: number) {
    if (index < 0 && index > this.length) return undefined;

    if (index < this.length / 2) {
      let temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp!.getNext();
      }
      return temp;
    } else {
      let temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp!.getPrev();
      }
      return temp;
    }
  }

  public set(index: number, value: T) {
    if (index < 0 && index > this.length) return undefined;
    let current = this.get(index);
    current?.setValue(value);
    return this;
  }

  public insert(index: number, value: T) {
    if (index < 0 && index > this.length) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.length - 1) return this.push(value);
    const newNode = new NodeDoublyLinkList<T>(value);
    const current = this.get(index);
    newNode.setNext(current!);
    newNode.setPrev(current!.getPrev());
    current?.getPrev()?.setNext(newNode);
    current?.setPrev(newNode);
    this.length++;

    return this;
  }

  public remove(index: number) {
    if (index < 0 && index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const current = this.get(index);
    current?.getPrev()?.setNext(current.getNext());
    current?.getNext()?.setPrev(current.getPrev());
    current?.setNext(null);
    current?.setPrev(null);
    this.length--;
    return this;
  }
}

const doublyLinkList = new DobulyLinkList<number>();
doublyLinkList.push(12);
doublyLinkList.push(18);

doublyLinkList.push(15);
doublyLinkList.insert(1, 22);
console.log("get: ", doublyLinkList.get(3));
doublyLinkList.remove(3);
doublyLinkList.printList();
console.log(doublyLinkList.getLength());
