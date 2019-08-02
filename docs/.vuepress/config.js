module.exports = {
    title: 'awesome-coding-js',
    description: '用JavaScript实现的算法和数据结构',
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        nav: [
            { text: '数据结构分类', link: '/dataStructure/' },
            { text: '博客', link: 'http://www.conardli.top' },
            { text: 'github', link: 'https://github.com/ConardLi' },
        ],
        sidebar: {
            '/dataStructure/': [
                '/dataStructure/',
                {
                    title: '堆',
                    children: [
                        '/dataStructure/堆/堆的基本操作',
                        '/dataStructure/堆/数据流中的中位数',
                        '/dataStructure/堆/最小的k个数',
                    ]
                },
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
                }
            ]
        }
    }
};

