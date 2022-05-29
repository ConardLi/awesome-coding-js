---
{
  "title": "图片懒加载",
}
---


## 监听图片高度

图片，用一个其他属性存储真正的图片地址：

```html
  <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg" alt="">
  <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252_1280.jpg" alt="">
  <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2014/12/15/17/16/pier-569314_1280.jpg" alt="">
  <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2010/12/13/10/09/abstract-2384_1280.jpg" alt="">
  <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2015/10/24/11/09/drop-of-water-1004250_1280.jpg"
```

通过图片`offsetTop`和`window`的`innerHeight`，`scrollTop`判断图片是否位于可视区域。

```js
    var img = document.getElementsByTagName("img");
    var n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
    lazyload(); //页面载入完毕加载可是区域内的图片
    // 节流函数，保证每200ms触发一次
    function throttle(event, time) {
      let timer = null;
      return function (...args) {
        if (!timer) {
          timer = setTimeout(() => {
            timer = null;
            event.apply(this, args);
          }, time);
        }
      }
    }
    window.addEventListener('scroll', throttle(lazyload, 200))
    function lazyload() { //监听页面滚动事件
      var seeHeight = window.innerHeight; //可见区域高度
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
      for (var i = n; i < img.length; i++) {
        console.log(img[i].offsetTop, seeHeight, scrollTop);
        if (img[i].offsetTop < seeHeight + scrollTop) {
          if (img[i].getAttribute("src") == "loading.gif") {
            img[i].src = img[i].getAttribute("data-src");
          }
          n = i + 1;
        }
      }
    }
```

## IntersectionObserver

> IntersectionObserver接口 (从属于Intersection Observer API) 提供了一种异步观察目标元素与其祖先元素或顶级文档视窗(viewport)交叉状态的方法。祖先元素与视窗(viewport)被称为根(root)。

`Intersection Observer`可以不用监听`scroll`事件，做到元素一可见便调用回调，在回调里面我们来判断元素是否可见。

```js
    if (IntersectionObserver) {
      let lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
          let lazyImage = entry.target;
          // 如果元素可见            
          if (entry.intersectionRatio > 0) {
            if (lazyImage.getAttribute("src") == "loading.gif") {
              lazyImage.src = lazyImage.getAttribute("data-src");
            }
            lazyImageObserver.unobserve(lazyImage)
          }
        })
      })
      for (let i = 0; i < img.length; i++) {
        lazyImageObserver.observe(img[i]);
      }
    }
```


