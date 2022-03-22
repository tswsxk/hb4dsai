module.exports = {
  base: '/hb4dsai/',
  title: 'HB4DSAI',
  description: 'Handbook for Data Science and Artifitial Intelligence',
  lang: 'zh-CN',
  head: [['link', {'rel': 'stylesheet', 'href': `https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css`}]],
  themeConfig: {
    repo: 'https://github.com/tswsxk/hb4dsai',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 Github 上修改',
    lastUpdated: '上次修改',
    nav: [
      {
        text: '数据科学',
        link: '/ds/',
        activeMatch: '^/ds/',
      },
      {
        text: '机器学习',
        link: '/ml/',
        activeMatch: '^/ml/',
      },
     {
        text: '深度学习',
        link: '/dl/',
        activeMatch: '^/dl/',
      },
     {
        text: '机器学习工程',
        link: '/mle/',
        activeMatch: '^/mle/',
      },
     {
        text: '应用专题',
        link: '/app/',
        activeMatch: '^/app/',
     },
     {
        text: '速查表',
        link: '/cheatsheet/',
        activeMatch: '^/cheatsheet/',
     },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(require("markdown-it-katex"))
      const REG_MATH_MUSTACHE_TAG = /<span class="katex">/g
      const replacer = '<span v-pre class="katex">'
      const originalRender = md.render
      md.render = function () {
        return originalRender.apply(this, arguments).replace(REG_MATH_MUSTACHE_TAG, replacer)
      }
    },
  }
}
