/**
 * 节流函数，对多次触发的函数，单位时间内只执行一次
 * @param {Function} fun 需被节流的函数
 * @param {Number} delay 单位时间
 */
export function throttle(fun, delay) {
  let last, deferTimer
  return function () {
    let that = this
    let _args = arguments
    let now = +new Date()
    if (last && now < last + delay) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function () {
        last = now
        fun.apply(that, _args)
      }, delay)
    } else {
      last = now
      fun.apply(that, _args)
    }
  }
}

/**
 * 防抖函数，对多次触发的函数，只执行最后一次
 * @param {Function} fun 需被防抖的函数
 * @param {Number} delay 单位时间
 */
export function debounce(fun, delay) {
  return function (args) {
    let that = this
    clearTimeout(fun.id)
    fun.id = setTimeout(function () {
      fun.call(that, args)
    }, delay)
  }
}

/**
 * 置换函数，置换数组中两个元素的位置
 * @param {Array} arr 源数组
 * @param {Number} indexA 索引A
 * @param {Number} indexB 索引B
 */
export function swap(arr, indexA, indexB) {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
}