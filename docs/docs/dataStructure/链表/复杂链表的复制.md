---
{
  "title": "复杂链表的复制",
}
---
## 题目
输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。


## 思路
拆分成三步

1.复制一份链表放在前一个节点后面，即根据原始链表的每个节点N创建N`,把N`直接放在N的next位置，让复制后的链表和原始链表组成新的链表。

2.给复制的链表random赋值，即`N.random=N.random.next`。

3.拆分链表，将N`和N进行拆分，保证原始链表不受影响。

## 代码
```js
    function Clone(pHead) {
      if (pHead === null) {
        return null;
      }
      cloneNodes(pHead);
      cloneRandom(pHead);
      return reconnetNodes(pHead);
    }

    function cloneNodes(pHead) {
      var current = pHead;
      while (current) {
        var cloneNode = {
          label: current.label,
          next: current.next
        };
        current.next = cloneNode;
        current = cloneNode.next;
      }
    }

    function cloneRandom(pHead) {
      var current = pHead;
      while (current) {
        var cloneNode = current.next;
        if (current.random) {
          cloneNode.random = current.random.next;
        } else {
          cloneNode.random = null;
        }
        current = cloneNode.next;
      }
    }

    function reconnetNodes(pHead) {
      var cloneHead = pHead.next;
      var cloneNode = pHead.next;
      var current = pHead;
      while (current) {
        current.next = cloneNode.next;
        current = cloneNode.next;
        if (current) {
          cloneNode.next = current.next;
          cloneNode = current.next;
        } else {
          cloneNode.next = null;
        }
      }
      return cloneHead;
    }
```

## 考察点

- 链表
- 复杂问题拆解