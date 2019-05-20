
var postsModule = require('../dataModules/postModule')
module.exports = {
    getAllPostList(req,res){
        postsModule.getAllPostList(req.query,(err,data) =>{
            if(err){
                res.json({
                    code:404,
                    msg:'err'
                })
            }else{
                res.json({
                    code:200,
                    data:data
                })
            }
        })
    }
}