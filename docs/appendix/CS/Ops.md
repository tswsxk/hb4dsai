# 服务器运维指南


## 操作系统版本查看

### CentOS

```bash
cat /proc/version
```

## 服务器日常状态检查

### 检查项目

#### GPU

```bash
# 1.显存使用(Memory-Usage)多而GPU使用率(Volatile)低证明有问题
nvidia-smi
# 2.如果执行nvidia-smi指令发现不是Persistence-M模式，需用此指令开启
nvidia-smi -pm 1
# 3.同1，部分机器无此命令
gpustat -p
```

#### CPU

```bash
# CPU信息在/proc/cpuinfo中
# 查看CPU物理核心数
cat /proc/cpuinfo | grep "cpu cores" | uniq
# 查看单核逻辑核数，CPU_KERNEL_NUMBER = CPU物理核心数 * 单核逻辑核数
cat /proc/cpuinfo | grep "physical id" | sort | uniq | wc -l
# 查看CPU逻辑核心数，若逻辑核数 > CPU_KERNEL_NUMBER，则为开启超线程
cat /proc/cpuinfo | grep "processor" | wc -l
```

#### 空间检查

##### 硬盘空间检查

```bash
df -h
```

重点看一下 / 和 /home的剩余空间

##### 用户空间检查

务必在sis1下进行，其它机器的home目录对应sis1的/data

```bash
du -h --max-depth=1 
```

如果有用户占用空间超过2T，且超过3天，需提醒其转存数据

#### 用户进程检查

##### 整体情况

```bash
top
```

确保load_average < 1.5 * CPU_KERNEL_NUMBER, 0 stopped, 0 zombie。使用 m 来查看内存和swap使用情况，swap超过80%时有宕机危险，此时可以使用 M 来排序查找内存使用大的程序，c 查看其具体命令。若长时间运转，管理员需联系程序使用者暂停程序。

##### 非正常状态进程

###### 查找

```bash
# sTop状态的进程
ps -e -o stat,user,pid,cmd | grep ^T
# Zombie状态的进程
ps -e -o stat,user,pid,cmd | grep ^Z
```

###### 清除

下面操作务必慎重

```bash
# 清除sTop状态的进程
ps -e -o stat,user,pid,cmd | grep ^T | awk '{print $3}' | xargs -i kill -9 {}
# 清除Zombie状态的进程
ps -e -o stat,user,pid,cmd | grep ^Z | awk '{print $3}' | xargs -i kill -9 {}
```

### 端口占用检查

```bash
# 查看开启的端口
firewall-cmd --list-ports
# 查看端口占用
sudo netstat -ntlp
# 通过pid查看占用端口进程的具体信息
ps -aux | grep pid
```

## 服务器安全

### 清除恶意用户

```bash
# 杀死用户名下所有进程
pkill -t username
# 锁定用户
passwd -l username
```

## 安装与更新

### 安装软件

#### CentOS

使用yum命令安装

```bash
sudo yum install XXXX
```

### Python 更新指南

将编译好的python版本放在home目录下，之后将软链接链接过去即可

建议保存当前最新版本前两个版本的python，同时使用当前最新版本的前一个版本的python作为默认版本

```bash
sudo ln -snf /home/python.xx/bin/python.xx /usr/bin/python.xx
```

### Cuda 更新指南

把cuda软链接指向最新的cuda

进入目录 /usr/local，执行

```bash
sudo ln -snf cuda.xx cuda 
```

### Tensorflow 更新指南

TBA

### Mxnet 更新指南

TBA

### Pytorch 更新指南

TBA

## 用户与权限

### Linux

下述所有 XXX 代指 username

#### 添加普通用户

```bash
# 添加用户
sudo useradd -m -s /bin/bash XXX
# 修改密码
sudo passwd XXX
```

#### 删除用户

操作前请三思

```bash
sudo userdel -r XXX
```

若用户占用空间较大，则删除时间可能会较长

#### 添加管理员用户

修改 /etc/sudoers 文件

```bash
sudo vim /etc/sudoers
```

添加一行

```
XXX	ALL=(ALL)	ALL
```

之后 `wq!` 确认

##### 以加组形式添加管理员账户
如果 `/etc/sudoers` 中有如下语句，则可以通过加组的方式添加管理员账户
```
%wheel  ALL=(ALL)       ALL
```
使用如下命令：
```bash
usermod -a -G wheel xxx
```

#### 通过SSH进行访问控制

添加或删除用户

```bash
sudo vim /etc/ssh/sshd_config
```

在

```
AllowUsers XXX1 XXX2 XXX3
```

进行增删操作

执行下列操作使修改生效

```bash
sudo systemctl reload sshd.service
```

## 内核切换
首先查看可用内核
```bash
awk -F\' '$1=="menuentry " {print i++ " : " $2}' /etc/grub2.cfg
```
切换内核
```bash
grub2-set-default x
```
`x` 为用`awk`查看得到的内核编号