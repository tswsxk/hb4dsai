# 常用Linux指令

## 压缩解压缩

1. gz

```shell
# 压缩
gzip $src
# 解压缩
gzip -d $file.gz
```

1. tar

```shell
# tar.gz 压缩
tar zcvf $tar $src
# tar.gz 解压缩
tar zxvf $src
```

[Linux压缩和解压常用命令](https://cloud.tencent.com/developer/article/1426584)

## 显示文本特定行内容

```shell
# 打印$file中的第4行
sed -n 4p $file
# 打印file中的4-8行
sed -n 4,8p $file
```
## 下载数据
```shell
wget $url
```

## scp 数据传输
```shell
# 基本操作
scp $src $tar
# 指定端口, e.g., 2333
scp -P 2333 $src $tar
```