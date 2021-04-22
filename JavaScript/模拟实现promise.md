## 基础版本

- 设定三个状态 `PENDING、FULFILLED、REJECTED` ，只能由`PENDING`改变为`FULFILLED、REJECTED`，并且只能改变一次
- `MyPromise`接收一个函数`executor`，`executor`有两个参数`resolve`方法和`reject`方法
- `resolve`将`PENDING`改变为`FULFILLED`
- `reject`将`PENDING`改变为`REJECTED`
- `promise`变为`FULFILLED`状态后具有一个唯一的`value`
- `promise`变为`REJECTED`状态后具有一个唯一的`reason`

```js
    const PENDING = 'pending';
    const FULFILLED = 'fulfilled';
    const REJECTED = 'rejected';

    function MyPromise(executor) {
      this.state = PENDING;
      this.value = null;
      this.reason = null;

      const resolve = (value) => {
        if (this.state === PENDING) {
          this.state = FULFILLED;
          this.value = value;
        }
      }

      const reject = (reason) => {
        if (this.state === PENDING) {
          this.state = REJECTED;
          this.reason = reason;
        }
      }

      try {
        executor(resolve, reject);
      } catch (reason) {
        reject(reason);
      }
    }
```

## then方法

- `then`方法接受两个参数`onFulfilled、onRejected`，它们分别在状态由`PENDING`改变为`FULFILLED、REJECTED`后调用
- 一个`promise`可绑定多个`then`方法
- `then`方法可以同步调用也可以异步调用
- 同步调用：状态已经改变，直接调用`onFulfilled`方法
- 异步调用：状态还是`PENDING`，将`onFulfilled、onRejected`分别加入两个函数数组`onFulfilledCallbacks、onRejectedCallbacks`，当异步调用`resolve`和`reject`时，将两个数组中绑定的事件循环执行。

```js
  function MyPromise(executor) {
      this.state = PENDING;
      this.value = null;
      this.reason = null;
      this.onFulfilledCallbacks = [];
      this.onRejectedCallbacks = [];

      const resolve = (value) => {
        if (this.state === PENDING) {
          this.state = FULFILLED;
          this.value = value;
          this.onFulfilledCallbacks.forEach(fun => {
            fun();
          });
        }
      }

      const reject = (reason) => {
        if (this.state === PENDING) {
          this.state = REJECTED;
          this.reason = reason;
          this.onRejectedCallbacks.forEach(fun => {
            fun();
          });
        }
      }

      try {
        executor(resolve, reject);
      } catch (reason) {
        reject(reason);
      }
    }

    MyPromise.prototype.then = function (onFulfilled, onRejected) {
      switch (this.state) {
        case FULFILLED:
          onFulfilled(this.value);
          break;
        case REJECTED:
          onFulfilled(this.value);
          break;
        case PENDING:
          this.onFulfilledCallbacks.push(() => {
            onFulfilled(this.value);
          })
          this.onRejectedCallbacks.push(() => {
            onRejected(this.reason);
          })
          break;
      }
    }
```

## then方法异步调用

如下面的代码：输入顺序是：`1、2、ConardLi`

```js
console.log(1);

let promise = new Promise((resolve, reject) => {
  resolve('ConardLi');
});

promise.then((value) => {
  console.log(value);
});

console.log(2);
```

虽然`resolve`是同步执行的，我们必须保证`then`是异步调用的，我们用`settimeout`来模拟异步调用（并不能实现微任务和宏任务的执行机制，只是保证异步调用）

