var express = require('express')
// 引入路由
var router = require('./router')
// 引入ejs
var ejs = require('ejs')
// 引入 body - parser  解析post 更方便取到键值对
var bodyParser = require('body-parser')
// 状态保持
var session = require('express-session')
// 创建服务器
var app = express() 
// 监听端口
app.listen(3004,() =>{
    console.log('http://127.0.0.1:3004')
})
// 托管静态资源
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))
// 配置模块引擎为ejs
app.set('view engine','ejs')
// 下面这个配置的作用是配置ejs的模板文件夹，以后ejs会自动的去指定的目录下寻找页面文件
app.set('views',__dirname + '/views')
 
// 配置模块引擎为body - parser
app.use(bodyParser.urlencoded({extended:false}))

// 配置使用session
app.use(session({
    secret: 'mywords', // 加盐，你可以指定只有你一个人知道字符串
    //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
    resave: false, 
    //强制“未初始化”的会话保存到存储。 
    saveUninitialized: false,
}))
// 添加所有请求的路由中间件函数 保持状态
app.use((req,res,next) => {
    console.log(req.url)
    // 判断是否登陆
    // 前台页面不用登陆:req.url.indexOf('/admin') == -1     || req.url.indexOf('/css') != -1
    if(req.session.isLogin && req.session.isLogin == 'true'|| req.url.indexOf('/admin') == -1 || req.url == '/admin/login'){
        next()
    }else{
        res.redirect('/admin/login')
    }
})


// 引入路由
app.use(router)   