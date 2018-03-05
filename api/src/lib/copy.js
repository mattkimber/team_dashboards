var copy = (source) => {
  var dest, v, k;
  dest = Array.isArray(source) ? [] : {};
  for (k in source) {
    v = source[k];
    dest[k] = (typeof v === "object") ? copy(v) : v;
  }
  return dest;
}

module.exports = copy;