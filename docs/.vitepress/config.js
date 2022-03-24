module.exports = {
  base: '/hb4dsai/',
  title: 'HB4DSAI',
  description: 'Handbook for Data Science and Artifitial Intelligence',
  lang: 'zh-CN',
  head: [['link', { 'rel': 'stylesheet', 'href': `https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css` }]],
  themeConfig: {
    repo: 'https://github.com/tswsxk/hb4dsai',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 Github 上修改',
    lastUpdated: '上次修改',
    nav: [
      {
        text: '简介',
        link: '/overview/',
        activeMatch: '^/overview/',
      },
      {
        text: '数据科学',
        link: '/ds/',
        activeMatch: '^/ds/',
      },
      {
        text: '机器学习',
        link: '/ml/metrics',
        activeMatch: '^/ml/',
      },
      {
        text: '深度学习',
        link: '/dl/Opt',
        activeMatch: '^/dl/',
      },
      {
        text: '机器学习工程',
        link: '/mle/index',
        activeMatch: '^/mle/',
      },
      {
        text: '专题讨论',
        link: '/topic/',
        activeMatch: '^/topic/',
      },
      {
        text: '速查表',
        link: '/cheatsheet',
        activeMatch: '^cheatsheet',
      },
      {
        text: '附录',
        link: '/appendix/',
      }
    ],
    sidebar: {
      '/overview/': getSidebar(),
      '/ds/': getSidebar(),
      '/ml/': getSidebar(),
      '/dl/': getSidebar(),
      '/mle/': getSidebar(),
      '/topic/': getTopicSidebar(),
      '/dev/': getAppendixSidebar(),
      '/appendix/': getAppendixSidebar(),
    },
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


function getSidebar() {
  return [
    {
      text: '简介',
      children: [
        { text: '数据科学与人工智能简介', link: '/overview/index' },
        { text: '从目标到实现', link: '/overview/mle' },
        { text: '一些思考', link: '/overview/thoughts' }
      ]
    },
    {
      text: "数据科学",
      children: [
        { text: "数据获取", link: "/ds/Acquisition" },
        { text: "数据持久化", link: "/ds/DP" },
        { text: "数据读取", link: "/ds/DR" },
        { text: "数据分析", link: "/ds/DA" },
        { text: "数据预处理", link: "/ds/DDP" },
        {
          text: "特征工程",
          children: [
            { text: "特征构建", },
            { text: "特征评估", },
            { text: "特征组合", },
          ]
        },
        {
          text: "特征模型",
          children: [
            { text: "关联分析", link: "/ds/model/AssociationAnalysis" },
            { text: "梯度提升模型", link: "/ds/model/model" },
          ]
        }
      ]
    },
    {
      text: "机器学习",
      children: [
        { text: "模型评估", link: "/ml/metrics" },
        { text: "模型优化", link: "/ml/Opt" },
        { text: "线性回归", link: "/ml/LR" },
        { text: "支持向量机", link: "/ml/SVM" },
        { text: "聚类", link: "/ml/clustering" },
        { text: "图模型" },
        { text: "概率图模型" },
        { text: "强化学习", link: "/ml/RL" },
      ]
    },
    {
      text: "深度学习",
      children: [
        { text: "模型优化", link: "/dl/Opt" },
        { text: "卷积神经网络", link: "/dl/CNN" },
        { text: "图神经网络", link: "/dl/GNN" },
      ]
    },
    {
      text: "机器学习工程",
      link: "/mle/"
    },
    {
      text: "专题讨论",
      link: "/topic/index"
    },
    {
      text: "附录",
      link: "/appendix/index"
    }
  ]
}
function getTopicSidebar() {
  return [
    {
      text: "不确定性",
      link: "/topic/Uncertainty"
    },
    {
      text: "风险控制",
      link: "/topic/RC"
    },
    {
      text: "教育数据挖掘",
      link: "/topic/EDM"
    },
    {
      text: "可解释性",
      link: "/topic/XAI"
    },
    {
      text: "量化金融",
      link: "/topic/QuantitativeFinance"
    },
    {
      text: "元学习",
      link: "/topic/MetaLearning"
    },
    {
      text: "自然语言处理",
      link: "/topic/NLP"
    },
    {
      text: "知识图谱",
      link: "/topic/KG"
    },
    {
      text: "知识蒸馏",
      link: "/topic/KD"
    },
  ]
}
function getAppendixSidebar() {
  return [
    {
      text: '算法基础',
      children: [
        { text: '算法书上的算法' },
        { text: 'Page Rank' },
        {
          text: '刷题记录',
          children: [
            { text: 'Leetcode' }
          ]
        }
      ],
    },
    {
      text: '数学基础',
      children: [
        { text: "微积分", link: "https://zh.d2l.ai/chapter_appendix/math.html#%E5%BE%AE%E5%88%86" },
        { text: "线性代数", link: "https://zh.d2l.ai/chapter_appendix/math.html#%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0" },
        { text: "概率论", link: "/appendix/math/Probability" }
      ]
    },
    {
      text: '计算机基础',
      children: [
        { text: "计算机硬件基础", link: "/appendix/CS/HardWare" },
        { text: "计算机网络基础", link: "/appendix/CS/Network" },
        { text: '常用Linux指令', link: "/appendix/CS/Linux" },
        { text: '运维基础', link: "/appendix/CS/Ops" },
      ]

    },
    {
      text: '开发基础',
      children: [
        {
          text: '版本控制',
          link: '/dev/VCS'
        },
        {
          text: '自动化文档',
          link: '/dev/doc'
        },
        {
          text: '代码测试',
          link: '/dev/test'
        },
        {
          text: 'web前端开发',
          link: '/dev/web_front'
        },
        {
          text: 'web后端开发',
          children: [
            { text: '基于Python的后端开发', link: '/dev/web_back/python' },
          ]
        },
        {
          text: '微服务开发',
          children: [
            { text: '基于Python的微服务开发' }
          ]
        },
        { text: '服务部署', link: '/dev/deployment' },
        { text: 'windows exe开发', link: '/dev/exe' },
      ],
    },
  ]
}