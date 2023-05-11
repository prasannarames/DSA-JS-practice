class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  insert(index, value) {
    const newNode = {
      value: value,
      next: null,
    };

    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.length) {
      this.append(value);
    } else if (index < 0) {
      console.log("cannot read negative values");
    } else {
      const leader = this.traverseToIndex(index - 1);

      newNode.next = leader.next;
      leader.next = newNode;
    }
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const rNode = leader.next;
    leader.next = rNode.next;
    this.length--;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let myLL = new LinkedList(20);

myLL.append(30);
myLL.append(40);
myLL.append(50);
myLL.prepend(10);
myLL.insert(2, "hello");
myLL.remove(3);
// myLL.remove(2)

console.log(myLL.printList());
