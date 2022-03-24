# 强化学习

强化学习就是学习“做什么（即如何把当前的情境映射成动作）”才能使数值化的收益信号最大化。

* 【试错】学习者不会被告知应该采取什么动作，而是必须自己通过尝试去发现那些动作会产生最丰厚的累积收益。
* 【延迟收益】动作往往影响的不仅仅是即时收益，也会影响下一个情境，从而影响随后的收益。

收益 —— reward，回报 —— return，gain

幕 episode


## 一些关键性的概念

### 折扣加权平均

$$
(1-a)^n+\sum_{i=1}^{n}\alpha(1-a)^{n-i}=1
$$

权值和是 1

### bootstrap (自举)
用后继各个状态的价值估计值来更新当前某个状态的价值估计值。

### 最大化偏差

原因：将估计值中的最大值视为对真实价值的最大值的估计

解决方法：double-Q，一个Q用来确定最大动作，一个Q用来计算其价值估计

$$
Q_1(S,A) \leftarrow Q_1(S,A) + \alpha(R + \gamma Q_2(S',argmax_{a}Q_1(S',a))-Q_1(S,A))
$$

### 对比

#### DP vs MC vs TD
* DP: model-based
* MC: model free,  exclusively relying on actual rewards and complete returns. 
* TD: model free, TD learning methods update targets with regard to existing estimates. This approach is known as bootstrapping.

DP 利用了 bootstrap (自举) 法来进行**期望更新**。MC 和 TD 都是**采样更新**。
但相较于MC，TD单次采样不需要进行到终局，它使用了自举法，用当前估计值来代替真实值。
相较于DP，TD 的计算是基于采样得到的单个后继节点的样本数据，而不是基于所有可能后继节点的完整分布。 

## 探索利用窘境

* $\epsilon$-greedy
* UCB: quantize the uncertainty and treat as a part of the value estimation.

$$
A_t = \mathop{argmax} \limits_{a} [Q_t(a)+c\sqrt{\frac{ln~t}{N_t(a)}}]
$$

* softmax

$\epsilon$-greedy 进行非贪心决策的时候是盲目的选择，但更好的是根据潜力（即可能的收益）来进行选择。潜力的评估指标有：

* 估计的最大值 $\rightarrow$ 会导致最大化偏差
* 不确定性

### off-policy:

* target policy (目标策略): 用来学习的策略
* 行动策略: 生成行动样本的策略

相比较于 on-policy，off policy 方差更大，收敛更慢


## 参考资料
[1] [深度增强学习（DRL）漫谈 - 从DQN到AlphaGo](https://blog.csdn.net/jinzhuojun/article/details/52752561)

[2] [A (Long) Peek into Reinforcement Learning](https://lilianweng.github.io/lil-log/2018/02/19/a-long-peek-into-reinforcement-learning.html)

[3] [强化学习怎么入门好？ - 花潇的回答 - 知乎](https://www.zhihu.com/question/277325426/answer/780369865)

## 环境
### Gym
Gym is a toolkit for developing and comparing reinforcement learning algorithms. It supports teaching agents everything from walking to playing games like Pong or Pinball.[[Official website]](https://gym.openai.com/)

#### A New Gym Env
##### Create a env class
```text
The main API methods that users of this class need to know are:
        step
        reset
        render
        close
        seed
And set the following attributes:
        action_space: The Space object corresponding to valid actions
        observation_space: The Space object corresponding to valid observations
        reward_range: A tuple corresponding to the min and max possible rewards
```
Refer to the [full documentation](https://github.com/openai/gym/blob/master/docs/creating-environments.md) 
and [code](https://github.com/openai/gym/blob/master/gym/core.py) for the details

All `step` function should return four values:

```text
observation (object): agent's observation of the current environment
reward (float) : amount of reward returned after previous action
done (bool): whether the episode has ended, in which case further step() calls will return undefined results
info (dict): contains auxiliary diagnostic information (helpful for debugging, and sometimes learning)
```

`reset` fucntion should return the initial states


##### Register the new environment

using the following code to register a new gym environment
```python
from gym.envs.registration import register

register(
    id='VirtualTB-v0',
    entry_point='virtualTB.envs:VirtualTB',
)
```