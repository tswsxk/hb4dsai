# Windows exe开发

## 基于Python的windows exe构建方法

### pyinstaller

```bash
pyi-makespec script.py
pyinstaller script.sprc
```

#### 定制化

修改 `.spec` 内容

```
exe = EXE(pyz,
          a.scripts,
          [],
          exclude_binaries=True,
          name='main',
          debug=True,
          bootloader_ignore_signals=False,
          strip=False,
          upx=True,
          console=True ) # console 设为 False 如果不希望弹出命令行窗口
```
### 创建应用安装向导

#### [NSIS](https://nsis.sourceforge.io/Download)

#### [HM NIS EDIT](http://hmne.sourceforge.net/)

### Q & A

###### 1. 导入 torchvision 失败，出现 `OSError: could not get source code`问题

解决方法: 将 `torchvision` 设定为 `0.2.2.post3`

```
pip uninstall torchvision
pip install torchvision==0.2.2.post3
```

###### 2.导入 mxnet 失败, 出现`RuntimeError: Cannot find the MXNet library`

解决方案：将mxnet源包放到工程目录下

```
pyinstaller -F --add-data="<python_path>/lib/python3.7/site-packages/mxnet/*;./mxnet" script.py
```

###### 3.导入jieba失败，出现`FileNotFoundError：[Error 2]No such file or directory: 'xxx/jieba/dict.txt'`

解决方案：将jieba源包内的 `dict.txt` 放到工程目录的`jieba/`

### 参考资料

[如何将 Python 程序打包成 .exe 文件？ - 刘哈哈的文章 - 知乎](https://zhuanlan.zhihu.com/p/45288707)

[如何为Python程序制作Windows安装包？ - 州的先生的文章 - 知乎](https://zhuanlan.zhihu.com/p/61965739)


## 网页

### 参考资料
[1小时搞定卡片拖拽、自动排列交换位置、拖拽数据存取](https://mp.weixin.qq.com/s/y1DUrN7VxfNgAkMSA4uAUA)