---
{
  "title": "二叉搜索树的第k个节点",
}
---

## 题目

给定一棵二叉搜索树，请找出其中的第k小的结点。 例如， （5，3，7，2，4，6，8）  中，按结点数值大小顺序第三小结点的值为4。

## 思路

二叉搜索树的中序遍历即排序后的节点，本题实际考察二叉树的遍历。

## 代码

```js
    //递归实现
    function KthNode(pRoot, k) {
      const arr = [];
      loopThrough(pRoot, arr);
      if (k > 0 && k <= arr.length) {
        return arr[k - 1];
      }
      return null;
    }

    function loopThrough(node, arr) {
      if (node) {
        loopThrough(node.left, arr);
        arr.push(node);
        loopThrough(node.right, arr);
      }
    }


    //非递归实现
    function KthNode(pRoot, k) {
      const arr = [];
      const stack = [];
      let current = pRoot;
      while (stack.length > 0 || current) {
        while (current) {
          stack.push(current);
          current = current.left;
        }
        current = stack.pop();
        arr.push(current);
        current = current.right;
      }
      if (k > 0 && k <= arr.length) {
        return arr[k - 1];
      }
      return null;
    }
```

## 考察点

- 二叉树