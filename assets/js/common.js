var itcast = {
    getRouterName(urlStr){
        var index = urlStr.indexOf('?') 
        var routername
        if(index ==-1){
            routername = urlStr.substring(urlStr.lastIndexOf('/')+1)
        }else {
            routername = urlStr.substring(urlStr.lastIndexOf('/')+1,index)
    
        }
        return routername
    }
}


// module.exports = {
    
// }