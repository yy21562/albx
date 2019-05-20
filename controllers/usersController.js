// 引入数据模板
var usersModule = require('../dataModules/usersModule')
// 实现登录验证 使用body-parser
exports.login =(req,res) =>{
    usersModule.getUserByEmail(req.body.email,(err,data)=>{
        if(err){
            res.json({
                code:201,
                msg:'服务器异常'
            })
        }else {
            if(data){
                if(data.password == req.body.password){
                    req.session.isLogin = 'true'
                    // req.session.currentUser = data
                    res.end(JSON.stringify({
                        code:200, 
                        msg:'登陆成功'
                    }))
                }else{
                    res.json({
                        code:201,
                        msg:'密码错误'
                    })
                }
            }else {
                res.json({
                    code:201,
                    msg:'邮箱错误'
                })
            }
        }
    })
}