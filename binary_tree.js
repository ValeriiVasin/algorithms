function BinaryTree() {
  this._root = null;
}

BinaryTree.prototype.insert = function(value) {
  this._root = this._insert(this._root, value);
  return this;
};

BinaryTree.prototype._insert = function(node, value) {

  // return newly created node
  if (node === null) {
    return {
      value: value,
      left: null,
      right: null
    };
  }

  if (value > node.value) {
    node.right = this._insert(node.right, value);
  } else if (value < node.value) {
    node.left = this._insert(node.left, value);
  }

  // binary tree could not contain elements with same values

  return node;
};

BinaryTree.prototype.remove = function(value) {
  this._root = this._remove(this._root, value);
  return this;
};

BinaryTree.prototype._remove = function(node, value) {
  if (node === null) {
    return null;
  }

  if (node.value < value) {
    node.right = this._remove(node.right, value);
  } else if (node.value > value) {
    node.left = this._remove(node.left, value);
  } else if (node.value === value) {
    if (node.left === null) {
      return node.right;
    }

    if (node.right === null) {
      return node.left;
    }

    // node has 2 children
    var _node = node;
    node = this._min(_node.right);
    node.right = this._removeMin(_node.right);
    node.left = _node.left;
  }

  return node;
};

BinaryTree.prototype._removeMin = function(node) {
  if (node === null) {
    return null;
  }

  if (node.left === null) {
    return node.right;
  }

  node.left = this._removeMin(node.left);

  return node;
};

BinaryTree.prototype._min = function(node) {
  if (node === null) {
    return null;
  }

  if (node.left === null) {
    return node;
  }

  return this._min(node.left);
};

BinaryTree.prototype._max = function(node) {
  if (node === null) {
    return null;
  }

  if (node.right === null) {
    return node;
  }

  return this._max(node.right);
};

// in-order traverse: (left, root, right)
BinaryTree.prototype.traverse = function(callback) {
  this._traverse(this._root, callback);
};

BinaryTree.prototype._traverse = function(node, callback) {
  if (node === null) {
    return;
  }

  this._traverse(node.left, callback);
  callback(node.value);
  this._traverse(node.right, callback);
};

BinaryTree.prototype.findMin = function() {
  var node = this._min(this._root);
  return node && node.value;
};

BinaryTree.prototype.findMax = function() {
  var node = this._max(this._root);
  return node && node.value;
};

BinaryTree.prototype.toString = function() {
  return JSON.stringify(this._root);
};

var arr = [5, 1, 2];

var BT = new BinaryTree();
arr.forEach(BT.insert.bind(BT));

console.log('Min: %d; Max: %d', BT.findMin(), BT.findMax());
BT.remove(1);
console.log('Min: %d; Max: %d', BT.findMin(), BT.findMax());
console.log('Traverse:');
BT.traverse(console.log.bind(console));
