
## 原理

```js
a instanceof Object
```

判断`Object`的prototype是否在`a`的原型链上。

## 实现

```js
    function myInstanceof(target, origin) {
      const proto = target.__proto__;
      if (proto) {
        if (origin.prototype === proto) {
          return true;
        } else {
          return myInstanceof(proto, origin)
        }
      } else {
        return false;
      }
    }
```

