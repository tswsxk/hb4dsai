# 代码测试

## 基础知识

### 覆盖度

#### 相关资料

[Coveralls自动测试代码覆盖率](https://blog.csdn.net/timo1160139211/article/details/77658239)

## 面向Python的代码测试

### Pytest

#### 基础知识与操作

pytest 有两个比较重要的配置文件：
* pytest.ini
* setup.cfg

##### 关键特性

##### [组参数测试](https://docs.pytest.org/en/latest/parametrize.html#pytest-mark-parametrize-parametrizing-test-functions)

```python
@pytest.mark.parametrize("params_name", ["p1", "p2", "p3"])
def test_func(params_name):
  print(params_name)
# 总共三次测试，params_name对应的值依次为 p1,p2和p3
```

##### 标准输入输出

```python
# using global variable capsys
def test_flush_print(capsys):
    print("test")
    captured = capsys.readouterr()
    assert captured.out == "test flush print"
```

#### pytest.ini

##### 忽略特定的检查项目

```text
# pep8
pep8ignore = E402 E201 E231
# flake8, see https://flake8.pycqa.org/en/latest/user/error-codes.html for details
flake8-ignore = E402 F401 F403 F405 F821 F841 W605
```

##### 重新设置单行长度限制
```text
# pep8
pep8maxlinelength = 120
# flake8
flake8-max-line-length = 120
```

#### setup.cfg

##### 忽略文件或文件夹

```text
[coverage:run]
omit =
    some dir/some dir/some dir/omit.py
    some dir/some dir/omit_dir/*
[coverage:report]
....
```

#### Q & A

##### 1. pytest 4.5 出现 marker warning 的解决方案：

```text
# for pep8
markers =
    pep8: pep8
# for flake8
markers
  	flake8: flake8
```

##### 2. 如何忽略特定的docstring test

* `PYTEST_DONT_REWRITE`


* 模拟
* flake8出现`E AttributeError: '_io.StringIO' object has no attribute 'buffer'`
  * [关联issue](https://github.com/bigdata-ustc/EduKTM/issues/23)
  * 解决方案：downgraded flake8 4.0.1 to 3.9.2 in setup.py

### Doctest

完整的flag可以参考官方文档

#### 常见case

##### docstring过长

可使用elipsis： `...`来省略部分内容（需声明`# doctest: +ELLIPSIS`）

[实例1](https://github.com/bigdata-ustc/EduNLP/blob/master/EduNLP/SIF/segment/segment.py#L354)

[实例2](https://github.com/bigdata-ustc/EduNLP/blob/master/EduNLP/SIF/sif.py#L88)

##### 无视空格、制表符差异（忽略对齐）

`# doctest: +NORMALIZE_WHITESPACE`

[实例](https://github.com/tswsxk/longling/blob/master/longling/ML/metrics/classification.py#L92)

### 相关资料

1. [Pytest 使用手册](https://learning-pytest.readthedocs.io/zh/latest/index.html)