
  var kingring8 = function() {
    function compact1(array) {
      return array.filter(function(item) {
        return Boolean(item);
      });
    }
  
  

  function chunk1(array,size){
    const result=[];
    for(let i=0;i<array.length;i+=size){
      result.push(array.slice(i,i+size))
    }
    return result;
  }
}() 