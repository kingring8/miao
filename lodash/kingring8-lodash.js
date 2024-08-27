// 立即执行函数
var coderhf = (function () {
    // 工具函数，根据数据类型，返回相应的函数
    function iterater(iterater) {
      if (typeof iterater === 'object' && iterater !== null) {
        if (Array.isArray(iterater)) {
          iterater = this.matchesProperty(iterater)
        } else {
          iterater = this.matches(iterater)
        }
      } else if (typeof iterater === 'number' || typeof iterater === 'string') {
        iterater = this.property(iterater)
      } else if (iterater === null) {
        iterater = it => it
      }
      return iterater
    }