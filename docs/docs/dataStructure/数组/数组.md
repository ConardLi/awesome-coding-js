---
{
  "title": "数组-概览",
}
---

数组是我们在开发中最常见到的数据结构了，用于按顺序存储元素的集合。但是元素可以随机存取，因为数组中的每个元素都可以通过数组索引来识别。插入和删除时要移动后续元素，还要考虑扩容问题，插入慢。

数组与日常的业务开发联系非常紧密，如何巧妙的用好数组是我们能否开发出高质量代码的关键。

### 双指针

> 上面链表中提到的一类题目，主要是利用两个或多个不同位置的指针，通过速度和方向的变换解决问题。注意这种技巧经常在排序数组中使用。

- [调整数组顺序使奇数位于偶数前面](http://www.conardli.top/docs/dataStructure/%E6%95%B0%E7%BB%84/%E8%B0%83%E6%95%B4%E6%95%B0%E7%BB%84%E9%A1%BA%E5%BA%8F%E4%BD%BF%E5%A5%87%E6%95%B0%E4%BD%8D%E4%BA%8E%E5%81%B6%E6%95%B0%E5%89%8D%E9%9D%A2.html)
- [和为S的两个数字](http://www.conardli.top/docs/dataStructure/%E6%95%B0%E7%BB%84/%E5%92%8C%E4%B8%BAS%E7%9A%84%E4%B8%A4%E4%B8%AA%E6%95%B0%E5%AD%97.html)
- [和为S的连续正整数序列](http://www.conardli.top/docs/dataStructure/%E6%95%B0%E7%BB%84/%E5%92%8C%E4%B8%BAS%E7%9A%84%E8%BF%9E%E7%BB%AD%E6%AD%A3%E6%95%B4%E6%95%B0%E5%BA%8F%E5%88%97.html)


### N数之和问题

> 非常常见的问题，基本上都是一个套路，主要考虑如何比暴利法降低时间复杂度，而且也会用到上面的双指针技巧

- [两数之和](http://www.conardli.top/docs/dataStructure/%E6%95%B0%E7%BB%84/%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.html)
- [三数之和](http://www.conardli.top/docs/dataStructure/%E6%95%B0%E7%BB%84/%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.html)
- [四数之和](http://www.conardli.top/docs/dataStructure/%E6%95%B0%E7%BB%84/%E5%9B%9B%E6%95%B0%E4%B9%8B%E5%92%8C.html)

### 二维数组

> 建立一定的抽象建模能力，将实际中的很多问题进行抽象

- [构建乘积数组](http://www.conardli.top/docs/dataStructure/%E6%95%B0%E7%BB%84/%E6%9E%84%E5%BB%BA%E4%B9%98%E7%A7%AF%E6%95%B0%E7%BB%84.html)
- [顺时针打印矩阵](http://www.conardli.top/docs/dataStructure/%E6%95%B0%E7%BB%84/%E9%A1%BA%E6%97%B6%E9%92%88%E6%89%93%E5%8D%B0%E7%9F%A9%E9%98%B5.html)

### 数据统计

> 数组少不了的就是统计和计算，此类问题考察如何用更高效的方法对数组进行统计计算。

- [数组中出现次数超过数组长度一半的数字](http://www.conardli.top/docs/dataStructure/%E6%95%B0%E7%BB%84/%E6%95%B0%E7%BB%84%E4%B8%AD%E5%87%BA%E7%8E%B0%E6%AC%A1%E6%95%B0%E8%B6%85%E8%BF%87%E6%95%B0%E7%BB%84%E9%95%BF%E5%BA%A6%E4%B8%80%E5%8D%8A%E7%9A%84%E6%95%B0%E5%AD%97.html)
- [连续子数组的最大和](http://www.conardli.top/docs/dataStructure/%E6%95%B0%E7%BB%84/%E8%BF%9E%E7%BB%AD%E5%AD%90%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%A4%A7%E5%92%8C.html)
- [扑克牌顺子](http://www.conardli.top/docs/dataStructure/%E6%95%B0%E7%BB%84/%E6%89%91%E5%85%8B%E7%89%8C%E9%A1%BA%E5%AD%90.html)
- [第一个只出现一次的字符](http://www.conardli.top/docs/dataStructure/%E6%95%B0%E7%BB%84/%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%AA%E5%87%BA%E7%8E%B0%E4%B8%80%E6%AC%A1%E7%9A%84%E5%AD%97%E7%AC%A6.html)
