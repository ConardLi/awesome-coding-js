---
{
  "title": "EventEmitter",
}
---
## 观察者模式

![image](http://img.blog.csdn.net/20161126191512446)

这就类似我们在微信平台订阅了公众号 , 当它有新的文章发表后，就会推送给我们所有订阅的人。

我们作为订阅者不必每次都去查看这个公众号有没有新文章发布，公众号作为发布者会在合适时间通知我们。

我们与公众号之间不再强耦合在一起。公众号不关心谁订阅了它， 不管你是男是女还是宠物狗，它只需要定时向所有订阅者发布消息即可。

### 观察者模式的优点

- 可以广泛应用于异步编程，它可以代替我们传统的回调函数 
- 我们不需要关注对象在异步执行阶段的内部状态，我们只关心事件完成的时间点
- 取代对象之间硬编码通知机制，一个对象不必显式调用另一个对象的接口，而是松耦合的联系在一起 。

虽然不知道彼此的细节，但不影响相互通信。更重要的是，其中一个对象改变不会影响另一个对象。

## Nodejs的EventEmitter

`Nodejs`的`EventEmitter`就是观察者模式的典型实现，`Nodejs`的`events`模块只提供了一个对象： `events.EventEmitter``。EventEmitter` 的核心就是事件触发与事件监听器功能的封装。

> Node.js 里面的许多对象都会分发事件：一个 net.Server 对象会在每次有新连接时触发一个事件， 一个 fs.readStream 对象会在文件被打开的时候触发一个事件。 所有这些产生事件的对象都是 events.EventEmitter 的实例。

### Api

**addListener(event, listener)**

为指定事件添加一个监听器，默认添加到监听器数组的尾部。

**removeListener(event, listener)**

移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。它接受两个参数，第一个是事件名称，第二个是回调函数名称。

**setMaxListeners(n)**

默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。

**once(event, listener)**

为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。

**emit(event, [arg1], [arg2], [...])**

按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 `true`，否则返回 `false`。

### 基本使用

```js
var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function listener1() {
   console.log('监听器 listener1 执行。');
}

// 监听器 #2
var listener2 = function listener2() {
  console.log('监听器 listener2 执行。');
}

// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，调用一次，处理函数为 listener2
eventEmitter.once('connection', listener2);

// 处理 connection 事件 
eventEmitter.emit('connection');

// 处理 connection 事件 
eventEmitter.emit('connection');
```

## 手动实现EventEmitter

```js
    function EventEmitter() {
      this._maxListeners = 10;
      this._events = Object.create(null);
    }

    // 向事件队列添加事件
    // prepend为true表示向事件队列头部添加事件
    EventEmitter.prototype.addListener = function (type, listener, prepend) {
      if (!this._events) {
        this._events = Object.create(null);
      }
      if (this._events[type]) {
        if (prepend) {
          this._events[type].unshift(listener);
        } else {
          this._events[type].push(listener);
        }
      } else {
        this._events[type] = [listener];
      }
    };

    // 移除某个事件
    EventEmitter.prototype.removeListener = function (type, listener) {
      if (Array.isArray(this._events[type])) {
        if (!listener) {
          delete this._events[type]
        } else {
          this._events[type] = this._events[type].filter(e => e !== listener && e.origin !== listener)
        }
      }
    };

    // 向事件队列添加事件，只执行一次
    EventEmitter.prototype.once = function (type, listener) {
      const only = (...args) => {
        listener.apply(this, args);
        this.removeListener(type, listener);
      }
      only.origin = listener;
      this.addListener(type, only);
    };

    // 执行某类事件
    EventEmitter.prototype.emit = function (type, ...args) {
      if (Array.isArray(this._events[type])) {
        this._events[type].forEach(fn => {
          fn.apply(this, args);
        });
      }
    };

    // 设置最大事件监听个数
    EventEmitter.prototype.setMaxListeners = function (count) {
      this.maxListeners = count;
    };
```

测试代码：

```js
    var emitter = new EventEmitter();

    var onceListener = function (args) {
      console.log('我只能被执行一次', args, this);
    }

    var listener = function (args) {
      console.log('我是一个listener', args, this);
    }

    emitter.once('click', onceListener);
    emitter.addListener('click', listener);

    emitter.emit('click', '参数');
    emitter.emit('click');

    emitter.removeListener('click', listener);
    emitter.emit('click');
```

## JavaScript自定义事件

`DOM`也提供了类似上面`EventEmitter`的`API`，基本使用：

```js
//1、创建事件
var myEvent = new Event("myEvent");

//2、注册事件监听器
elem.addEventListener("myEvent",function(e){
  
})

//3、触发事件
elem.dispatchEvent(myEvent);
```