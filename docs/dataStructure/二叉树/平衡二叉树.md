---
{
  "title": "平衡二叉树",
}
---

## 题目

输入一棵二叉树，判断该二叉树是否是平衡二叉树。

> 平衡二叉树：每个子树的深度之差不超过1


## 思路

后续遍历二叉树

在遍历二叉树每个节点前都会遍历其左右子树

比较左右子树的深度，若差值大于1 则返回一个标记 -1表示当前子树不平衡

左右子树有一个不是平衡的，或左右子树差值大于1，则整课树不平衡

若左右子树平衡，返回当前树的深度（左右子树的深度最大值+1）

## 代码

```js
    function IsBalanced_Solution(pRoot) {
      return balanced(pRoot) != -1;
    }

    function balanced(node) {
      if (!node) {
        return 0;
      }
      const left = balanced(node.left);
      const right = balanced(node.right);
      if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
        return -1;
      }
      return Math.max(left, right) + 1;
    }
```

## 考察点

- 二叉树