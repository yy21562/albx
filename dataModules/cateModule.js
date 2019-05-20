var connection =require('./connModule')
// 引入之后，设置MySQL
// var mysql = require('mysql')
// var connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'root',
//     database:'albx'
// })
// 查询出所有的数据
exports.getAllList = (callback) =>{
    var sql = 'select * from categories where id != 1'
    // 调用query方法进行处理
    connection.query(sql,(err,results) => {
        if(err){
            callback(err)
        }else{
            callback(null,results)
        }
    })
}
// 根据id实现编辑操作
exports.updateCategories = (obj,callback) => {
    var sql = "update categories set slug = ?,name = ? where id = ?"
    connection.query(sql,[obj.slug,obj.name,obj.id],(err,results)=>{
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}


// 实现数据的编辑提交
exports.addCategories = (obj,callback) =>{
    var sql = 'insert categories values(null,?,?)'
    connection.query(sql,[obj.slug,obj.name],(err,results)=>{
        if(err){
            callback(err)
        }else{ 
            callback(null)
        }
    }) 
}

// 根据id删除分类数据
exports.delCategoryById = (id,callback) =>{
    var sql = 'delete from categories where id =?'
    connection.query(sql,[id],(err,results) =>{
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}


// 实现批量删除
exports.delCategories = (ids,callback)=>{
    console.log(ids);
    
    // ?会将传入的参数当成一个值来处理
    // var sql = 'delete from categories where id in (${ids})'
    var sql = `delete from categories where id in (${ids})`
    connection.query(sql,(err,results) =>{
        console.log(err)
        console.log(ids,sql)
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}


