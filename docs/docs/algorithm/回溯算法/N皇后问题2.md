---
{
  "title": "N皇后问题2",
}
---

## 题目

n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/8-queens.png)

上图为 8 皇后问题的一种解法。

给定一个整数 n，返回 n 皇后不同的解决方案的数量。

```js
输入: 4
输出: 2
解释: 4 皇后问题存在如下两个不同的解法。
[
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
```

## 思路

回溯法：深度优先遍历（列数作为同级，行数作为深层）+ 剪枝
- 递归深度达到最后一层：达到一个符合条件的解，向上回溯，返回1
- 循环所有同级向深层递归，并将每次递归的返回值累加
- 当前位置在已放好皇后的攻击范围内：当前位置不能放置皇后
- 没有命中上面的规则，说明当前位置可放置皇后，向更深层递归

## 代码

```js
    var totalNQueens = function (n) {
      const cols = new Set();
      const left = new Set();
      const right = new Set();
      return totalNQueensCore(0, n, cols, left, right);
    };

    var totalNQueensCore = function (row, n, cols, left, right) {
      let result = 0;
      if (row === n) {
        return 1;
      }
      for (let i = 0; i < n; i++) {
        if (!cols.has(i) && !right.has(row - i) && !left.has(row + i)) {
          cols.add(i);
          left.add(row + i);
          right.add(row - i);

          result += totalNQueensCore(row + 1, n, cols, left, right);
          cols.delete(i);
          left.delete(row + i);
          right.delete(row - i);
        }
      }
      return result;
    };
```