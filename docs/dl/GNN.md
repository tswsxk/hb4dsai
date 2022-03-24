# 图卷积神经网络

## 消息传播

### 阅读列表
1. [Atwood J, Towsley D. Diffusion-convolutional neural networks[C]//Advances in Neural Information Processing Systems. 2016: 1993-2001.](http://papers.nips.cc/paper/6212-diffusion-convolutional-neural-networks.pdf)

## GCN

### 原理

#### 谱聚类

##### 参考资料
1. [谱聚类（spectral clustering）原理总结](https://www.cnblogs.com/pinard/p/6221564.html)

### 传播实现 —— GraphSAGE
#### 参考资料
1. [GraphSAGE: GCN落地必读论文 - 风浪的文章 - 知乎](https://zhuanlan.zhihu.com/p/62750137)

### Code
[[numpy]](https://mp.weixin.qq.com/s/sg9O761F0KHAmCPOfMW_kQ)

### 阅读列表
1. [Kipf T N, Welling M. Semi-supervised classification with graph convolutional networks[J]. arXiv preprint arXiv:1609.02907, 2016.](https://arxiv.org/pdf/1609.02907.pdf)[[BLOG]](http://tkipf.github.io/graph-convolutional-networks/)

### 参考资料
1. [如何理解 Graph Convolutional Network（GCN）？ - superbrother的回答 - 知乎](https://www.zhihu.com/question/54504471/answer/332657604)
2. [如何理解 Graph Convolutional Network（GCN）？ - Johnny Richards的回答 - 知乎](https://www.zhihu.com/question/54504471/answer/630639025)

### FAQ
#### GCN能否用于有向图？
直接应用是不行的，但可以通过[正则化](https://github.com/tkipf/gcn/issues/91#issuecomment-469181790)来解决

其它针对有向图的GCN变种:
* [Monti F, Otness K, Bronstein M M. Motifnet: a motif-based graph convolutional network for directed graphs[C]//2018 IEEE Data Science Workshop (DSW). IEEE, 2018: 225-228.](https://arxiv.org/pdf/1802.01572.pdf)

## GAT
### 阅读列表
### 参考资料
1. [向往的GAT（图注意力模型） - superbrother的文章 - 知乎](https://zhuanlan.zhihu.com/p/81350196)

## 应用

### 参考资料
1. [graph convolutional network有什么比较好的应用task？ - superbrother的回答 - 知乎](https://www.zhihu.com/question/305395488/answer/554847680)

## 阅读材料
1. [Zhou J, Cui G, Zhang Z, et al. Graph neural networks: A review of methods and applications[J]. arXiv preprint arXiv:1812.08434, 2018.](https://arxiv.org/pdf/1812.08434.pdf)[[中文讲解](https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2650754558&idx=2&sn=7d79191b9ed30679d5d40e22d9cabdf8&chksm=871a8980b06d00962e0dbe984e1d3469214db31cb402b4725a0dfe330249a830b45cb26932b5&scene=21#wechat_redirect)]
2. [Zhang Z, Cui P, Zhu W. Deep learning on graphs: A survey[J]. arXiv preprint arXiv:1812.04202, 2018.](https://arxiv.org/pdf/1812.04202.pdf)[[中文讲解](https://mp.weixin.qq.com/s/WW-URKk-fNct9sC4bJ22eg)]
3. [Must-read papers on GNN](https://github.com/thunlp/GNNPapers)
