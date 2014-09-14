function QuickFind(n) {
  this.id = new Array(n);

  for (var i = 0; i < n; i += 1) {
    this.id[i] = i;
  }
}

QuickFind.prototype.union = function (p, q) {
  if ( this.connected(p, q) ) {
    return;
  }

  var qid = this.id[q];
  var pid = this.id[p];

  // replace all pid with qid
  this.id = this.id.map(function (id) {
    if ( id === pid ) {
      return qid;
    }

    return id;
  });
};

QuickFind.prototype.connected = function (p, q) {
  return this.id[p] === this.id[q];
};

module.exports = QuickFind;
