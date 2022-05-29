---
{
  "title": "从上到下打印二叉树",
}
---

## 题目1-不分行从上到下打印

从上往下打印出二叉树的每个节点，同层节点从左至右打印。

## 思路

- 在打印第一行时，将左孩子节点和右孩子节点存入一个队列里
- 队列元素出队列打印，同时分别将左孩子节点和右孩子节点存入队列
- 这样打印二叉树的顺序就是没行从左到右打印

## 代码

```js
    function PrintFromTopToBottom(root) {
      const result = [];
      const queue = [];
      if (root) {
        queue.push(root);
        while (queue.length > 0) {
          const current = queue.shift();
          if (current.left) {
            queue.push(current.left);
          }
          if (current.right) {
            queue.push(current.right);
          }
          result.push(current.val);
        }
      }
      return result;
    }
```

## 题目2-把二叉树打印成多行

从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。

## 思路


- 使用一个队列存储当前层遍历的节点
- 使用两个变量来标记当前遍历的状态
- currentNums：当前层剩余的节点数
- childNums：孩子节点数
- 当前层遍历完成后开始遍历孩子节点，currentNums赋值为childNums，childNums赋值为0，

## 代码

```js
    function Print(root) {
      const result = [];
      const queue = [];
      let tempArr = [];
      let currentNums = 1;
      let childNums = 0;
      if (root) {
        queue.push(root);
        while (queue.length > 0) {
          const current = queue.shift();
          if (current.left) {
            queue.push(current.left);
            childNums++;
          }
          if (current.right) {
            queue.push(current.right);
            childNums++;
          }
          tempArr.push(current.val);
          currentNums--;
          if (currentNums === 0) {
            currentNums = childNums;
            childNums = 0;
            result.push(tempArr);
            tempArr = [];
          }
        }
      }
      return result;
    }
```

## 题目3-按之字形顺序打印二叉树

请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。

## 思路

奇数从左到右，偶数从右到左


- 若当前层为奇数层，从左到右打印，同时填充下一层，从右到左打印（先填充左孩子节点再填充右孩子节点）。
- 若当前层为偶数层，从右到左打印，同时填充下一层，从左到右打印（先填充右孩子节点再填充左孩子节点）。
- 不难发现，我们可以使用栈来作为存储结构。
- 分别设定一个奇数栈和一个偶数栈， 从将二叉树头部元素存入奇数栈开始。

> 这里同样可使用上面2题的两个变量来记录层数，只需要一个栈即可，但是代码不如两个栈容易理解。

## 代码

```js
    function Print(root) {
      const result = [];
      const oddStack = [];
      const evenStack = [];
      let temp = [];
      if (root) {
        oddStack.push(root);
        while (oddStack.length > 0 || evenStack.length > 0) {

          while (oddStack.length > 0) {
            const current = oddStack.pop();
            temp.push(current.val);
            if (current.left) {
              evenStack.push(current.left);
            }
            if (current.right) {
              evenStack.push(current.right);
            }
          }
          if (temp.length > 0) {
            result.push(temp);
            temp = [];
          }

          while (evenStack.length > 0) {
            const current = evenStack.pop();
            temp.push(current.val);
            if (current.right) {
              oddStack.push(current.right);
            }
            if (current.left) {
              oddStack.push(current.left);
            }
          }
          if (temp.length > 0) {
            result.push(temp);
            temp = [];
          }

        }
      }
      return result;
    }
```



## 考察点

- 二叉树
- 栈
- 队列