// Return and array with duplicates

const duplicate = (value, n) => {
  if (n <= 0) return [];
  else {
    res = [];
    for (let i = 0; i < n; i++) {
      res[i] = value;
    }
    return res;
  }
};

module.exports = duplicate;
