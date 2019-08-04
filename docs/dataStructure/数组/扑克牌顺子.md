---
{
  "title": "扑克牌顺子",
}
---

## 题目

扑克牌中随机抽`5`张牌，判断是不是一个顺子，即这`5`张牌是不是连续的。

`2-10`为数字本身，`A`为`1`，`J`为`11...`大小王可以看成任何数字，可以把它当作`0`处理。

## 思路

- 1.数组排序
- 2.遍历数组
- 3.若为`0`，记录`0`的个数加`1`
- 4.若不为`0`，记录和下一个元素的间隔
- 5.最后比较`0`的个数和间隔数，间隔数`>0`的个数则不能构成顺子
- 6.注意中间如果有两个元素相等则不能构成顺子

## 代码


```js
    function IsContinuous(numbers) {
      if (numbers && numbers.length > 0) {
        numbers.sort();
        let kingNum = 0;
        let spaceNum = 0;
        for (let i = 0; i < numbers.length - 1; i++) {
          if (numbers[i] === 0) {
            kingNum++;
          } else {
            const space = numbers[i + 1] - numbers[i];
            if (space == 0) {
              return false;
            } else {
              spaceNum += space - 1;
            }
          }
        }
        return kingNum - spaceNum >= 0;
      }
      return false;
    }
```