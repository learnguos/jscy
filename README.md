## Jscy

[<img src="https://img.shields.io/badge/npm-v1.0.0-important?color=rgb(255,255,255)" style="zoom:130%;" />](https://github.com/learnguos/jscy)[<img src="https://data.jsdelivr.com/v1/package/npm/learnguos-toolkit/badge" style="zoom:130%;" />](https://www.jsdelivr.com/package/npm/jscy)[<img src="https://packagephobia.com/badge?p=axios" alt="install size" style="zoom:130%;" />](https://packagephobia.com/result?p=axios)[<img src="https://img.shields.io/badge/QQ%E4%BA%A4%E6%B5%81%E7%BE%A4-761530245-blue" style="zoom:130%;" />](https://imgtu.com/i/XuTQ5d)

## 功能函数

| 功能函数     | 说明                  |
| ------------ | --------------------- |
| jscyThrottle | 节流阀                |
| jscyRecount  | 防抖                  |
| jscyStore    | 本地存储-存储数据     |
| jscyExtract  | 本地存储-获取数据     |
| jscyDelete   | 本地存储-删除数据     |
| jscyEmpty    | 本地存储-删除全部数据 |
| jscyDeepCopy | 深拷贝                |

## 安装

```
npm i jscy --save
```

## 使用

#### 节流阀

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script type="module">
      // 1.导入jscyThrottle函数
      import { jscyThrottle } from '../jscy.min.js'

      var div = document.querySelectorAll('div')[0]
      div.addEventListener('click', () => {
        // 2.使用jscyThrottle函数实现节流阀
        jscyThrottle(() => {
          console.log('设置只允许两秒内触发一次')
        }, 2000)
      })
    </script>
    <style>
      div {
        width: 100px;
        height: 50px;
        background-color: rgb(113, 172, 187);
      }
    </style>
  </head>
  <body>
    <div>点击我</div>
  </body>
</html>
```

#### 防抖

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script type="module">
      // 1.导入jscyRecount函数
      import { jscyRecount } from '../jscy.min.js'

      var input = document.querySelectorAll('input')[0]
      input.addEventListener('input', () => {
        // 2.使用jscyRecount函数实现防抖效果
        jscyRecount(async () => {
          console.log('使用ois函数实现防抖')
        }, 500)
      })
    </script>
  </head>
  <body>
    <input type="text" />
  </body>
</html>
```


#### 本地存储-存储数据

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script type="module">
      // 1.导入jscyStore存储数据函数
      import { jscyStore } from '../jscy.min.js'

      // 2.定义要存储的数据
      let yy = [234, 23434, 2343243, 23423]

      // 3.使用jscyStore函数实现本地存储数据
      jscyStore('本地存储名字', yy)
    </script>
  </head>
  <body></body>
</html>
```

#### 本地存储-获取数据

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script type="module">
      // 1.导入jscyStore存储数据函数, jscyExtract获取数据函数
      import { jscyStore, jscyExtract } from '../jscy.min.js'

      // 2.定义要存储的数据
      let yy = [234, 23434, 2343243, 23423]

      // 3.使用jscyStore函数存储数据
      jscyStore('本地存储名字', yy)

      // 4.使用jscyExtract函数获取数据
      console.log(jscyExtract('本地存储名字'))
    </script>
  </head>
  <body></body>
</html>
```

#### 本地存储-删除数据

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script type="module">
      // 1.导入jscyStore存储数据函数、jscyDelete删除数据函数
      import { jscyStore, jscyDelete } from '../jscy.min.js'

      // 2.定义要存储的数据
      let yy = [234, 23434, 2343243, 23423]

      // 3.使用jscyStore函数存储数据
      jscyStore('本地存储名字', yy)

      // 4.使用jscyDelete函数删除数据
      jscyDelete('本地存储名字')
    </script>
  </head>
  <body></body>
</html>
```

#### 本地存储-删除全部数据

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script type="module">
      // 1.导入jscyStore存储数据函数、jscyEmpty删除全部数据函数
      import { jscyStore, jscyEmpty } from '../jscy.min.js'

      // 2.定义要存储的数据
      let yy = [234, 23434, 2343243, 23423]

      // 3.jscyStore存储数据
      jscyStore('本地存储名字', yy)
      jscyStore('本地存储名字2', yy)

      // 4.使用jscyEmpt函数删除全部数据
      jscyEmpty()
    </script>
  </head>
  <body></body>
</html>
```

#### 深拷贝

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script type="module">
      // 1.导入 jscyDeepCopy 函数
      import { jscyDeepCopy } from '../jscy.min.js'

      // 2.定义要拷贝的两个对象 yy对象为要拷贝给的对象 ff对象为被拷贝的对象
      let yy = {}
      let ff = { ddd: 'asds', jj: { gg: 100 } }

      // 3.使用 jscyDeepCopy 函数实现深拷贝
      // 第一个参数为 要拷贝给的对象 第二个参数为为被拷贝的对象
      jscyDeepCopy(yy, ff)

      // 4. 测试效果
      yy.jj.gg = 999
      console.log(yy)
      console.log(ff)
    </script>
  </head>
  <body></body>
</html>
```

...更多功能函数正在开发中



