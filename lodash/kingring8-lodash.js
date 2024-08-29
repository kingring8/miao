var kingring8 = function() {
  function compact(array) {
      return array.filter(function(item) {
          return Boolean(item);
      });
  }
  
  function chunk(array, size) {
      const result = [];
      for (let i = 0; i < array.length; i += size) {
          result.push(array.slice(i, i + size));
      }
      return result;
  }    
  
  function fill(array, value, start = 0, end = array.length) {
      start = Math.max(start, 0);
      end = Math.min(end, array.length);
      const count = end - start;
      const values = Array(count).fill(value);
      array.splice(start, count, ...values);
      return array;
  }
  
  function drop(array, amount = 1) {
      return array.slice(amount); // 使用 slice() 避免修改原数组
  }

  function findIndex(array, predicate) {
      for (let i = 0; i < array.length; i++) {
          if (predicate(array[i], i, array)) {
              return i;
          }
      }
      return -1; // 如果没有找到匹配项，返回 -1
  }
  
  function findLastIndex(array, predicate) {
      for (let i = array.length - 1; i >= 0; i--) {
          if (predicate(array[i], i, array)) {
              return i;
          }
      }
      return -1; // 如果没有找到匹配项，返回 -1
  }
  
  function flatten(array) {
      let result = [];
      array.forEach(item => {
          if (Array.isArray(item)) {
              result = result.concat(flatten(item));
          } else {
              result.push(item);
          }
      });
      return result;
  }

  return {
      compact: compact,
      chunk: chunk,
      fill: fill,
      drop: drop,
      findIndex: findIndex,
      findLastIndex: findLastIndex,
      flatten: flatten
  }
}();

                  
