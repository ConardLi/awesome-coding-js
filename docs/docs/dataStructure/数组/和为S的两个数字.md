---
{
  "title": "和为S的两个数字",
}
---

## 题目

输入一个递增排序的数组和一个数字`S`，在数组中查找两个数，使得他们的和正好是`S`，如果有多对数字的和等于`S`，输出两个数的乘积最小的。

## 思路

> 数组中可能有多对符合条件的结果，而且要求输出乘积最小的，说明要分布在两侧 比如 `3,8 ` `5,7`  要取`3,8`。

看了题目了，很像`leetcode`的第一题【两数之和】，但是题目中有一个明显不同的条件就是数组是有序的，可以使用使用大小指针求解，不断逼近结果，最后取得最终值。

- 设定一个小索引`left`，从`0`开始
- 设定一个大索引`right`，从`array.length`开始
- 判断`array[left] + array[right]`的值`s`是否符合条件
- 符合条件 - 返回
- 大于`sum`，`right`向左移动
- 小于`sum`，`left`向右移动
- 若`left=right`，没有符合条件的结果 

> 类似【两数之和】的解法来求解，使用`map`存储另已经遍历过的`key`，这种解法在有多个结果的情况下是有问题的，因为这样优先取得的结果是乘积较大的。例如 `3,8 ` `5,7` ，会优先取到`5,7`。


## 代码

```js
    function FindNumbersWithSum(array, sum) {
      if (array && array.length > 0) {
        let left = 0;
        let right = array.length - 1;
        while (left < right) {
          const s = array[left] + array[right];
          if (s > sum) {
            right--;
          } else if (s < sum) {
            left++;
          } else {
            return [array[left], array[right]]
          }
        }
      }
      return [];
    }
```

