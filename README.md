## jscy

[![](https://img.shields.io/badge/npm-v1.0.0-important?color=rgb(255,255,255))](https://github.com/learnguos/jscy)

[![](https://data.jsdelivr.com/v1/package/npm/learnguos-toolkit/badge)](https://www.jsdelivr.com/package/npm/learnguos-toolkit)

[![install size](https://packagephobia.com/badge?p=axios)](https://packagephobia.com/result?p=axios)

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

#### 实现节流阀

- 先下载 `toolkit.min.js`  或 安装依赖 `npm i learnguo-toolkit`在项目中使用

- 在HTML页面中使用 `t_throttle` 函数

  ```javascript
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script type="module">
        // 1.导入t_throttle函数
        import { t_throttle } from './toolkit.min.js'
  
        var div = document.querySelectorAll('div')[0]
        div.addEventListener('click', () => {
          // 2.使用throttle函数实现节流阀
          t_throttle(() => {
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
      <title>Document</title>
    </head>
    <body>
      <div>点击我发送请求</div>
    </body>
  </html>
  ```

#### 实现防抖

- 先下载 `toolkit.min.js` 或 安装依赖 `npm i learnguo-toolkit`在项目中使用

- 在HTML页面中使用 `t_ois` 函数

  ```javascript
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script type="module">
        // 1.导入t_ois函数
        import { t_ois } from './toolkit.min.js'
  
        var input = document.querySelectorAll('input')[0]
        input.addEventListener('input', () => {
          // 2.使用ios函数实现防抖效果
          t_ois(async () => {
            console.log('使用ois函数实现防抖')
          }, 500)
        })
      </script>
      <title>Document</title>
    </head>
    <body>
      <input type="text" />
    </body>
  </html>
  ```


#### 实现永久本地存储数据

- 先下载 `toolkit.min.js` 或 安装依赖 `npm i learnguo-toolkit`在项目中使用

- 在HTML页面中使用 `t_setItem` 函数

  ```javascript
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script type="module">
        // 1.导入t_setItem函数
        import { t_setItem } from "./toolkit.min.js";
  
        // 2.定义要存储的数据
        let yy = [234, 23434, 2343243, 23423];
  
        // 3.使用t_setItem函数实现永久本地存储
        t_setItem("本地存储名字", yy);
      </script>
      <title>Document</title>
    </head>
    <body></body>
  </html>
  
  ```

#### 实现永久本地获取数据

- 先下载 `toolkit.min.js` 或 安装依赖 `npm i learnguo-toolkit`在项目中使用

- 在HTML页面中使用 `t_getItem` 函数

  ```javascript
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script type="module">
        // 1.导入t_setItem函数、t_getItem函数
        import { t_setItem, t_getItem } from "./toolkit.min.js";
  
        // 2.定义要存储的数据
        let yy = [234, 23434, 2343243, 23423];
  
        // 3.使用t_setItem函数实现永久本地存储
        t_setItem("本地存储名字", yy);
  
        // 4.使用t_getItem函数实现获取永久本地存储数据
        console.log(t_getItem("本地存储名字"));
      </script>
      <title>Document</title>
    </head>
    <body></body>
  </html>
  
  ```

#### 实现永久本地删除数据

- 先下载 `toolkit.min.js` 或 安装依赖 `npm i learnguo-toolkit`在项目中使用

- 在HTML页面中使用 `t_removeItem` 函数

  ```javascript
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script type="module">
        // 1.导入t_setItem函数、t_getItem函数、t_removeItem函数
        import { t_setItem, t_getItem, t_removeItem } from "./toolkit.min.js";
  
        // 2.定义要存储的数据
        let yy = [234, 23434, 2343243, 23423];
  
        // 3.使用t_setItem函数实现永久本地存储
        t_setItem("本地存储名字", yy);
  
        // 4.使用t_getItem函数实现获取永久本地存储数据
        console.log(t_getItem("本地存储名字"));
  
        // 5.使用t_removeItem函数实现参数永久本地存储数据
        t_removeItem("本地存储名字");
      </script>
      <title>Document</title>
    </head>
    <body></body>
  </html>
  
  ```

#### 实现永久本地删除全部数据

- 先下载 `toolkit.min.js` 或 安装依赖 `npm i learnguo-toolkit`在项目中使用

- 在HTML页面中使用 `t_clear` 函数

  ```javascript
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script type="module">
        // 1.导入t_setItem函数、t_getItem函数、t_removeItem函数、t_clear函数
        import {
          t_setItem,
          t_getItem,
          t_removeItem,
          t_clear,
        } from "./toolkit.min.js";
  
        // 2.定义要存储的数据
        let yy = [234, 23434, 2343243, 23423];
        let uu = { ddd: "asds" };
  
        // 3.使用t_setItem函数实现永久本地存储
        t_setItem("本地存储名字", yy);
        t_setItem("uu", uu);
  
        // 4.使用t_getItem函数实现获取永久本地存储数据
        console.log(t_getItem("本地存储名字"));
  
        // 5.使用t_removeItem函数实现参数永久本地存储数据
        t_removeItem("本地存储名字");
  
        // 6.使用t_clear函数实现永久本地删除全部数据
        t_clear();
      </script>
      <title>Document</title>
    </head>
    <body></body>
  </html>
  
  ```

#### 实现深拷贝

- 先下载 `toolkit.min.js` 或 安装依赖 `npm i learnguo-toolkit`在项目中使用

- 在HTML页面中使用 `t_deepCopy` 函数

  ```javascript
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script type="module">
        // 1.导入 t_deepCopy 函数
        import { t_deepCopy } from './toolkit.min.js'
  
        // 2.定义要拷贝的两个对象 yy对象为要拷贝给的对象 ff对象为被拷贝的对象
        let yy = {}
        let ff = { ddd: 'asds', jj: { gg: 100 } }
  
        // 3.使用 t_deepCopy 函数实现深拷贝
        // 第一个参数为 要拷贝给的对象 第二个参数为为被拷贝的对象
        t_deepCopy(yy, ff)
  
        // 4. 测试效果
        yy.jj.gg = 999
        console.log(yy)
        console.log(ff)
      </script>
      <title>Document</title>
    </head>
    <body></body>
  </html>
  ```

...更多功能函数正在开发中



