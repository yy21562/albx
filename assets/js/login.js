$(function(){
// 点击按钮实现点击事件
    $('.btn-primary').on('click',function(){
        // 收集用户数据
        var email = $('#email').val()
        var password = $('#password').val()
        // 发起请求
        $.ajax({
            type:'post',
            url:'/login',
            data:{
                email: email,
                password: password
                // passwor也可以直接写一个，只要是跟数据库是一样的名称就可以了。键值对
            },
            dataType:'json',
            success:function(result){
                if(result.code==201){
                    $('.alert-danger').css('display','block')
                    $('.alert-danger span').text(result.msg)
                }else {
                    location.href = '/admin'
                }
            }
        })
    })
})