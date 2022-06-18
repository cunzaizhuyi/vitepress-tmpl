export default {
    title: '飞叶', // 所有文档的浏览器标签title
    description: '飞叶的网站', // 会渲染成<meta>标签，SEO用

    themeConfig: {

        siteTitle: '飞叶的网站',
        logo: '/logo.jpg',


        nav: [
            { text: '菜单1', link: '/menu1/', activeMatch: '/menu1/' },
            { text: '菜单2', link: '/menu2/', activeMatch: '/menu2/' },
            { text: '菜单3', link: '/menu3/', activeMatch: '/menu3/' },
        ],

        sidebar: {
            '/menu1/': [
                {
                    text: 'section 1',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        // This shows `/guide/index.md` page.
                        { text: 'a', link: '/menu1/a.md' }, // /guide/index.md
                        { text: 'b', link: '/menu1/b.md' }, // /guide/one.md
                    ]
                },
                {
                    text: 'section 2',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        { text: 'c', link: '/menu1/c' }, // /guide/two.md
                        { text: 'd', link: '/menu1/d' } // /guide/one.md
                    ]
                }
            ],
            '/menu2/': [
                {
                    text: 'section 1',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        // This shows `/guide/index.md` page.
                        { text: 'a', link: '/menu2/a.md' }, // /guide/index.md
                        { text: 'b', link: '/menu2/b.md' }, // /guide/one.md
                    ]
                },
                {
                    text: 'section 2',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        { text: 'c', link: '/menu2/c' }, // /guide/two.md
                        { text: 'd', link: '/menu2/d' } // /guide/one.md
                    ]
                }
            ],
            '/menu3/': [
                {
                    text: 'menu3 section 1',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        // This shows `/guide/index.md` page.
                        { text: 'a', link: '/menu3/a.md' }, // /guide/index.md
                        { text: 'b', link: '/menu3/b.md' }, // /guide/one.md
                    ]
                },
                {
                    text: 'menu3 section 2',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        { text: 'c', link: '/menu3/c' }, // /guide/two.md
                        { text: 'd', link: '/menu3/d' } // /guide/one.md
                    ]
                }
            ],
        },


        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
            { icon: 'twitter', link: '...' },
            { icon: 'discord', link: '...' }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present feiye'
        },


    }
}