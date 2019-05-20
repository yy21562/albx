var cateModule = require('../dataModules/cateModule')
var common = require('./common')

exports.getAllCateList =(req,res) =>{
    cateModule.getAllList((err,data)=>{
        // console.log(data);
        if(err){
            res.end('404')
        }else{
            res.json(data)
        }
    })
}

// 实现数据的编辑提交
exports.updateCategories = (req,res) => {
    var obj = req.body
    cateModule.updateCategories(obj,(err)=>{
        if(err){
            res.json({
                code:201,
                msg:'编辑失败'
            })
        }else{
            res.json({
                code:200,
                msg:'编辑成功'
            })
        }
    })
}

// 实现数据的编辑提交
exports.addCategories = (req,res) =>{
    var obj = req.body
    cateModule.addCategories(obj,(err) =>{
        if(err){
            res.json({
                code:201,
                msg:'添加失败'
            })
        }else{
            res.json({
                code:200,
                msg:'添加成功'
            })
        }
    })
} 
 
// 根据id删除分类数据
exports.delCategoryById = (req,res) =>{
    // 需要考虑的是我们需要的是后面的路径而不必全部且分离
    var id = common.getParameter(req.url).id
    cateModule.delCategoryById(id,(err)=>{
        if(err){
            res.json({
                code:201,
                msg:'删除失败'
            })
        }else{
            res.json({
                code:200,
                msg:'删除成功'
            })
        }
    })
}

// 实现批量删除
exports.delCategories =(req,res) =>{
    var ids = req.body.ids
    console.log("PPPPPPPPPPPPPPPPPPP")
    console.log(req.body)
    cateModule.delCategories(ids,(err) =>{
        // console.log(err)
        if(err){
            res.json({
                code:201,
                msg:'删除失败'
            })
        }else{
            res.json({
                code:200,
                msg:'删除成功'
            })
        }
    })

}