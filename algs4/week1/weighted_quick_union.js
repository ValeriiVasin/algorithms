function WeightedQuickUnion(n) {
  this.id = new Array(n);
  this.size = new Array(n);

  for (var i = 0; i < n; i += 1) {
    this.id[i] = i;
    this.size[i] = 1;
  }
}

WeightedQuickUnion.prototype._root = function(id) {
  while (this.id[id] !== id) {
    id = this.id[id];
  }

  return id;
};

WeightedQuickUnion.prototype.union = function(p, q) {
  var rootP = this._root(p);
  var rootQ = this._root(q);

  // connected
  if (rootP === rootQ) {
    return;
  }

  if (this.size[rootP] < this.size[rootQ]) {
    this.id[ rootP ] = rootQ;
    this.size[ rootQ ] += this.size[rootP];
  } else {
    this.id[ rootQ ] = rootP;
    this.size[rootP] += this.size[rootQ];
  }
};

WeightedQuickUnion.prototype.connected = function(p, q) {
  return this._root(p) === this._root(q);
};

module.exports = WeightedQuickUnion;
