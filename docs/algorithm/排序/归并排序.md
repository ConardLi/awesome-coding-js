---
{
  "title": "归并排序",
}
---

## 思想

利用`归并`的思想实现的排序方法。

该算法是采用分治法（`Divide and Conquer`）的一个非常典型的应用。（分治法将问题分成一些小的问题然后递归求解，而治的阶段则将分的阶段得到的各答案"修补"在一起，即分而治之)。

- 将已有序的子序列合并，得到完全有序的序列

- 即先使每个子序列有序，再使子序列段间有序

- 若将两个有序表合并成一个有序表，称为二路归并

<img :src="$withBase('/归并排序.png')" alt="foo">



分割：

- 将数组从中点进行分割，分为左、右两个数组

- 递归分割左、右数组，直到数组长度小于`2`

归并：

如果需要合并，那么左右两数组已经有序了。

创建一个临时存储数组`temp`，比较两数组第一个元素，将较小的元素加入临时数组

若左右数组有一个为空，那么此时另一个数组一定大于`temp`中的所有元素，直接将其所有元素加入`temp`


## 解法

### 写法1

分割数组时直接将数组分割为两个数组，合并时直接合并数组。

优点：思路简单，写法简单

缺点：空间复杂度略高，需要复制多个数组


```js
    function mergeSort(array) {
      if (array.length < 2) {
        return array;
      }
      const mid = Math.floor(array.length / 2);
      const front = array.slice(0, mid);
      const end = array.slice(mid);
      return merge(mergeSort(front), mergeSort(end));
    }

    function merge(front, end) {
      const temp = [];
      while (front.length && end.length) {
        if (front[0] < end[0]) {
          temp.push(front.shift());
        } else {
          temp.push(end.shift());
        }
      }
      while (front.length) {
        temp.push(front.shift());
      }
      while (end.length) {
        temp.push(end.shift());
      }
      return temp;
    }
```


### 写法2

记录数组的索引，使用`left、right`两个索引来限定当前分割的数组。

优点：空间复杂度低，只需一个`temp`存储空间，不需要拷贝数组

缺点：写法复杂


```js
    function mergeSort(array, left, right, temp) {
      if (left < right) {
        const mid = Math.floor((left + right) / 2);
        mergeSort(array, left, mid, temp)
        mergeSort(array, mid + 1, right, temp)
        merge(array, left, right, temp);
      }
      return array;
    }

    function merge(array, left, right, temp) {
      const mid = Math.floor((left + right) / 2);
      let leftIndex = left;
      let rightIndex = mid + 1;
      let tempIndex = 0;
      while (leftIndex <= mid && rightIndex <= right) {
        if (array[leftIndex] < array[rightIndex]) {
          temp[tempIndex++] = array[leftIndex++]
        } else {
          temp[tempIndex++] = array[rightIndex++]
        }
      }
      while (leftIndex <= mid) {
        temp[tempIndex++] = array[leftIndex++]
      }
      while (rightIndex <= right) {
        temp[tempIndex++] = array[rightIndex++]
      }
      tempIndex = 0;
      for (let i = left; i <= right; i++) {
        array[i] = temp[tempIndex++];
      }
    }
```


## 复杂度

时间复杂度：`O(nlogn)`

空间复杂度:`O(n)`

## 稳定性

稳定