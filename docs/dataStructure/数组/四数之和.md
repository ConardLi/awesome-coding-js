---
{
  "title": "四数之和",
}
---

## 题目

给定一个包含 `n` 个整数的数组` nums`，判断 `nums` 中是否存在四个元素` a，b，c，d` ，使得 `a + b + c + d = 0 ？`找出所有满足条件且不重复的四元组。

注意：答案中不可以包含重复的四元组。


```js
给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
```

## 思路

你已经经历了两数之和、三数之和，玩玩没想到，还有四数之和...

其实，后面还有五数之和，六数之和...

到这里其实我们就能发现一些规律，我们可以像[三数之和](https://github.com/ConardLi/awesome-coding-js/blob/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%88%86%E7%B1%BB/%E6%95%B0%E7%BB%84/%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.md)那样，我们可以通过大小指针来逼近结果，从而达到降低一层时间复杂度的效果。

不管是几数之和，我们都用这种方法来进行优化。

## 代码


```js
var fourSum = function (nums, target) {
    if (nums.length < 4) {
        return [];
    }
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
            break;
        }
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            let left = j + 1,
                right = nums.length - 1;
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                }
                if (sum <= target) {
                    while (nums[left] === nums[++left]);
                } else {
                    while (nums[right] === nums[--right]);
                }
            }
        }
    }
    return result;
};
```