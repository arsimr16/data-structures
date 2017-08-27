

// Instantiate a new graph
var Graph = function() {
  this._nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this._nodes[node] = this._nodes[node] || [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this._nodes[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (!this.contains(node)) {
    return;
  }
  
  for (var i in this._nodes[node]) {
    this._nodes[i][node] = undefined; 
  }
  
  this._nodes[node] = undefined;
};

// Returns a boolean indicating whether two specified nodes are connected.
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this._nodes[fromNode][toNode]) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }
  
  this._nodes[fromNode][toNode] = true;
  this._nodes[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }
  
  this._nodes[fromNode][toNode] = undefined;
  this._nodes[toNode][fromNode] = undefined;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i in this._nodes) {
    cb(i);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 
 // COMPLEXITIES:
 
 // .addNode => O(1)
 
 // .contains => O(1)
 
 // .removeNode => O(1)
 
 // .hasEdge => O(1)
 
 // .addEdge => O(1)
 
 // .removeEdge => O(1)
 
 // .forEachNode => O(n)
