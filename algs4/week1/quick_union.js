function QuickUnion(n) {
  this.id = new Array(n);

  for (var i = 0; i < n; i += 1) {
    this.id[i] = i;
  }
}

QuickUnion.prototype._root = function(id) {
  while (this.id[id] !== id) {
    id = this.id[id];
  }

  return id;
};

QuickUnion.prototype.union = function(p, q) {
  var rootP = this._root(p);
  var rootQ = this._root(q);

  // connected
  if (rootP === rootQ) {
    return;
  }

  this.id[ rootP ] = rootQ;
};

QuickUnion.prototype.connected = function(p, q) {
  return this._root(p) === this._root(q);
};

module.exports = QuickUnion;
