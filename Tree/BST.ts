class BSTNode<T> {
  private value: T;
  private left: BSTNode<T> | null;
  private right: BSTNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  public getValue() {
    return this.value;
  }

  public getLeft() {
    return this.left;
  }

  public setLeft(node: BSTNode<T> | null) {
    this.left = node;
  }

  public getRight() {
    return this.right;
  }

  public setRight(node: BSTNode<T> | null) {
    this.right = node;
  }
}

class BST<T> {
  private root: BSTNode<T> | null;
  constructor() {
    this.root = null;
  }

  public getRoot(): BSTNode<T> | null {
    return this.root;
  }

  public setRoot(node: BSTNode<T> | null): void {
    this.root = node;
  }

  public insert(value: T) {
    const newNode = new BSTNode<T>(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.getValue() === temp.getValue()) return undefined;
      if (newNode.getValue() < temp.getValue()) {
        if (temp.getLeft() === null) {
          temp.setLeft(newNode);
          return this;
        }
        temp = temp.getLeft()!;
      } else if (newNode.getValue() > temp.getValue()) {
        if (temp.getRight() === null) {
          temp.setRight(newNode);
          return this;
        }
        temp = temp.getRight()!;
      }
    }
  }

  public contain(value: T): boolean {
    this.root === null && false;
    let temp = this.root;
    while (temp) {
      if (value < temp.getValue()) {
        temp = temp.getLeft();
      } else if (value > temp.getValue()) {
        temp = temp.getRight();
      } else if (value === temp.getValue()) {
        return true;
      }
    }

    return false;
  }
  public minumum(): T | null {
    if (this.root === null) return null;
    let temp = this.root;
    let min = null;
    while (temp) {
      min = temp.getValue();
      temp = temp.getLeft()!;
    }

    return min;
  }

  public maximum(): T | null {
    if (this.root === null) return null;
    let temp = this.root;
    let max = null;
    while (temp) {
      max = temp.getValue();
      temp = temp.getRight()!;
    }
    return max;
  }
}

const bst = new BST<number>();
bst.insert(5);

console.log(bst);

bst.insert(15);

console.log(bst);

bst.insert(3);

console.log(bst);

bst.insert(87);
console.log(bst);

console.log(bst.contain(15));
console.log(bst.minumum());
console.log(bst.maximum());
