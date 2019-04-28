## 题目

输入`n`个整数，找出其中最小的K个数。例如输入`4,5,1,6,2,7,3,8`这`8`个数字，则最小的`4`个数字是`1,2,3,4`。


## 思路


思路1:

先排序，再取前k个数，最小时间复杂度`nlogn`。

思路2:

1.把前`k`个数构建一个大顶堆

2.从第`k`个数开始，和大顶堆的最大值进行比较，若比最大值小，交换两个数的位置，重新构建大顶堆

3.一次遍历之后大顶堆里的数就是整个数据里最小的`k`个数。

时间复杂度`nlogk`，优于思路1。

## 代码

```js
    function GetLeastNumbers_Solution(input, k) {
      if (k > input.length) {
        return [];
      }
      createHeap(input, k);
      for (let i = k; i < input.length; i++) {
        // 当前值比最小的k个值中的最大值小
        if (input[i] < input[0]) {
          [input[i], input[0]] = [input[0], input[i]];
          ajustHeap(input, 0, k);
        }
      }
      return input.splice(0, k);
    }

    // 构建大顶堆
    function createHeap(arr, length) {
      for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        ajustHeap(arr, i, length);
      }
    }

    function ajustHeap(arr, index, length) {
      for (let i = 2 * index + 1; i < length; i = 2 * i + 1) {
        if (i + 1 < length && arr[i + 1] > arr[i]) {
          i++;
        }
        if (arr[index] < arr[i]) {
          [arr[index], arr[i]] = [arr[i], arr[index]];
          index = i;
        } else {
          break;
        }
      }
    }
```