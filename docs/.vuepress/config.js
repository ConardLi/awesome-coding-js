module.exports = {
    title: 'awesome-coding-js',
    description: '用JavaScript实现的算法和数据结构',
    base: '/docs/',
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        nav: [
            { text: '数据结构分类', link: '/dataStructure/' },
            { text: '博客', link: 'http://www.conardli.top/blog/article/' },
            { text: 'github', link: 'https://github.com/ConardLi' },
        ],
        sidebar: {
            '/dataStructure/': [
                '/dataStructure/',
                {
                    title: '二叉树',
                    children: [
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
                        '/dataStructure/堆/堆的基本操作',
                        '/dataStructure/堆/数据流中的中位数',
                        '/dataStructure/堆/最小的k个数',
                    ]
                },
                {
                    title: '栈和队列',
                    children: [
                        '/dataStructure/栈和队列/包含min函数的栈',
                        '/dataStructure/栈和队列/滑动窗口的最大值',
                        '/dataStructure/栈和队列/用两个栈实现队列',
                        '/dataStructure/栈和队列/栈的压入弹出序列',
                    ]
                },
            ]
        }
    }
};

