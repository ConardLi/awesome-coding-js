import { ThemeConfig } from "vuepress-theme-vt";
import { defineConfig4CustomTheme } from "vuepress/config";

export = defineConfig4CustomTheme<ThemeConfig>((ctx) => ({
  theme: "vt",
  title: "awesome-coding-js",
  themeConfig: {
    enableDarkMode: true,
    repo: "https://github.com/ConardLi/awesome-coding-js",
    nav: [
      { text: '数据结构分类', link: '/docs/dataStructure/' },
      { text: '算法分类', link: '/docs/algorithm/' },
      { text: 'JavaScript', link: '/docs/JavaScript/' },
      { text: '博客', link: 'https://blog.conardli.top/archives/' },
  ],
  sidebar: {
      '/docs/JavaScript/': [
          '/docs/JavaScript/',
          '/docs/JavaScript/手动实现call、apply、bind',
          '/docs/JavaScript/EventEmitter',
          '/docs/JavaScript/防抖',
          '/docs/JavaScript/节流',
          '/docs/JavaScript/浅拷贝和深拷贝',
          '/docs/JavaScript/数组去重、扁平、最值',
          '/docs/JavaScript/数组乱序-洗牌算法',
          '/docs/JavaScript/函数柯里化',
          '/docs/JavaScript/手动实现JSONP',
          '/docs/JavaScript/模拟实现promise',
          '/docs/JavaScript/手动实现ES5继承',
          '/docs/JavaScript/手动实现instanceof',
          '/docs/JavaScript/基于Promise的ajax封装',
          '/docs/JavaScript/单例模式',
          '/docs/JavaScript/异步循环打印',
          '/docs/JavaScript/图片懒加载',
      ],
      '/docs/algorithm/': [
          '/docs/algorithm/',
          {
              title: '查找',
              children: [
                  '/docs/algorithm/查找/查找',
                  '/docs/algorithm/查找/二维数组查找',
                  '/docs/algorithm/查找/旋转数组的最小数字',
                  '/docs/algorithm/查找/在排序数组中查找数字',
              ]
          },
          {
              title: 'DFS和BFS',
              children: [
                  '/docs/algorithm/DFS和BFS/DFS和BFS',
              ]
          },
          {
              title: '递归和循环',
              children: [
                  '/docs/algorithm/递归和循环/递归',
                  '/docs/algorithm/递归和循环/斐波拉契数列',
                  '/docs/algorithm/递归和循环/跳台阶',
                  '/docs/algorithm/递归和循环/变态跳台阶',
                  '/docs/algorithm/递归和循环/矩形覆盖',
              ]
          },
          {
              title: '分治',
              children: [
                  '/docs/algorithm/分治/数组中的逆序对',
              ]
          },
          {
              title: '回溯算法',
              children: [
                  '/docs/algorithm/回溯算法/回溯算法',
                  '/docs/algorithm/回溯算法/二叉树中和为某一值的路径',
                  '/docs/algorithm/回溯算法/字符串的排列',
                  '/docs/algorithm/回溯算法/和为sum的n个数',
                  '/docs/algorithm/回溯算法/矩阵中的路径',
                  '/docs/algorithm/回溯算法/机器人的运动范围',
                  '/docs/algorithm/回溯算法/N皇后问题',
                  '/docs/algorithm/回溯算法/N皇后问题2',
              ]
          },
          {
              title: '排序',
              children: [
                  '/docs/algorithm/排序/复杂度',
                  '/docs/algorithm/排序/排序',
                  '/docs/algorithm/排序/插入排序',
                  '/docs/algorithm/排序/堆排序',
                  '/docs/algorithm/排序/归并排序',
                  '/docs/algorithm/排序/快速排序',
                  '/docs/algorithm/排序/冒泡排序',
                  '/docs/algorithm/排序/选择排序',
              ]
          },
          {
              title: '数学运算',
              children: [
                  '/docs/algorithm/数学运算/1+2+3+...+n',
                  '/docs/algorithm/数学运算/不用加减乘除做加法',
                  '/docs/algorithm/数学运算/丑数',
                  '/docs/algorithm/数学运算/二进制中1的个数',
                  '/docs/algorithm/数学运算/数值的整数次方',
                  '/docs/algorithm/数学运算/数组中只出现一次的数字',
                  '/docs/algorithm/数学运算/整数中1出现的次数',
                  '/docs/algorithm/数学运算/字符串转换成整数',
              ]
          },
          {
              title: '动态规划',
              children: [
                  '/docs/algorithm/动态规划/动态规划',
                  '/docs/algorithm/动态规划/最小路径和',
                  '/docs/algorithm/动态规划/打家劫舍',
              ]
          },
          {
              title: '贪心算法',
              children: [
                  '/docs/algorithm/贪心算法/贪心算法',
                  '/docs/algorithm/贪心算法/分发饼干',
              ]
          },
      ],
      '/docs/dataStructure/': [
          '/docs/dataStructure/',
          {
              title: '二叉树',
              children: [
                  '/docs/dataStructure/二叉树/二叉树',
                  '/docs/dataStructure/二叉树/二叉树的基本操作',
                  '/docs/dataStructure/二叉树/二叉树的中序遍历',
                  '/docs/dataStructure/二叉树/二叉树的前序遍历',
                  '/docs/dataStructure/二叉树/二叉树的后序遍历',
                  '/docs/dataStructure/二叉树/重建二叉树',
                  '/docs/dataStructure/二叉树/对称的二叉树',
                  '/docs/dataStructure/二叉树/二叉树的镜像',
                  '/docs/dataStructure/二叉树/二叉搜索树的第k个节点',
                  '/docs/dataStructure/二叉树/二叉搜索树的后序遍历',
                  '/docs/dataStructure/二叉树/二叉树的最大深度',
                  '/docs/dataStructure/二叉树/二叉树的最小深度',
                  '/docs/dataStructure/二叉树/平衡二叉树',
                  '/docs/dataStructure/二叉树/二叉树中和为某一值的路径',
                  '/docs/dataStructure/二叉树/二叉搜索树与双向链表',
                  '/docs/dataStructure/二叉树/序列化二叉树',
                  '/docs/dataStructure/二叉树/二叉树的下一个节点',
                  '/docs/dataStructure/二叉树/树的子结构',
              ]
          },
          {
              title: '链表',
              children: [
                  '/docs/dataStructure/链表/链表',
                  '/docs/dataStructure/链表/从尾到头打印链表',
                  '/docs/dataStructure/链表/反转链表',
                  '/docs/dataStructure/链表/复杂链表的复制',
                  '/docs/dataStructure/链表/合并两个排序的链表',
                  '/docs/dataStructure/链表/链表倒数第k个节点',
                  '/docs/dataStructure/链表/链表中环的入口节点',
                  '/docs/dataStructure/链表/两个链表的第一个公共节点',
                  '/docs/dataStructure/链表/圈圈中最后剩下的数字',
                  '/docs/dataStructure/链表/删除链表中的节点or重复的节点',
              ]
          },
          {
              title: '数组',
              children: [
                  '/docs/dataStructure/数组/数组',
                  '/docs/dataStructure/数组/把数组排成最小的数',
                  '/docs/dataStructure/数组/第一个只出现一次的字符',
                  '/docs/dataStructure/数组/调整数组顺序使奇数位于偶数前面',
                  '/docs/dataStructure/数组/构建乘积数组',
                  '/docs/dataStructure/数组/和为S的连续正整数序列',
                  '/docs/dataStructure/数组/和为S的两个数字',
                  '/docs/dataStructure/数组/连续子数组的最大和',
                  '/docs/dataStructure/数组/两数之和',
                  '/docs/dataStructure/数组/扑克牌顺子',
                  '/docs/dataStructure/数组/三数之和',
                  '/docs/dataStructure/数组/数组中出现次数超过数组长度一半的数字',
                  '/docs/dataStructure/数组/数组中的逆序对',
                  '/docs/dataStructure/数组/顺时针打印矩阵',
                  '/docs/dataStructure/数组/四数之和',
                  '/docs/dataStructure/数组/在排序数组中查找数字',
              ]
          },
          {
              title: '堆',
              children: [
                  '/docs/dataStructure/堆/堆',
                  '/docs/dataStructure/堆/堆的基本操作',
                  '/docs/dataStructure/堆/数据流中的中位数',
                  '/docs/dataStructure/堆/最小的k个数',
              ]
          },
          {
              title: '哈希表',
              children: [
                  '/docs/dataStructure/哈希表/哈希表',
              ]
          },
          {
              title: '栈和队列',
              children: [
                  '/docs/dataStructure/栈和队列/栈和队列',
                  '/docs/dataStructure/栈和队列/包含min函数的栈',
                  '/docs/dataStructure/栈和队列/滑动窗口的最大值',
                  '/docs/dataStructure/栈和队列/用两个栈实现队列',
                  '/docs/dataStructure/栈和队列/栈的压入弹出序列',
              ]
          },
          {
              title: '字符串',
              children: [
                  '/docs/dataStructure/字符串/表示数值的字符串',
                  '/docs/dataStructure/字符串/替换空格',
                  '/docs/dataStructure/字符串/正则表达式匹配',
                  '/docs/dataStructure/字符串/字符串的排列',
                  '/docs/dataStructure/字符串/字符串翻转',
                  '/docs/dataStructure/字符串/字符流中第一个不重复的字符',
              ]
          },
      ]
  },
    codeSwitcher: {
      groups: {
        default: { ts: 'TypeScript', js: 'JavaScript' },
        'plugin-usage': { tuple: 'Tuple', object: 'Object' },
      }
    }
  },
}));
