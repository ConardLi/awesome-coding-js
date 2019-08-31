---
{
  "title": "链表-概览",
}
---

用一组任意存储的单元来存储线性表的数据元素。一个对象存储着本身的值和下一个元素的地址。

- 需要遍历才能查询到元素，查询慢。
- 插入元素只需断开连接重新赋值，插入快。

![](https://i.loli.net/2019/08/18/K7ysIF3qXzTJxUN.jpg)

链表在开发中也是经常用到的数据结构，`React16`的 `Fiber Node`连接起来形成的`Fiber Tree`, 就是个单链表结构。

### 基本应用

> 主要是对链表基本概念和特性的应用，如果基础概念掌握牢靠，此类问题即可迎刃而解

- [从尾到头打印链表](http://www.conardli.top/docs/dataStructure/%E9%93%BE%E8%A1%A8/%E4%BB%8E%E5%B0%BE%E5%88%B0%E5%A4%B4%E6%89%93%E5%8D%B0%E9%93%BE%E8%A1%A8.html)
- [删除链表中的节点](http://www.conardli.top/docs/dataStructure/%E9%93%BE%E8%A1%A8/%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9or%E9%87%8D%E5%A4%8D%E7%9A%84%E8%8A%82%E7%82%B9.html#%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9) 
- [反转链表](http://www.conardli.top/docs/dataStructure/%E9%93%BE%E8%A1%A8/%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8.html)
- [复杂链表的复制](http://www.conardli.top/docs/dataStructure/%E9%93%BE%E8%A1%A8/%E5%A4%8D%E6%9D%82%E9%93%BE%E8%A1%A8%E7%9A%84%E5%A4%8D%E5%88%B6.html)

### 环类题目

> 环类题目即从判断一个单链表是否存在循环而扩展衍生的问题

- [环形链表](https://leetcode-cn.com/explore/learn/card/linked-list/194/two-pointer-technique/744/)
- [链表环的入口节点](http://www.conardli.top/docs/dataStructure/%E9%93%BE%E8%A1%A8/%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%8E%AF%E7%9A%84%E5%85%A5%E5%8F%A3%E8%8A%82%E7%82%B9.html)
- [约瑟夫环](http://www.conardli.top/docs/dataStructure/%E9%93%BE%E8%A1%A8/%E5%9C%88%E5%9C%88%E4%B8%AD%E6%9C%80%E5%90%8E%E5%89%A9%E4%B8%8B%E7%9A%84%E6%95%B0%E5%AD%97.html)

### 双指针

> 双指针的思想在链表和数组中的题目都经常会用到，主要是利用两个或多个不同位置的指针，通过速度和方向的变换解决问题。

- 两个指针从不同位置出发：一个从始端开始，另一个从末端开始；
- 两个指针以不同速度移动：一个指针快一些，另一个指针慢一些。

对于单链表，因为我们只能在一个方向上遍历链表，所以第一种情景可能无法工作。然而，第二种情景，也被称为慢指针和快指针技巧，是非常有用的。

- [两个链表的公共节点](http://www.conardli.top/docs/dataStructure/%E9%93%BE%E8%A1%A8/%E4%B8%A4%E4%B8%AA%E9%93%BE%E8%A1%A8%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%85%AC%E5%85%B1%E8%8A%82%E7%82%B9.html)
- [链表倒数第k个节点](http://www.conardli.top/docs/dataStructure/%E9%93%BE%E8%A1%A8/%E9%93%BE%E8%A1%A8%E5%80%92%E6%95%B0%E7%AC%ACk%E4%B8%AA%E8%8A%82%E7%82%B9.html)
- [相交链表](https://leetcode-cn.com/explore/learn/card/linked-list/194/two-pointer-technique/746/)

### 双向链表

双链还有一个引用字段，称为`prev`字段。有了这个额外的字段，您就能够知道当前结点的前一个结点。

- [扁平化多级双向链表](https://leetcode-cn.com/explore/learn/card/linked-list/197/conclusion/764/)
