const commonPath = '/menu3';

export default [
    {
        text: 'menu3 section 1',
        collapsible: true,
        collapsed: false,
        items: [
            // This shows `/guide/index.md` page.
            { text: 'a', link: `${commonPath}/a.md` }, // /guide/index.md
            { text: 'b', link: `${commonPath}/b.md` }, // /guide/one.md
        ]
    },
    {
        text: 'menu3 section 2',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'c', link: `${commonPath}/c.md` }, // /guide/two.md
            { text: 'd', link: `${commonPath}/d.md` } // /guide/one.md
        ]
    }
]