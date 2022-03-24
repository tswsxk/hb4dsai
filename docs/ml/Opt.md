# 模型优化

从贝叶斯公式开始
$$
P(\theta|X)=\frac{P(X,\theta)}{P(X)}=\frac{P(X|\theta)P(\theta)}{P(X)}. \tag{1}
$$
其中，$X=\{x_1,x_2,...,x_n\}$ 表示我们的数据，$\theta$ 表示我们要求的模型参数。我们把左项称为***后验概率，Posterior Probability*** 或者 ***条件概率，Conditional Probability*** 。

而对于中间和右边的项：

* $P(X,\theta)$ 被称为 ***联合概率，Joint Probability***
* $P(X)$ 被称为 ***边缘概率，Marginal Propability***, 也称为 ***证据，Evidence***
* $P(X|\theta)$ 被称为 ***似然，likelyhood*** 
* $P(\theta)$  被称为 ***先验，Prior Propability***

最优的 $\theta^*$  也就是最有概率的 $\theta$, 即 $P(\theta|X)$ 最大，可以写为：
$$
\theta^* \leftarrow \mathop{arg}\mathop{max}\limits_\theta P(\theta|X), \tag{2}
$$
等价于求
$$
\theta^* \leftarrow \mathop{arg}\mathop{max}\limits_\theta \frac{P(X|\theta)P(\theta)}{P(X)}. \tag{3}
$$
如果我们认为

***假设 1*** ：所有样本出现的概率都相同

那么可以忽略式（3）中的$P(X)$项，得到：
$$
\theta^*\leftarrow \mathop{arg}\mathop{max}\limits_\theta P(X|\theta)P(\theta), \tag{4}
$$
进一步地，如果我们认为

***假设2*** ：参数 $\theta$ 出现的概率都相同

那么我们可以忽略式（4）中的 $P(\theta)$ 项：
$$
\theta^*\leftarrow \mathop{arg}\mathop{max}\limits_\theta P(X|\theta), \tag{5}
$$
同时根据样本独立假设，即：
$$
P(X|\theta)=P(x_1,x_2,...x_n|\theta)=P(x_1|\theta)P(x_2|\theta)...P(x_n|\theta)=\prod_{i=1}^{n}P(x_i|\theta), \tag{6}
$$
我们得到
$$
\theta^* \leftarrow \mathop{arg}\mathop{max}\limits_\theta \prod_{i=1}^{n} P(x_i|\theta), \tag{7}
$$
通常，我们会在求解过程中使用对数函数来将概率变为对数概率以获得一些数学性质上的优势（比如缩小数据的绝对数值，避免上溢和下溢以及将累乘变为累加）[3]。由于对数函数不改变，因此求解下式和式的结果相同：
$$
\theta^* \leftarrow \mathop{arg}\mathop{max}\limits_\theta \mathop{ln} \prod_{i=1}^{n} P(x_i|\theta) =  \mathop{arg}\mathop{max}\limits_\theta \sum_{i=1}^n \mathop{ln} P(x_i|\theta). \tag{8}
$$
求解上式的过程被称为***极大似然估计，Maximum Likelihood Estimate，MLE***。

类似地，我们对式进行和步骤一样的处理，得到
$$
\theta^*\leftarrow \mathop{arg}\mathop{max}\limits_\theta \mathop{ln} \prod_{i=1}^{n} P(x_i|\theta)P(\theta) =  \mathop{arg}\mathop{max}\limits_\theta \sum_{i=1}^n \mathop{ln} P(x_i|\theta) +\mathop{ln}P(\theta). \tag{9}
$$
求解上式的过程被称为***最大后验估计，Maximum A Posteriori estimation，MAP***。

同时值得注意的式，式（8）和式 （9） 相比较多出了一项 $ln P(\theta)$，这项即为结构风险最小化中的正则化项（Regularization）或称为罚项（Penalty Term）

