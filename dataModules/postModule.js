var connection = require('./connModule')
module.exports = {
    getAllPostList(query,callback){
        var sql = `select posts.id,posts.title,posts.created,posts.status,users.nickname,categories.name
                    from posts
                    inner join users on posts.user_id = users.id
                    inner join categories on posts.category_id = categories.id
                    limit ${(query.pageNum-1)*query.pageSize},${query.pageSize}`
        connection.query(sql,(err,results)=>{
            if(err){
                callback(err)
            }else {
                // 查询完数据结果集之后，再进行总数量的查询
                sql = 'select count(*) cnt from posts'
                connection.query(sql,(err,results1)=>{
                    if(err){
                        callback(err)
                    }else {
                        // 将数据和总数一起返回
                        // [{cnt:4}] > {cnt,4}
                        callback(null,{data:results,total:results1[0].cnt})
                    }
                })
            }
        })
    }
}