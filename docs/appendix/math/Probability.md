# 概率统计基础

## 符号约定

* $P(A,B)=P(AB)=P(A \cap B)$

## 基本概念

### 期望

#### 定义

离散的随机变量的期望（或平均值）为

* $E(f(x))=\sum_{k=1}^n{f(x_k)P(x_k)}$

连续的随机变量的期望为

* $E(f(x))=\int_{-\infty}^{+\infty}{f(x)p(x)dx}$

#### 注意点
* $E(f(x)) \ne f(E(x))$
    - 函数的期望不一定等于期望的函数
* $E(A + B) = E(A) + E(B)$
* $E(AB) \ne E(A)E(B)$
    - 乘积的期望不一定等于期望的乘积
    - $A$, $B$ 独立时相等，注意独立一定无关，无关不一定独立

### 方差

#### 定义

$$
Var(x) = E((x - E(x))^2 = E(x^2) - E^2(x)
$$

#### 注意点

* $Var(A + B) \ne Var(A) + Var(B)$
  * $A$, $B$ 不相关时相等

### 协方差

$$
COV(A, B) = E((A - E(A)(B-E(B))) = E(AB) - E(A)E(B)
$$

### 独立与无关

#### 无关

$$
COV(A, B) = 0
$$

#### 独立

$$
P(AB) = P(A)P(B)
$$

#### 注意点

独立一定无关，无关不一定独立

### 条件概率公式

$$
p(A|B)=\frac{P(A, B)}{P(B)}
$$

## 常见分布

### 均匀分布 Uniform

假设随机变量 $X$ 服从 $[a, b]$ 上的均匀分布, 即 $X \sim U(a,b)$。随机变量 $X$ 取 $a$ 和 $b$ 之间任意一个数的概率相等。

### 伯努利分布 Bernoulli 

也称为“0-1分布”、“两点分布”。参数为 $p$, 随机变量 $X$ 以概率 $p$ 取 $1$，以概率 $1-p$ 取 $0$，两种结果发生与否互相独立。

* $E(X)=p$
* $Var(X)=p(1-p)$

### 二项分布 Binomial

重复 $n$ 次的**独立**伯努利试验，每次试验中随机变量均服从伯努利分布，试验之间结果独立。记取得 $1$ 的总次数$k$为随机变量 $X$, 则：
$$
P(X=k)=C_n^kp^{k}(1-p)^{n-k}
$$

* $E(X)=np$
* $Var(X)=np(1-p)$

### 多项分布 Multinomial

TBA

### 泊松分布 Poisson

$$
P(X=k)=\frac{\lambda^k}{k!}e^{\lambda}
$$

其中，$\lambda$ 是单位（如单位时间、单位面积）内随机时间平均发生次数。

* $E(X)=\lambda$
* $Var(X)=\lambda$

### 贝塔分布 Beta

TBA

### 狄利克雷分布 Dirichlet

TBA

### 正态分布 Normal

假设随机变量 $X$ 服从位置参数（均值）为 $\mu$,  尺度参数为 $\sigma$（方差为$\sigma^2$） 的正态分布, 即 $X \sim N(\mu,\sigma^2)$，则其概率密度函数为：
$$
f(x)=\frac{1}{\sqrt{2\pi\sigma^2}}exp(-\frac{(x-\mu)^2}{2\sigma^2})
$$

#### 标准正态分布

$\mu=0, sigma=1$ 的正态分布：
$$
f(x)=\frac{1}{\sqrt{2\pi}}exp(-\frac{x^2}{2})
$$

### 高斯分布 Gaussian

同正态分布

## 概率模型

### 基本概念

* 描述：基于物体的某种内在属性 $y$，物体呈现出了某种可观测性质 $x$。则式 $p(y|x)$ 意为通过可观测性质 $x$ 反推出物体有内在属性 $y$ 的概率分布。不妨称 $y$ 为 因，$x$ 为果。

#### 贝叶斯公式

$$
p(y|x)=\frac{p(x|y)p(y)}{p(x)}
$$

##### 后验概率 (posterior)

* $p(y|x)$
* 由结果推断原因的概率分布

##### 先验概率 (prior)

* $p(y)$
* 原因概率分布

##### 似然估计 (likelihood)

* $p(x|y)$
* 原因到结果的概率分布

##### 证据（evidence）

* $p(x)$
* 结果的概率分布

##### 判别式模型与生成式模型

* 判别式模型直接建模 $p(y|x)$，例如：决策树，神经网络，支持向量机

* 生成式模型先对 $p(x,y)$ 建模，再由 $p(y|x)=\frac{p(x, y)}{p(x)}$ 得到 $p(y|x)$，例如：贝叶斯分类器，贝叶斯网

### 参数估计

#### 极大似然估计（Maxmimum Likelihood Estimation, MLE）

$$
p(y|x) \varpropto p(x|y)
$$

##### 常用$p(x|y)$先验分布

###### 离散值

* 二项分布
* 泊松分布

###### 连续值

* 正态分布

##### 朴素贝叶斯

基于属性独立假设
$$
p(\boldsymbol{x}|c)=\prod_{x}p(x|c)
$$

#### 最大后验估计（Maximum A Posteriori estimation, MAP）

$$
p(y|x) \varpropto p(x|y)p(y)
$$

#### 贝叶斯估计（Bayesian Estimation）

$$
p(y|x) \varpropto \frac{p(x|y)p(y)}{p(x)}
$$

### 概率估计

* 离散属性：统计频率，可能需要加上拉普拉斯修正，避免“未被观测”被等价于“出现概率为0”
* 连续属性，假设为正态分布，估计均值和方差

## 假设检验

## Trick

### 拉普拉斯修正

给每一个估计的概率值都加上一个很小的偏置，使其不为 0

## Reference

[极大似然估计与最大后验概率估计](https://zhuanlan.zhihu.com/p/40024110)

[最大似然估计、最大后验估计、贝叶斯估计的对比](https://www.cnblogs.com/jiangxinyang/p/9378535.html)

[贝叶斯估计、最大似然估计、最大后验概率估计](http://noahsnail.com/2018/05/17/2018-05-17-%E8%B4%9D%E5%8F%B6%E6%96%AF%E4%BC%B0%E8%AE%A1%E3%80%81%E6%9C%80%E5%A4%A7%E4%BC%BC%E7%84%B6%E4%BC%B0%E8%AE%A1%E3%80%81%E6%9C%80%E5%A4%A7%E5%90%8E%E9%AA%8C%E6%A6%82%E7%8E%87%E4%BC%B0%E8%AE%A1/)

[概率的意义：随机世界与大数法则](https://mp.weixin.qq.com/s/-NJ2qj-ZjUBXVj8FPLCWmA)