---
{
  "title": "基于Promise的ajax封装",
}
---

基于把原生`ajax`封装为`Promise`形式。

参数封装的有点简陋...后面继续优化

```js
    function ajax(url, method = 'get', param = {}) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const paramString = getStringParam(param);
        if (method === 'get' && paramString) {
          url.indexOf('?') > -1 ? url += paramString : url += `?${paramString}`
        }
        xhr.open(method, url);
        xhr.onload = function () {
          const result = {
            status: xhr.status,
            statusText: xhr.statusText,
            headers: xhr.getAllResponseHeaders(),
            data: xhr.response || xhr.responseText
          }
          if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            resolve(result);
          } else {
            reject(result);
          }
        }
        // 设置请求头
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // 跨域携带cookie
        xhr.withCredentials = true;
        // 错误处理
        xhr.onerror = function () {
          reject(new TypeError('请求出错'));
        }
        xhr.timeout = function () {
          reject(new TypeError('请求超时'));
        }
        xhr.onabort = function () {
          reject(new TypeError('请求被终止'));
        }
        if (method === 'post') {
          xhr.send(paramString);
        } else {
          xhr.send();
        }
      })
    }

    function getStringParam(param) {
      let dataString = '';
      for (const key in param) {
        dataString += `${key}=${param[key]}&`
      }
      return dataString;
    }
```