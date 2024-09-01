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
     function fromPairs(){
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
                resutl +=seperator
            }
        }
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
      join:join
      
  }
}();

                  
