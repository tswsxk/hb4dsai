# 一些思考

## 因与果的相对性

2022.02.24: 以前写的不对

因和果在机器学习中是相对的，例如给定样本集合 <程序员，钱多，话少，xxx，秃头，格子衫>，那么可以有以下两种互为因果的情况：

* $P$(程序员|钱多，话少，xxx，秃头，格子衫)：一个人钱多，话少，xxx，秃头，格子衫的情况下，多大概率是程序员
* $P$(钱多，话少，xxx，秃头，格子衫|程序员)：一个程序员钱多，话少，xxx，秃头，格子衫的可能性有多大

在学习问题中，因（特征/属性/输入...）和果（结果/预测值/输出...）是相对的，不妨将因记为 $$\boldsymbol{x}$$, 将果记为 $$\boldsymbol{y}$$. 这两者可以通过贝叶斯定理进行转换：
$$
P(\boldsymbol{y}|\boldsymbol{x})=\frac{P(\boldsymbol{x}|\boldsymbol{y})P(\boldsymbol{y})}{P(\boldsymbol{x})}
$$
其中：

- $P(\boldsymbol{y}|\boldsymbol{x})$ 称为后验 (Posterior)

- $P(\boldsymbol{x}|\boldsymbol{y})$ 称为似然 (Likelihood)

- $P(\boldsymbol{y})$ 称为先验 (Prior)

- $P(\boldsymbol{x})$ 称为证据 (Evidence)

一般我们所观测到的数据集合 $D$ 所包含的是因果数据对，每一个数据对，即数据样本，记为 $$<\boldsymbol{x},\boldsymbol{y}>$$. 

## 学习问题的分类

不妨假设，在某一个学习问题中，我们已经确定了当前的特征，以及当前待预测的目标，从 $P(\boldsymbol{y}|\boldsymbol{x})$$ 中 $$\boldsymbol{y}$ 是否为空出发，可以有以下几种情况：

* 监督学习：不为空
* 无监督学习：完全为空
  * 例如聚类问题中，输出 $\boldsymbol{y}$ 是一个聚类标签，但此标签并不存在于原始数据集中
  * 又例如自编码问题中，输出 $\boldsymbol{y}$ 是输入 $\boldsymbol{x}$ 的高维/低维的特征表示，也不存在于原始数据中
* 半监督学习：有些为空

从数据集样本量是否足够，是否需要进行平衡采样（扩增数据集）- 学习的角度出发，可以再分出：

* 小样本学习：数据量不充足
* 迁移学习：数据量不充足，但有相似数据集可以使用，但由于数据集样本空间可能不是完全一致，可能需要进行空间映射

* 强化学习：不为空，但是数据集需要进行采样

## 模型分类

使用条件概率公式可以得到：
$$
P(\boldsymbol{y}|\boldsymbol{x}) = \frac{P(\boldsymbol{x},\boldsymbol{y})}{P(\boldsymbol{x})}
$$
对于直接求解后验 $P(\boldsymbol{y}|\boldsymbol{x})$ 的模型，称为判别式模型 (discriminative model); 对于求解联合概率分布 $$P(\boldsymbol{x},\boldsymbol{y})$$ 的模型，称为生成式模型 (generative model). 以下是两类模型的代表算法：

* 判别式模型
  * 决策树
  * 神经网络
  * SVM
* 生成式模型
  * 贝叶斯分类器

## 基于关联性分析的问题分类

分析输入$\boldsymbol{x}$, 输出 $\boldsymbol{y}$ 在空间/时间/... 上的关联性，可以将各类学习问题、模型等进行进一步分类：

### 输入关联性

经典建模方式

* 马尔可夫过程：前一个时间步或前 $n$ 个时间步会对当前时间步结果造成影响，$k$ 个时间步就称为 $k$ - 阶马尔可夫过程

