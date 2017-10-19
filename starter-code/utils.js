module.exports = {
  // HELPER FUNCTIONS

  count: function(arr) {
    return arr.reduce(
      (prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),
      {},
    );
  },

  chunk: function(array, n) {
    return array
      .slice(0, ((array.length + n - 1) / n) | 0)
      .map((c, i) => array.slice(n * i, n * i + n));
  },

  getHighestValueOfObject: function(object) {
    return Object.keys(object).reduce(
      (a, b) => (object[a] > object[b] ? a : b),
    );
  },

  sortObjectByTwoKeys: function(array) {
    return array.sort(function(a, b) {
      if (a.year !== b.year) {
        return b.year - a.year;
      } else {
        return b.month - a.month;
      }
    });
  },
};
