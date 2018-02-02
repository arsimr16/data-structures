# data-structures
This is a project I completed as a student at [hackreactor](http://hackreactor.com). This project consisted of two sprints and was worked on with a pair.

## sprint 1
Implement queue and stack data structures without using arrays (instead using objects with numeric keys) in the following four instantiation patters:
* functional
* functional-shared
* prototypal
* pseudoclassical

**Queue** has the following methods:
* size() *returns the number of items in the queue*
* enqueue() *adds an item to the end of the queue*
* dequeue() *removes an item from the beginning of the queue*

**Stack** has the following methods:
* size() *returns the number of items in the stack*
* push() *adds an item to the top of the stack*
* pop() *removes an item from the top of the stack*

## sprint 2
Implement linked list, tree, graph, set, hash table, and binary search tree data structures

**Linked List**
Implement a linked list class in functional style with the following properties:
* .head *property, a linkedListNode instance*
* .tail *property, a linkedListNode instance*
* .addToTail() *method, takes a value and adds it to the end of the list*
* .removeHead() *method, removes the first node from the list and returns its value*
* .contains() *method, returns boolean reflecting whether or not the passed-in value is in the linked list*

**Tree**
Implement a tree class in functional with shared methods style with the following properties:
* .children *property, an array containing a number of subtrees*
* .addChild() *method, takes any value, sets that as the target of a node, and adds that node as a child of the tree*
* .contains() *method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node*

**Graph**
Implement a graph class in pseudoclassical style with the following properties:
* *It is an undirected graph. It does not have to be 'connected'.*
* .addNode() *method that takes a new node and adds it to the graph*
* .contains() *method that takes any node and returns a boolean reflecting whether it can be found in the graph*
* .removeNode() *method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.*
* .addEdge() *method that creates a edge (connection) between two nodes if they both are present within the graph*
* .hasEdge() *method that returns a boolean reflecting whether or not two nodes are connected*
* .removeEdge() *method that removes the connection between two nodes*
* .forEachNode() *method that traverses through the graph, calling a passed in function once on each node*

**Set**
Implement a set class in prototypal style with the following properties:
* .add() *method, takes any string and adds it to the set*
* .contains() *method, takes any string and returns a boolean reflecting whether it can be found in the set*
* .remove() *method, takes any string and removes it from the set, if present*
* *Sets should not use up any more space than necessary. Once a value is added to a set, adding it a second time should not increase the size of the set.*
* *Sets only need to handle string values.*

**Hash Table**
Implement a hashTable class in pseudoclassical style. Use the provided hash function to convert any key into an array index. A limitedArray helper has been provided for you, check out the source code for it in src/hashTableHelpers.js. Use it to store all inserted values rather than using a plain JavaScript array. The limitedArray, as you will see in the source code, provides get, set, and each methods which you should use in order to interact with it. Do not use the typical bracket notation for arrays when interacting with a limitedArray instance. Make the following properties appear on all instances:
* .insert() *method, inserts item into hash table*
* .retrieve() *method, retrieves item from hash table*
* .remove() *method, removes item from hash table*

**Binary Search Tree**
Implement a binarySearchTree class with the following properties:
* .left *property, a binary search tree (BST) where all values are lower than than it the current value.*
* .right *property, a BST where all values are higher than than it the current value.*
* .insert() *method, which accepts a value and places in the tree in the correct position.*
* .contains() *method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.*
* .depthFirstLog() *method, which accepts a callback and executes it on every value contained in the tree.*
