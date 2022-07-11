// 节流阀
const t_throttle = (fun, time) => {
  // 节流阀减少事件触发得频率，说白了就是利用定时器控制每个固定时间段事件触发得次数。
  // 节流阀步骤一：定义布尔值，默认false，表示节流阀已关闭。
  if (!t_throttle.switch) {
    t_throttle.switch = false
  }
  // 节流阀步骤二：定义一个定时器函数。
  t_throttle.kk = () => {
    // 调用定时器函数相当于开启节流阀所以先把throttle.switch设为true
    t_throttle.switch = !t_throttle.switch
    // 启动定时器，在规定时间内，不能关闭节流阀。
    setTimeout(() => {
      t_throttle.switch = !t_throttle.switch
    }, time)
  }
  // 节流阀步骤三：在使用节流阀得事件前配置节流阀
  // 当第一次执行，节流阀是关闭得，顺利执行事件，且调用定时器函数，开启节流阀，开始倒计时。
  // 倒计时这段时间内，节流阀是打开得，所以要是事件执行第二次，就要等倒计时结束。
  // 倒计时结束后，节流阀关闭了，可以执行第二次事件，同时调用定时器函数，开启节流阀，反复循环。
  if (t_throttle.switch) {
  } else {
    t_throttle.kk()
    fun()
  }
}

// 防抖
const t_ois = (fun, time) => {
  //  防抖步骤一，设定关闭定时器。
  // 第一次先判断是否有挂载开启得定时器。
  if (t_ois.setTim) {
    clearTimeout(t_ois.setTim)
  }
  // 事件触发后，开启定时器，规定时间内不能执行事件处理程序。
  // 规定时间结束后，执行处理程序，如果这期间有事件被触发，则重新开始计时。
  // 直到规定时间内，没有第二次时间触发，才会执行时间处理程序。
  t_ois.setTim = setTimeout(() => {
    fun()
  }, time)
}

// 永久本地存储
const t_setItem = (name, data) => {
  // 序列化
  if (typeof data === 'object') {
    // 是数组或对象转化成json格式
    data = JSON.stringify(data)
  }
  // 存储
  window.localStorage.setItem(name, data)
}

// 永久本地获取
const t_getItem = (name) => {
  // 获取到数据
  const getItems = window.localStorage.getItem(name)
  try {
    // 反序列化
    return JSON.parse(getItems)
  } catch (err) {
    // 反序列化失败
    return getItems
  }
}

// 永久本地删除
const t_removeItem = (name) => {
  window.localStorage.removeItem(name)
}

// 永久本地删除全部数据
const t_clear = () => {
  window.localStorage.clear()
}

// 深拷贝
const t_deepCopy = (yy, gg) => {
  // yy 为要拷贝给的对象 gg 为要拷贝的对象啊
  // 2.开始遍历要拷贝的对象, k表示当前遍历的属性名, obj[k]表示当前遍历的属性值
  for (var k in gg) {
    // 3.把当前属性值赋值给一个变量
    var item = gg[k]
    // 4.开始判断每个属性是否为复杂数据类型，如果是则需要进一步操作。
    // 4.1先判断当前遍历到的属性是否为数组。
    if (item instanceof Array) {
      // 4.11已经判断为数组，先给要拷贝给的对象一个空数组。
      yy[k] = []
      // 4.12执行递归函数，传入两个参数，相当于一个是要拷贝给的对象一个是被拷贝的对象
      t_deepCopy(yy[k], item)
    } else if (item instanceof Object) {
      // 4.11已经判断为对象，先给要拷贝给的对象一个空对象。
      yy[k] = {}
      t_deepCopy(yy[k], item)
    } else {
      // 4.31简单数据类型直接赋值
      yy[k] = item
    }
  }
}
export {
  t_throttle,
  t_ois,
  t_setItem,
  t_getItem,
  t_removeItem,
  t_clear,
  t_deepCopy,
}
