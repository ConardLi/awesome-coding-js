---
{
  "title": "二叉树的镜像",
}
---


## 题目
操作给定的二叉树，将其变换为源二叉树的镜像。 
```
       源二叉树 
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5
```
## 1.2 解题思路

递归交换二叉树所有节点左右节点的位置。

## 1.3 代码

```js
function Mirror(root)
{
    if(root){
        const temp = root.right;
        root.right = root.left;
        root.left = temp;
        Mirror(root.right);
        Mirror(root.left);
    }
}
```

## 考察点

- 二叉树
- 抽象问题形象化