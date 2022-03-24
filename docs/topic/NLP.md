# 自然语言处理

## 综述

俄国数学家安德烈·安德烈耶维奇·马尔科夫对普希金在 19 世纪创作的诗歌小说《尤金·奥涅金》进行了统计。他去掉了这本书的前 2 万个字母中所有的标点符号和空格，记成了一长串字母。然后，他又把这些字母放进了 200 个网格中（每个网格有 10×10 个字符），并对每行每列中元音的数量进行统计，然后将这些结果进行了整理。他发现：

* 43% 的字母是元音，57% 是辅音。
* 2 万个字母分成元音和辅音组合中有 1,104 对「元音-元音」，3,827 对「辅音-辅音」，15,069 对「元音-辅音」和「辅音-元音」组合

从统计学上讲，这表明普希金的文本中任何一个字母，如果是元音，下一个字母很可能是辅音，反之亦然。

类似的，香农也通过一些文本实验证明了这一点。同时他发现，给定文本的统计模型越复杂，语言生成就越准确。

他们的实验证明了：语言的统计特性可以被建模。

### 预备知识

#### 语义关系

##### 字词

* 相似性 (Similarity)


* 同义词 (Synonymy)
* 反义词 (Antonymy)
* 上义词 (Hypernym)
* 下义词 (Hyponym)
* 派生 (Derivation)

##### 句子

* 相似性 (Similarity)


* 同义 (Synonymy)
* 矛盾 (Contradiction)
* 隐含 (Entailment)
* 前提 (Presupposition)



### 阅读材料

