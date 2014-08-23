function BinaryTree(value, opts) {
  if ( typeof opts === 'undefined' ) {
    opts = {};
  }

  this.value  = value;
  this.left   = opts.left || null;
  this.right  = opts.right || null;
  this.parent = opts.parent || null;
}

BinaryTree.prototype.insert = function (value) {
  // binary tree could not contain elements with same values

  if ( value > this.value ) {
    if ( this.right === null ) {
      this.right = new BinaryTree(value, { parent: this });
    } else {
      this.right.insert(value);
    }
    return;
  }

  if ( value < this.value ) {
    if ( this.left === null ) {
      this.left = new BinaryTree(value, { parent: this });
    } else {
      this.left.insert(value);
    }
  }
};

BinaryTree.prototype.remove = function (value) {
  // remove current node
  if ( this.value === value ) {
    if ( this.left && this.right ) {
      // has 2 children
      console.log('You are trying to remove node with two children.');
      return;
    }

    var child = this.left ? this.left : this.right;

    // has only left child
    if ( child ) {
      child.parent = this.parent;
      if ( this.parent.left === this ) {
        this.parent.left = child;
      } else {
        this.parent.right = child;
      }
      return;
    }

    // has no children
    if ( this.parent.left === this ) {
      this.parent.left = null;
    } else {
      this.parent.right = null;
    }

    return;
  }

  if ( value > this.value && this.right ) {
    this.right.remove(value);
  }

  if ( value < this.value && this.left ) {
    this.left.remove(value);
  }
};

// in-order traverse: (left, root, right)
BinaryTree.prototype.traverse = function (callback) {
  if ( this.left ) {
    this.left.traverse(callback);
  }

  callback( this.value );

  if ( this.right ) {
    this.right.traverse(callback);
  }
};

BinaryTree.prototype.findMin = function () {
  var root = this;
  var min;

  while ( root ) {
    min = root.value;
    root = root.left;
  }

  return min;
};

BinaryTree.prototype.findMax = function () {
  var root = this;
  var max;

  while ( root ) {
    max = root.value;
    root = root.right;
  }

  return max;
};

var arr = [ 5, 1, 2, 3, 18, 5, 9, -5, -9 ];

var BT = new BinaryTree( arr[0] );
arr.slice(1).forEach( BT.insert.bind(BT) );

console.log('Min: %d; Max: %d', BT.findMin(), BT.findMax() );
console.log('Traverse:');

BT.traverse(function (value) {
  console.log(value);
});
