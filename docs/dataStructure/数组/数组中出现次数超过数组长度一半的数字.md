---
{
  "title": "数组中出现次数超过数组长度一半的数字",
}
---


## 题目


数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。


## 代码


解法1:

开辟一个额外空间存储每个值出现的次数，时间复杂度最大为O(n)，逻辑简单

```js
    function MoreThanHalfNum_Solution(numbers) {
      if (numbers && numbers.length > 0) {
        var length = numbers.length;
        var temp = {};
        for (var i = 0; i < length; i++) {
          if (temp['s' + numbers[i]]) {
            temp['s' + numbers[i]]++;
          } else {
            temp['s' + numbers[i]] = 1;
          }
          if (temp['s' + numbers[i]] > length / 2) {
            return numbers[i];
          }
        }
        return 0;
      }
    }
```
解法2:

目标值的个数比其他所有值加起来的数多

记录两个变量 1.数组中的某个值 2.次数

1.当前遍历值和上一次遍历值相等？次数+1 ： 次数-1。

2.次数变为0后保存新的值。

3.遍历结束后保存的值,判断其是否复合条件

事件复杂度O(n) 不需要开辟额外空间 , 逻辑稍微复杂。
```js
    function MoreThanHalfNum_Solution(numbers) {
      if (numbers && numbers.length > 0) {
        var target = numbers[0];
        var count = 1;
        for (var i = 1; i < numbers.length; i++) {
          if (numbers[i] === target) {
            count++;
          } else {
            count--;
          }
          if (count === 0) {
            target = numbers[i];
            count = 1;
          }
        }
        count = 0;
        for (var i = 0; i < numbers.length; i++) {
          if (numbers[i] === target) count++;
        }
        return count > numbers.length / 2 ? target : 0;
      }
    }
```
