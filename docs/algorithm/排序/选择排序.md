---
{
  "title": "选择排序",
}
---

## 思想

每次循环选取一个最小的数字放到前面的有序序列中。

<img :src="$withBase('/选择排序.gif')" alt="foo">


## 解法

```js
    function selectionSort(array) {
      for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
          if (array[j] < array[minIndex]) {
            minIndex = j;
          }
        }
        [array[minIndex], array[i]] = [array[i], array[minIndex]];
      }
    }
```

## 复杂度

时间复杂度：`O(n2)`

空间复杂度:`O(1)`

## 稳定性

不稳定