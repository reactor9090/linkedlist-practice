# linkedlist-practice

This project is a custom implementation of a singly linked list in JavaScript. It was built as a learning exercise to understand how linked lists work under the hood, without relying on built-in array methods.

A linked list is a linear data structure where elements (called nodes) are connected through pointers. Each node contains a value and a reference to the next node in the sequence.

#Features
The LinkedList class supports the following methods:

append(value) → Adds a new node containing value to the end of the list.
prepend(value) → Adds a new node containing value to the start of the list.
size() → Returns the total number of nodes in the list.
head() → Returns the first node in the list.
tail() → Returns the last node in the list.
at(index) → Returns the node at the given index.
pop() → Removes the last element from the list and returns it.
contains(value) → Returns true if the list contains the given value, otherwise false.
find(value) → Returns the index of the node containing the given value, or null if not found.
toString() → Returns a string representation of the list in the format: ( value1 ) -> ( value2 ) -> ( value3 ) -> null