用损失函数的形式来表示（为和其他文献保持一致，以有监督学习为例，下面两式重定义$X=\{(x_i,y_i)，...,(x_n,y_n)\}$, $x_i$ 为输入，$y_i$ 为标签），则式（8）记为
$$
R_{emp}(f)=\frac{1}{N}\sum_{i=1}^NL(y_i,f(x_i)). \tag{10}
$$
式（9）记为
$$
R_{srm}(f)=\frac{1}{N}\sum_{i=1}^NL(y_i,f(x_i))+\lambda J(f), \tag{11}
$$
其中$J(f)$为模型复杂度，当使用二范数时，式（11）变为一种常见形式：
$$
R_{srm}(f)=\frac{1}{N}\sum_{i=1}^NL(y_i,f(x_i))+\lambda ||\theta||^2.
$$
（注：emp 意为 empricial，srm意为 structural risk minimization。）

而如果拒绝接受假设1和假设2，对于式（3）而言，直接求解较为复杂（intactable），难点在于确定 $\theta$ 和 $X$ 的分布（即求解 $P(\theta)$ 和 $P(X)$）。一类方案是用采样方法来求出分布参数，代表方法有马尔可夫链蒙特卡洛方法（Markov Chain Monte Carlo, MCMC）

也有一种看法不是求解最优的**确定**参数 $\theta$ ，而是求解最优的 $\theta$ 分布。

代表方法是变分推断（Variational Inference，VI）。在VI中，构造一个变分分布$q(\theta,w)$来近似后验分布，并转而求解如下优化问题：
$$
\mathop{min}\limits_w \mathop{KL}(q(\theta;w)||P(\theta|X)), \tag{12}
$$
其中，$w$ 是变分分布中的参数。（注：实际使用时，在得到变分分布后，我们会通过从$q(\theta,w)$多次采样 $\theta$ 的方式来使用 $\theta$，如：）

接下来的内容中，首先将先回顾适用于MLE和MAP的两种经典求解方法：

1. 梯度下降法
2. EM算法

同时也将介绍MCMC和VI方法。

## EM算法

EM算法（最大期望算法，期望最大化算法，Expectation-maximization algorithm）通常用在依赖于不可观察的隐性变量的概率模型求解中。

EM算法的推导和证明已经有很多书籍和资料了（比如李航老师的《统计学习方法》），这里就不再重述具体步骤。

这里只简单地列一下Q函数：
$$
Q(\theta,\theta^{(i)})=E_z[\mathop{log}P(Y,Z|\theta)|Y,\theta^{(i)}]
$$
E步求$Q$，M步求$Q$的极大化，即：
$$
\theta^{(i+1)} \leftarrow \mathop{arg}\mathop{max}\limits_\theta Q(\theta,\theta^{(i)})
$$
一些常见的算法包括：

* K-means聚类
* 混合模型（mixture model）

## MCMC采样

### Vanilla MCMC

### M-H采样

### Gibbs采样

## 变分推断

为了更统一（和其他文献中保持一致）地对VI进行论述，我们将（1）式进行一些小的修改，用隐变量 $z$ 来代替 $\theta$ ：
$$
P(z|X)=\frac{P(X|z)P(z)}{P(X)}.
$$
将式（12）改写为：
$$
\mathop{min}\limits_\theta \mathop{KL}(q(z;\theta)||P(z|X)),
$$


## 问题与总结

#### 问题

##### 什么是变分

##### 我们为什么需要变分，MLE vs MAP

##### MLE，MAP，BE有什么区别

## 参考文献

1. [极大似然估计与最大后验概率估计](https://zhuanlan.zhihu.com/p/40024110)
2. [变分推断（Variational Inference）进展简述](https://zhuanlan.zhihu.com/p/88336614)
3. [在统计学中为什么要对变量取对数？](https://www.zhihu.com/question/22012482)
4. [Variational Inference 及ELBO公式推导](https://zhuanlan.zhihu.com/p/336102729)
5. [从零推导：变分自编码器（VAE）](https://zhuanlan.zhihu.com/p/249296925)
6. [MCMC随机采样](https://zhuanlan.zhihu.com/p/30003899)



