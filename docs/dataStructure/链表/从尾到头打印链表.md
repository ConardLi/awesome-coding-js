---
{
  "title": "从尾到头打印链表",
}
---


## 题目

输入一个链表，按链表值从尾到头的顺序返回一个`ArrayList`。

## 分析

要了解链表的数据结构：

`val`属性存储当前的值，`next`属性存储下一个节点的引用。

要遍历链表就是不断找到当前节点的`next`节点，当`next`节点是`null`时，说明是最后一个节点，停止遍历。

因为是从尾到头的顺序，使用一个队列来存储打印结果，每次从队列头部插入。

## 代码

```js
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    const array = [];
    while(head){
        array.unshift(head.val);
        head = head.next;
    }
    return array;
}
```

## 考察点

- 链表