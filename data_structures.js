/**
 * Stack implementation using linked list
 */
function Stack() {
  this._root = null;
}

Stack.prototype.isEmpty = function () {
  return this._root === null;
};

Stack.prototype.pop = function () {
  if ( this.isEmpty() ) {
    return null;
  }

  var item = this._root;
  this._root = item.next;
  return item.value;
};

Stack.prototype.push = function (value) {
  this._root = {
    value: value,
    next: this._root
  };

  return this;
};

/**
 * Implement Queue using linked list
 */
function Queue() {
  this._root = null;
  this._last = null;
}

Queue.prototype.enqueue = function (value) {
  var item = {
    value: value,
    next: null
  };

  if ( this.isEmpty() ) {
    this._root = this._last = item;
  } else {
    this._last.next = item;
    this._last = item;
  }

  return this;
};

Queue.prototype.dequeue = function () {
  if ( this.isEmpty() ) {
    return null;
  }

  var item = this._root;
  this._root = item.next;

  if ( this.isEmpty() ) {
    this._last = null;
  }

  return item.value;
};

Queue.prototype.isEmpty = function () {
  return this._root === null;
};
