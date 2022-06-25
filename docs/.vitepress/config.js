import menu1Sidebar from "./menu1Sidebar";
import menu2Sidebar from "./menu2Sidebar";
import menu3Sidebar from "./menu3Sidebar";

export default {
    base: '/',

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
            '/menu1/': menu1Sidebar,
            '/menu2/': menu2Sidebar,
            '/menu3/': menu3Sidebar,
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