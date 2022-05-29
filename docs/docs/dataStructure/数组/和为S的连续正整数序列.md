---
{
  "title": "和为S的连续正整数序列",
}
---

## 题目

输入一个正数`S`，打印出所有和为S的连续正数序列。

例如：输入`15`，有序`1+2+3+4+5` = `4+5+6` = `7+8` = `15` 所以打印出3个连续序列`1-5`，`5-6`和`7-8`。

## 思路

- 创建一个容器`child`，用于表示当前的子序列，初始元素为`1,2`

- 记录子序列的开头元素`small`和末尾元素`big`

- `big`向右移动子序列末尾增加一个数 `small`向右移动子序列开头减少一个数

- 当子序列的和大于目标值，`small`向右移动，子序列的和小于目标值，`big`向右移动

## 代码

```js
    function FindContinuousSequence(sum) {
      const result = [];
      const child = [1, 2];
      let big = 2;
      let small = 1;
      let currentSum = 3;
      while (big < sum) {
        while (currentSum < sum && big < sum) {
          child.push(++big);
          currentSum += big;
        }
        while (currentSum > sum && small < big) {
          child.shift();
          currentSum -= small++;
        }
        if (currentSum === sum && child.length > 1) {
          result.push(child.slice());
          child.push(++big);
          currentSum += big;
        }
      }
      return result;
    }
```

