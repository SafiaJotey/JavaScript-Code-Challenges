/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
};
isEmpty({ x: 5, y: 42 });
