## 包含min函数的栈

定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。

## 思路 

1.定义两个栈，一个栈用于存储数据，另一个栈用于存储每次数据进栈时栈的最小值.

2.每次数据进栈时，将此数据和最小值栈的栈顶元素比较，将二者比较的较小值再次存入最小值栈.

4.数据栈出栈，最小值栈也出栈。

3.这样最小值栈的栈顶永远是当前栈的最小值。

以数据[3,4,2,7,9,0]为例，让这组数字依次如栈，则栈和其对应的最小值栈如下：

![](../../dist/img/mainstack.png)

## 代码

```js
var dataStack = [];
var minStack = [];
 
function push(node)
{
    dataStack.push(node);
    if(minStack.length === 0 ||  node < min()){
        minStack.push(node);
    }else{
        minStack.push(min());
    }
}
function pop()
{
    minStack.pop();
    return dataStack.pop();
}
function top()
{
    var length = dataStack.length;
    return length>0&&dataStack[length-1]
}
function min()
{
    var length = minStack.length;
    return length>0&&minStack[length-1]
}
```

