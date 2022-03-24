# 基于Python的后端开发

This part will focus on how to work with the front end skeletons in different back end frameworks like `flask` and `django`

## Flask

### 基础知识

#### Q & A

##### 1. has been blocked by CORS policy: Access-Control-Allow-Origin

解决方案: `flask-cors`

参考资料:  <https://stackoverflow.com/questions/52996455/no-access-control-allow-origin-header-on-post-flask-api>

### Flask with Vue

#### Vue + Flask

The most simple way to combine these two parts is to start two different service to handle front end and back end separately. More precisely, use the default listening port 8080 of `vue` to provide the front end service and use the default listening port 5000 of `flask` to provide the back end service. In fact, the back end is hidden from users and only can be seen by front end. The front end will request the back end service in inner javascript functions. 

#### Vue in Flask

Also, another way is to render the `index.html` directly in `flask` using the `render_template` method. Several points should be noticed as mentioned in Q&A [2](), [3]() and [4](). Indeed, this method can be supplement to [Vue + Flask]().

参考 [1](https://www.zcfy.cc/article/full-stack-single-page-application-with-vue-js-and-flask-4491.html)

#### Request passing in F-E (WIP)

Resource: [1](https://codeday.me/bug/20190119/552904.html),[2](https://www.jianshu.com/p/ead7317d01ec)

#### Q&A

##### 1. 去除url里的 # 号

A: 修改 `src/router/index.js`的`mode`变量

```js
// 默认无mode关键字，默认模式为 mode: 'hash'
export default new Router({
  mode: 'history',
})

```

##### 2. 修改build生成文件（默认dist）路径

A: 修改 `config/index.js` 中的 `index` 和 `assetRoot`变量

```js
// 变量已修改，和原文件比较
build: {
    // Template for index.html
    index: path.resolve(__dirname, '../../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../../dist')
}
```

##### 3. Flask 如何渲染Vue通过webpack build生成的模板网页（默认dist/index.html）

A: 注意模板文件路径，在`flask-python`中定义`app`变量时：

```python
# 注意 static_folder 和 template_folder 
# 要指向vue通过webpack build生成的模板网页位置
app = Flask(__name__, static_folder="../dist/static", template_folder="../dist")
```

##### 4. Flask如何使用Vue的路由系统

A: 添加一个 `catch_all`函数来处理所有路由

```python
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")
```

补充问题：这样会不会导致其它路由被捕捉到呢？比如

```python
@app.route('/test')
def test():
    return 'hello world'
```

是否会在vue的路由系统中进行路由？答案是不会的。

## Django 

### Django with Vue

Resource: [1](https://zhuanlan.zhihu.com/p/25080236)