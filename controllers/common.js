module.exports = {
    getParameter(str) {
        var obj = {}
        // http://127.0.0.1:3004/delCategoryById?id=3&name=jack   // (+1)id=3&name=jack
            str = str.substring(str.lastIndexOf('?')+1)  
            var arr = str.split('&')
            for(var i = 0;i<arr.length;i++){
                var temp = arr[i].split('=')
                obj[temp[0]]=temp[1]
            }
        return obj
    }
}