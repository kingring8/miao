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
  
     function fill(array, value, start = 0, end = array.length){
      start = Math.max(start, 0);
      end = Math.min(end, array.length);
      const count = end - start;
      const values = Array(count).fill(value);
      array.splice(start, count, ...values);
      return array;
     }
  
       function drop(array, amount = 1) {
      return array.slice(amount); 
     }
 
     function flatten(array) {
      let result = [];
     for(const item of array){
        if(Array.isArray(item)){
            result.push(...item)
        }else{
            result.push(item)
        }
     }
     return result
     }

      function flattenDeep(array){
        const result= []
     for(const item of array){
        if(Array.isArray(item)){
            result.push(...flattenDeep(item))
        }else{
            result.push(item)
        }
     }
     return result
     }
      function flattenDepth(array,depth=1){
     const result=[]
     for(const item of array){
        if(Array.isArray(item)&&depth>0){
            result.push(...flattenDepth(item,depth-1))
        }else{
            result.push(item)
        }
     }
       return result
     }
     function fromPairs(pairs){
     const result={}
        for(const [key,value]of pairs){
            result[key]=value
        }
        return result
     }
     function head(array){
        if(!array){
            return undefined
        }else{
            return array[0]
        }
     }
     function initial(array){
        array.pop()
        return array
     }
     function join(array,separator=","){
        let result=""
        for(let i=0;i<array.length;i++){
            result +=array[i]
            if(i<array.length-1){
                result+=separator
            }
        }
        return result
     }
     function last(array){
        return array[array.length-1]
     }
     function lastIndexOf(array,value,fromIndex=array.length-1){
        if(fromIndex<0){
            fromIndex =array.length+fromIndex
        }
     }
     function pull(array,...values){
            return array.filter(item=>!values.includes(item))
     }
     function reverse(array){
        let reversedArray=[]
        for(let i=array.length-1;i>=0;i--){
            reversedArray.push(array[i])
        }
        return reversedArray
     }
     function sortedIndex(array,value,compare=(a,b)=>a-b){
     let low =0
     let high=array.length
     while(low<high){
        const mid = Math.floor((low+high)/2)
        if(compare(array[mid]),value<0){
            low=mid+1
        }else{
            high=mid
        }
        }
        return low
     }
     
     
     function union(...arrays) {
        // 创建一个新的 Set 实例来存储唯一的值
        const resultSet = new Set();
        
        // 遍历每一个传入的数组
        arrays.forEach(array => {
          // 遍历当前数组中的每一个元素
          array.forEach(value => {
            // 将元素添加到 Set 中，Set 会自动去重
            resultSet.add(value);
          });
        });
        
        // 将 Set 转换为数组并返回
        return Array.from(resultSet);
      }
      function isArray(obj){
        return obj instanceof Array;
      }
      function isArguments(obj){
        return Object.prototype.toString.call(obj) ===`[object Arguments]` 
      }
      function isBoolean(obj){
        return Object.prototype.toString.call(obj)===
        `[object Boolean]`
      }
      function isDate(obj){
        return Object.prototype.toString.call(obj)===
        `[object Date]`
      }
      function isElement(obj){
        return Object.prototype.toString.call(obj)===
        `[object Element]`
      }
      function isEmpty(obj){
        return Object.prototype.toString.call(obj)===
        `[object Empty]`
      }

      function isEqual(obj){
        return Object.prototype.toString.call(obj)===
        `[object Equal`
      }
     return {
      compact: compact,
      chunk: chunk,
      fill: fill,
      drop: drop,
      flatten: flatten,
      flattenDeep:flattenDeep,
      flattenDepth:flattenDepth,
      fromPairs:fromPairs,
      head:head,
      initial:initial,
      join:join,
      last:last,
      lastIndexOf:lastIndexOf,
      pull:pull,
      reverse:reverse,
      sortedIndex:sortedIndex,
      union:union,
      isArray:isArray,
      isArguments:isArguments,
      isBoolean:isBoolean,
      isDate:isDate,
      isElement:isElement,
      isEmpty:isEmpty,
      isEqual:isEqual
    }
}()

                  
