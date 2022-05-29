---
{
  "title": "调整数组顺序使奇数位于偶数前面",
}
---

## 题目

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分

## 思路

设定两个指针

第一个指针start从数组第一个元素出发，向尾部前进
 
第二个指针end从数组的最后一个元素出发，向头部前进

start遍历到偶数，end遍历到奇数时，交换两个数的位置

当start>end时，完成交换

## 代码

```js
    function reOrderArray(array) {
      if (Array.isArray(array)) {
        let start = 0;
        let end = array.length - 1;
        while (start < end) {
          while (array[start] % 2 === 1) {
            start++;
          }
          while (array[end] % 2 === 0) {
            end--;
          }
          if (start < end) {
            [array[start], array[end]] = [array[end], array[start]]
          }
        }
      }
      return array;
    }
```

> 若需要保证相对顺序不变，则不能用上面的写法，需要让两个指针同时从左侧开始