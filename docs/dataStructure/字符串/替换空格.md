---
{
  "title": "替换空格",
}
---

## 题目

请实现一个函数，将一个字符串中的每个空格替换成`“%20”`。例如，当字符串为`We Are Happy`。则经过替换之后的字符串为`We%20Are%20Happy`。


## 代码

1.直接用空格将字符串切割成数组，再用`20%`进行连接。

```js
function replaceSpace(str)
{
    return str.split(' ').join('%20');
}
```

2.用正则表达式找到所有空格依次替换

```js
function replaceSpace(str)
{
    return str.replace(/\s/g,'%20');
}
```

## 拓展

允许出现多个空格，多个空格用一个`20%`替换：

用正则表达式找到连续空格进行替换

```js
function replaceSpace(str)
{
    return str.replace(/\s+/g,'%20');
}
```


## 考察点

- 字符串
- 正则