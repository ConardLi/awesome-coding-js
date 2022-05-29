---
{
  "title": "异步循环打印",
}
---
使用`promise + async await`实现异步循环打印

```js
    var sleep = function (time, i) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve(i);
        }, time);
      })
    };


    var start = async function () {
      for (let i = 0; i < 6; i++) {
        let result = await sleep(1000, i);
        console.log(result);
      }
    };

    start();
```