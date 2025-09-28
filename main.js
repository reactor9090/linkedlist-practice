class Node {
  static count = 0;
  static nodeArray = [];

  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;

    Node.nodeArray.push(this);
    Node.count++;
  }

  static returnCounter() {
    return Node.count;
  }
}

class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  size() {
    return Node.returnCounter();
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    for (let i in Node.nodeArray) {
      if (index === Number(i)) {
        return Node.nodeArray[i];
      }
    }
    return `couldnt find the node with index ${index}`;
  }

  pop() {
    let current = this.head;
    while (current !== null) {
      if (current.nextNode === null) {
        let removedNode = current;
        this.head = null;
        this.tail = null;
        return { message: "the removed node is: ", removedNode };
      } else if (current.nextNode && current.nextNode.nextNode === null) {
        let removedNode = current.nextNode;
        current.nextNode = null;
        this.tail = current;
        return { message: "the removed node is: ", removedNode };
      }
      current = current.nextNode;
    }
  }

  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let counter = 0;

    while (current !== null) {
      if (current.value === value) {
        return counter;
      }
      current = current.nextNode;
      counter++;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let finalString = "";

    while (current !== null) {
      finalString += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return finalString + "null";
  }
}

const list = new LinkedList();

// list.append("valuepassed1");
// list.append("valuepassed2");
// list.append("valuepassed3");
// list.append("valuepassed4");
// list.append("valuepassed5");

// list.prepend("prependedvalue1");
// list.prepend("prependedvalue2");
// list.prepend("prependedvalue3");

// console.log(list);
// console.log("There are " + list.size() + " nodes in the list");

// console.log(list.tail);
// console.log(list.at(0));
// console.log(list);

// console.log(list.tail);
// console.log(list);
// console.log(list.pop());

// console.log(list);

// console.log(list.contains("prependedvalue1"));

// console.log(list.find("valuepassed12"));

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