```js
    MyPromise.prototype.then = function (onFulfilled, onRejected) {
      if (typeof onFulfilled != 'function') {
        onFulfilled = function (value) {
          return value;
        }
      }
      if (typeof onRejected != 'function') {
        onRejected = function (reason) {
          throw reason;
        }
      }
      switch (this.state) {
        case FULFILLED:
          setTimeout(() => {
            onFulfilled(this.value);
          }, 0);
          break;
        case REJECTED:
          setTimeout(() => {
            onRejected(this.reason);
          }, 0);
          break;
        case PENDING:
          this.onFulfilledCallbacks.push(() => {
            setTimeout(() => {
              onFulfilled(this.value);
            }, 0);
          })
          this.onRejectedCallbacks.push(() => {
            setTimeout(() => {
              onRejected(this.reason);
            }, 0);
          })
          break;
      }
    }

```

## then方法链式调用

保证链式调用，即`then`方法中要返回一个新的`promise`，并将`then`方法的返回值进行`resolve`。

> 注意：这种实现并不能保证`then`方法中返回一个新的`promise`，只能保证链式调用。

```js
    MyPromise.prototype.then = function (onFulfilled, onRejected) {
      if (typeof onFulfilled != 'function') {
        onFulfilled = function (value) {
          return value;
        }
      }
      if (typeof onRejected != 'function') {
        onRejected = function (reason) {
          throw reason;
        }
      }
      const promise2 = new MyPromise((resolve, reject) => {
        switch (this.state) {
          case FULFILLED:
            setTimeout(() => {
              try {
                const x = onFulfilled(this.value);
                resolve(x);
              } catch (reason) {
                reject(reason);
              }
            }, 0);
            break;
          case REJECTED:
            setTimeout(() => {
              try {
                const x = onRejected(this.reason);
                resolve(x);
              } catch (reason) {
                reject(reason);
              }
            }, 0);
            break;
          case PENDING:
            this.onFulfilledCallbacks.push(() => {
              setTimeout(() => {
                try {
                  const x = onFulfilled(this.value);
                  resolve(x);
                } catch (reason) {
                  reject(reason);
                }
              }, 0);
            })
            this.onRejectedCallbacks.push(() => {
              setTimeout(() => {
                try {
                  const x = onRejected(this.reason);
                  resolve(x);
                } catch (reason) {
                  reject(reason);
                }
              }, 0);
            })
            break;
        }
      })
      return promise2;
    }

```

## catch方法

若上面没有定义`reject`方法，所有的异常会走向`catch`方法：

```js
MyPromise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected);
};
```


## finally方法

不管是`resolve`还是`reject`都会调用`finally`。

```js
MyPromise.prototype.finally = function(fn) {
    return this.then(value => {
       fn();
       return value;
    }, reason => {
        fn();
        throw reason;
    });
};
```

## Promise.resolve


`Promise.resolve`用来生成一个直接处于`FULFILLED`状态的Promise。

```js
MyPromise.reject = function(value) {
  return new MyPromise((resolve, reject) => {
    resolve(value);
  });
};
```

## Promise.reject

`Promise.reject`用来生成一个直接处于`REJECTED`状态的Promise。

```js
MyPromise.reject = function(reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason);
  });
};
```


## all方法

接受一个`promise`数组，当所有`promise`状态`resolve`后，执行`resolve`

```js
    MyPromise.all = function (promises) {
      return new Promise((resolve, reject) => {
        if (promises.length === 0) {
          resolve([]);
        } else {
          let result = [];
          let index = 0;
          for (let i = 0; i < promises.length; i++) {
            promises[i].then(data => {
              result[i] = data;
              if (++index === promises.length) {
                resolve(result);
              }
            }, err => {
              reject(err);
              return;
            });
          }
        }
      });
    }

```

## race方法


接受一个`promise`数组，当有一个`promise`状态`resolve`后，执行`resolve`

```js
    MyPromise.race = function (promises) {
      return new Promise((resolve, reject) => {
        if (promises.length === 0) {
          resolve();
        } else {
          let index = 0;
          for (let i = 0; i < promises.length; i++) {
            promises[i].then(data => {
              resolve(data);
            }, err => {
              reject(err);
              return;
            });
          }
        }
      });
    }
```