[自然语言处理起源：马尔科夫和香农的语言建模实验](https://mp.weixin.qq.com/s/VtEM6paUPH28GFrwVNmz4w)

## Benchmark

### GLUE

| 数据集名                                     | 任务                                       | 评价指标                   |
| ---------------------------------------- | ---------------------------------------- | ---------------------- |
| CoLA (The Corpus of Linguistic  Acceptability) | 对一个给定句子，判定其是否语法正确                        | Matthew's  Corr        |
| SST-2  (The Stanford Sentiment Treebank) | 针对电影评论来做情感分类(二分类)                        | Accuracy               |
| MRPC (Microsoft Research Paraphrase  Corpus) | 判断两个给定句子，是否具有相同的语义                       | F1  / Accuracy         |
| STS-B (Semantic Textual Similarity Benchmark) | 判断两个句子的语义相似性  (训练标签为1到5的分数)              | Pearson-Spearman  Corr |
| QQP  (Quora Question Pairs)              | 文本语义一致性: 判断给定的两个句子是否语义一致                 | F1  / Accuracy         |
| MNLI-m (MultiNLI Matched) & MNLI-mm (MultiNLI Mismatched) | 自然语言推断:给定前提（Premise）下，需要判断假设（Hypothesis）是否成立 | Accuracy               |
| QNLI  (Question NLI)                     | 给定一个问句，判断给定文本中是否包含该问句的正确答案               | Accuracy               |
| RTE  (Recognizing Textual Entailment)    | 给定两个文本段，判断他们是否存在蕴含关系                     | Accuracy               |
| WNLI  (Winograd NLI)                     | 给定一个句子，从给定的选项中识别句子中的某个代词指代的对象是哪个         | Accuracy               |
| AX (Diagnostics Main)                    | 给定两个句子，识别他们的关系（三分类）                      | Matthew's  Corr        |

### 阅读材料

[文本分类——GLUE数据集介绍](http://www.xuwei.io/2018/11/30/%E6%96%87%E6%9C%AC%E5%88%86%E7%B1%BB-glue%E6%95%B0%E6%8D%AE%E9%9B%86%E4%BB%8B%E7%BB%8D/)

[BERT之后，GLUE基准升级为SuperGLUE：难度更大](https://www.toutiao.com/i6684803548464546312/?tt_from=weixin&utm_campaign=client_share&wxshare_count=1&from=groupmessage&timestamp=1557243551&app=news_article&utm_source=weixin&isappinstalled=0&utm_medium=toutiao_android&req_id=20190507233911010025067142607C4DE&group_id=6684803548464546312)

## 语言模型

### 统计语言模型

### 神经网络语言模型

#### 参考文献

【1】NNLM

【2】RNNLM

【3】skipgram, cbow, word2vec

【4】hierachical softmax, word2vec



【5】[Glove](https://www.aclweb.org/anthology/D14-1162.pdf)

Pennington J, Socher R, Manning C D. Glove: Global vectors for word representation[C]//Proceedings of the 2014 conference on empirical methods in natural language processing (EMNLP). 2014: 1532-1543.

```
@inproceedings{pennington2014glove,
  title={Glove: Global vectors for word representation},
  author={Pennington, Jeffrey and Socher, Richard and Manning, Christopher D},
  booktitle={Proceedings of the 2014 conference on empirical methods in natural language processing (EMNLP)},
  pages={1532--1543},
  year={2014}
}
```

【6】[ELMo]()

Peters M E, Neumann M, Iyyer M, et al. Deep contextualized word representations[J]. arXiv preprint arXiv:1802.05365, 2018.

```
@article{peters2018deep,
  title={Deep contextualized word representations},
  author={Peters, Matthew E and Neumann, Mark and Iyyer, Mohit and Gardner, Matt and Clark, Christopher and Lee, Kenton and Zettlemoyer, Luke},
  journal={arXiv preprint arXiv:1802.05365},
  year={2018}
}
```

【7】GPT [[中文解析]](https://www.ramlinbird.com/2019/08/03/gpt%E5%8F%8Agpt-2%E8%AE%BA%E6%96%87%E7%AC%94%E8%AE%B0/)

Radford A, Narasimhan K, Salimans T, et al. Improving language understanding by generative pre-training[J]. URL https://s3-us-west-2. amazonaws. com/openai-assets/researchcovers/languageunsupervised/language understanding paper. pdf, 2018.

```
@article{radford2018improving,
  title={Improving language understanding by generative pre-training},
  author={Radford, Alec and Narasimhan, Karthik and Salimans, Tim and Sutskever, Ilya}
}
```

【8】BERT [[英文解析]](https://yashuseth.blog/2019/06/12/bert-explained-faqs-understand-bert-working/)

```

```

【9】GPT-2

```

```

### 引入外部信息

#### 构造学

【1】CWE

【2】sisg

【3】cw2vec

【4】glyph

【5】RAFG

Tao H, Tong S, Zhao H, et al. A radical-aware attention-based model for chinese text classification[C]//Proceedings of the AAAI Conference on Artificial Intelligence. 2019, 33: 5125-5132.

```
@inproceedings{tao2019radical,
  title={A radical-aware attention-based model for chinese text classification},
  author={Tao, Hanqing and Tong, Shiwei and Zhao, Hongke and Xu, Tong and Jin, Binbin and Liu, Qi},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  volume={33},
  pages={5125--5132},
  year={2019}
}
```

【6】DWE

#### 语法

【1】知识蒸馏、句法 + 语义

Kuncoro A, Dyer C, Rimell L, et al. Scalable Syntax-Aware Language Models Using Knowledge Distillation[C]//Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics. 2019: 3472-3484.

```
@inproceedings{kuncoro2019scalable,
  title={Scalable Syntax-Aware Language Models Using Knowledge Distillation},
  author={Kuncoro, Adhiguna and Dyer, Chris and Rimell, Laura and Clark, Stephen and Blunsom, Phil},
  booktitle={Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics},
  pages={3472--3484},
  year={2019}
}
```

【2】Tree-LSTM [[code]](https://docs.dgl.ai/tutorials/models/2_small_graph/3_tree-lstm.html#sphx-glr-tutorials-models-2-small-graph-3-tree-lstm-py)



#### 常识（知识图谱）

##### 参考文献

【1】ERINE-Baidu

Sun Y, Wang S, Li Y, et al. Ernie: Enhanced representation through knowledge integration[J]. arXiv preprint arXiv:1904.09223, 2019.

```
@article{sun2019ernie,
  title={Ernie: Enhanced representation through knowledge integration},
  author={Sun, Yu and Wang, Shuohuan and Li, Yukun and Feng, Shikun and Chen, Xuyi and Zhang, Han and Tian, Xin and Zhu, Danxiang and Tian, Hao and Wu, Hua},
  journal={arXiv preprint arXiv:1904.09223},
  year={2019}
}
```

【2】ERINE-Tsinghua [[中文解析]](https://zhuanlan.zhihu.com/p/67066129)

Zhang Z, Han X, Liu Z, et al. ERNIE: Enhanced Language Representation with Informative Entities[C]//Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics. 2019: 1441-1451.

```
@inproceedings{zhang2019ernie,
  title={ERNIE: Enhanced Language Representation with Informative Entities},
  author={Zhang, Zhengyan and Han, Xu and Liu, Zhiyuan and Jiang, Xin and Sun, Maosong and Liu, Qun},
  booktitle={Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics},
  pages={1441--1451},
  year={2019}
}
```

#### 可解释性

##### 参考文献

【1】Feng S, Wallace E, Grissom I I, et al. Pathologies of neural models make interpretations difficult[J]. arXiv preprint arXiv:1804.07781, 2018.

```
@article{feng2018pathologies,
  title={Pathologies of neural models make interpretations difficult},
  author={Feng, Shi and Wallace, Eric and Grissom, II and Iyyer, Mohit and Rodriguez, Pedro and Boyd-Graber, Jordan and others},
  journal={arXiv preprint arXiv:1804.07781},
  year={2018}
}
```



### 阅读材料

[热词解读丨GPT-2、XLNet与图神经网络](https://mp.weixin.qq.com/s/KNrn1t4twsvvm5Ep9CBbMg)

[解读谷歌最强NLP模型BERT：模型、数据和训练](https://mp.weixin.qq.com/s/1a-3JNq7Mpxsi_mvOS8ITg)

[图解当前最强语言模型BERT：NLP是如何攻克迁移学习的？](https://mp.weixin.qq.com/s/HXYDO5PM8UIoXgEPGe8p-w)

[站在BERT肩膀上的NLP新秀们：XLMs、MASS和UNILM](https://mp.weixin.qq.com/s/RjeuHXa8O3MzSpTOuOHMkQ)

[从语言模型到Seq2Seq：Transformer如戏，全靠Mask](https://mp.weixin.qq.com/s/jdQVz4SC8UGTynlTft2CIA)

[预训练小模型也能拿下13项NLP任务，谷歌ALBERT三大改造登顶GLUE基准](https://mp.weixin.qq.com/s/kvSoDr0E_mvsc7lcLNKmgg)

[【清华大学NLP】预训练语言模型（PLM）必读论文清单，附论文PDF、源码和模型链接](https://mp.weixin.qq.com/s/SoKKdBCW2L0Hetn3dcHcCA)

[12个NLP预训练模型的学习笔记](https://mp.weixin.qq.com/s/IndeECchmX_GC8MzuWSVfg)

[XLNet详解](https://mp.weixin.qq.com/s/vrLZyQOuTMQs7pBgAFJwKQ)

[自然语言处理基础：上下文词表征入门解读](https://mp.weixin.qq.com/s/wObMLprs3ZFLHndWqnXujg)

[【复旦大学】最新《预训练语言模型》2020综述论文大全，50+PTMs分类体系，25页pdf205篇参考文献](https://mp.weixin.qq.com/s/kwKZfNSYTzc-PGKxTxm8-w)

[横空出世一周年，百度ERNIE再夺权威语义评测5项世界冠军](https://mp.weixin.qq.com/s/HnGU6IGLuwT-zQXAzmXkTQ)

## 句法分析

### 参考文献

【1】Recurrent Neural Network Grammars [[中文解析1]](https://zhuanlan.zhihu.com/p/43674399)，[[中文解析2]](https://blog.csdn.net/sinat_34328764/article/details/103863289)

```

```

## 图结构

### 阅读材料

[阿尔伯塔大学博士毕业论文：基于图结构的自然语言处理](https://mp.weixin.qq.com/s/BXovM5bHshLxdmBg93EQrA)

## 知识图谱

### 阅读材料

[【AAAI2020-清华-百度】学习医学文本的概念-上下文嵌入，Conceptual-Contextual Embeddings](https://mp.weixin.qq.com/s/kl6Cb0nZV_0OHkLRzcJTjQ)

## 非自回归模型

### 阅读材料

[非自回归训练与自然语言处理](https://mp.weixin.qq.com/s/T7OENnJ5kSLGCzKeYp6LsQ)



## 稀疏可解释词嵌入



## 代码资源

[PT-BERT](https://github.com/huggingface/pytorch-pretrained-BERT) [[中文介绍]](https://mp.weixin.qq.com/s/Wk6gvOS_Qnud6ib1esMFXA)

[Google BERT](https://github.com/google-research/bert) [[中文介绍]](https://mp.weixin.qq.com/s/pD4it8vQ-aE474uSMQG0YQ)

