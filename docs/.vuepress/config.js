module.exports = {
    title: 'awesome-coding-js',
    description: '用JavaScript实现的算法和数据结构',
    base: '/docs/',
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        nav: [
            { text: '数据结构分类', link: '/dataStructure/' },
            { text: '算法分类', link: '/algorithm/' },
            { text: 'JavaScript', link: '/JavaScript/' },
            { text: '博客', link: 'http://www.conardli.top/blog/article/' },
            { text: 'github', link: 'https://github.com/ConardLi' },
        ],
        sidebar: {
            '/JavaScript/': [
                '/JavaScript/',
                '/JavaScript/手动实现call、apply、bind',
                '/JavaScript/EventEmitter',
                '/JavaScript/防抖',
                '/JavaScript/节流',
                '/JavaScript/浅拷贝和深拷贝',
                '/JavaScript/数组去重、扁平、最值',
                '/JavaScript/数组乱序-洗牌算法',
                '/JavaScript/函数柯里化',
                '/JavaScript/手动实现JSONP',
                '/JavaScript/模拟实现promise',
                '/JavaScript/手动实现ES5继承',
                '/JavaScript/手动实现instanceof',
                '/JavaScript/基于Promise的ajax封装',
                '/JavaScript/单例模式',
                '/JavaScript/异步循环打印',
                '/JavaScript/图片懒加载',
            ],
            '/algorithm/': [
                '/algorithm/',
                {
                    title: '查找',
                    children: [
                        '/algorithm/查找/查找',
                        '/algorithm/查找/二维数组查找',
                        '/algorithm/查找/旋转数组的最小数字',
                        '/algorithm/查找/在排序数组中查找数字',
                    ]
                },
                {
                    title: 'DFS和BFS',
                    children: [
                        '/algorithm/DFS和BFS/DFS和BFS',
                    ]
                },
                {
                    title: '递归和循环',
                    children: [
                        '/algorithm/递归和循环/递归',
                        '/algorithm/递归和循环/斐波拉契数列',
                        '/algorithm/递归和循环/跳台阶',
                        '/algorithm/递归和循环/变态跳台阶',
                        '/algorithm/递归和循环/矩形覆盖',
                    ]
                },
                {
                    title: '分治',
                    children: [
                        '/algorithm/分治/数组中的逆序对',
                    ]
                },
                {
                    title: '回溯算法',
                    children: [
                        '/algorithm/回溯算法/回溯算法',
                        '/algorithm/回溯算法/二叉树中和为某一值的路径',
                        '/algorithm/回溯算法/字符串的排列',
                        '/algorithm/回溯算法/和为sum的n个数',
                        '/algorithm/回溯算法/矩阵中的路径',
                        '/algorithm/回溯算法/机器人的运动范围',
                        '/algorithm/回溯算法/N皇后问题',
                        '/algorithm/回溯算法/N皇后问题2',
                    ]
                },
                {
                    title: '排序',
                    children: [
                        '/algorithm/排序/复杂度',
                        '/algorithm/排序/排序',
                        '/algorithm/排序/插入排序',
                        '/algorithm/排序/堆排序',
                        '/algorithm/排序/归并排序',
                        '/algorithm/排序/快速排序',
                        '/algorithm/排序/冒泡排序',
                        '/algorithm/排序/选择排序',
                    ]
                },
                {
                    title: '数学运算',
                    children: [
                        '/algorithm/数学运算/1+2+3+...+n',
                        '/algorithm/数学运算/不用加减乘除做加法',
                        '/algorithm/数学运算/丑数',
                        '/algorithm/数学运算/二进制中1的个数',
                        '/algorithm/数学运算/数值的整数次方',
                        '/algorithm/数学运算/数组中只出现一次的数字',
                        '/algorithm/数学运算/整数中1出现的次数',
                        '/algorithm/数学运算/字符串转换成整数',
                    ]
                },
                {
                    title: '动态规划',
                    children: [
                        '/algorithm/动态规划/动态规划',
                        '/algorithm/动态规划/最小路径和',
                        '/algorithm/动态规划/打家劫舍',
                    ]
                },
                {
                    title: '贪心算法',
                    children: [
                        '/algorithm/贪心算法/贪心算法',
                        '/algorithm/贪心算法/分发饼干',
                    ]
                },
            ],
            '/dataStructure/': [
                '/dataStructure/',
                {
                    title: '二叉树',
                    children: [
                        '/dataStructure/二叉树/二叉树',
                        '/dataStructure/二叉树/二叉树的基本操作',
                        '/dataStructure/二叉树/二叉树的中序遍历',
                        '/dataStructure/二叉树/二叉树的前序遍历',
                        '/dataStructure/二叉树/二叉树的后序遍历',
                        '/dataStructure/二叉树/重建二叉树',
                        '/dataStructure/二叉树/对称的二叉树',
                        '/dataStructure/二叉树/二叉树的镜像',
                        '/dataStructure/二叉树/二叉搜索树的第k个节点',
                        '/dataStructure/二叉树/二叉搜索树的后序遍历',
                        '/dataStructure/二叉树/二叉树的最大深度',
                        '/dataStructure/二叉树/二叉树的最小深度',
                        '/dataStructure/二叉树/平衡二叉树',
                        '/dataStructure/二叉树/二叉树中和为某一值的路径',
                        '/dataStructure/二叉树/二叉搜索树与双向链表',
                        '/dataStructure/二叉树/序列化二叉树',
                        '/dataStructure/二叉树/二叉树的下一个节点',
                        '/dataStructure/二叉树/树的子结构',
                    ]
                },
                {
                    title: '链表',
                    children: [
                        '/dataStructure/链表/链表',
                        '/dataStructure/链表/从尾到头打印链表',
                        '/dataStructure/链表/反转链表',
                        '/dataStructure/链表/复杂链表的复制',
                        '/dataStructure/链表/合并两个排序的链表',
                        '/dataStructure/链表/链表倒数第k个节点',
                        '/dataStructure/链表/链表中环的入口节点',
                        '/dataStructure/链表/两个链表的第一个公共节点',
                        '/dataStructure/链表/圈圈中最后剩下的数字',
                        '/dataStructure/链表/删除链表中的节点or重复的节点',
                    ]
                },
                {
                    title: '数组',
                    children: [
                        '/dataStructure/数组/数组',
                        '/dataStructure/数组/把数组排成最小的数',
                        '/dataStructure/数组/第一个只出现一次的字符',
                        '/dataStructure/数组/调整数组顺序使奇数位于偶数前面',
                        '/dataStructure/数组/构建乘积数组',
                        '/dataStructure/数组/和为S的连续正整数序列',
                        '/dataStructure/数组/和为S的两个数字',
                        '/dataStructure/数组/连续子数组的最大和',
                        '/dataStructure/数组/两数之和',
                        '/dataStructure/数组/扑克牌顺子',
                        '/dataStructure/数组/三数之和',
                        '/dataStructure/数组/数组中出现次数超过数组长度一半的数字',
                        '/dataStructure/数组/数组中的逆序对',
                        '/dataStructure/数组/顺时针打印矩阵',
                        '/dataStructure/数组/四数之和',
                        '/dataStructure/数组/在排序数组中查找数字',
                    ]
                },
                {
                    title: '堆',
                    children: [
                        '/dataStructure/堆/堆',
                        '/dataStructure/堆/堆的基本操作',
                        '/dataStructure/堆/数据流中的中位数',
                        '/dataStructure/堆/最小的k个数',
                    ]
                },
                {
                    title: '哈希表',
                    children: [
                        '/dataStructure/哈希表/哈希表',
                    ]
                },
                {
                    title: '栈和队列',
                    children: [
                        '/dataStructure/栈和队列/栈和队列',
                        '/dataStructure/栈和队列/包含min函数的栈',
                        '/dataStructure/栈和队列/滑动窗口的最大值',
                        '/dataStructure/栈和队列/用两个栈实现队列',
                        '/dataStructure/栈和队列/栈的压入弹出序列',
                    ]
                },
                {
                    title: '字符串',
                    children: [
                        '/dataStructure/字符串/表示数值的字符串',
                        '/dataStructure/字符串/替换空格',
                        '/dataStructure/字符串/正则表达式匹配',
                        '/dataStructure/字符串/字符串的排列',
                        '/dataStructure/字符串/字符串翻转',
                        '/dataStructure/字符串/字符流中第一个不重复的字符',
                    ]
                },
            ]
        }
    }
};

