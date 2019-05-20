$(function(){
    // 一开始让新建的编辑进行隐藏
    $('.btnEdit').css("display", "none")
    /// 获取所有分类数据--初始化
    init()
    // 为编辑按钮绑定事件--使用事件委托
    $('tbody').on('click', '.btn-edit',function(){
        // 设置一个自定义属性
        var data = $(this).data()
        $('#name').val(data.name)
        $('#slug').val(data.slug)
        $('#id').val(data.id)
        $('.btnEdit').css("display", "block")
        $('.btnAdd').css("display", "none")
    })
    // 实现编辑提交
    $('.btnEdit').on('click', function () {
        // 判断输入不能为空
        var name = $('#name').val()
        var slug = $('#slug').val()
        // 验证
        if(name.trim().length==0){
            $('.alert-danger').html('<strong>错误！</strong> <span>编辑不能为空</span>').fadeIn(1000).delay(2000).fadeOut(1000)
            return
        }
        if(slug.trim().length==0){
            $('.alert-danger').html('<strong>错误！</strong> <span>请输入英文别名</span>').fadeIn(1000).delay(2000).fadeOut(1000)
            return
        }
        $.ajax({
            type: 'post',
            url: '/updateCategories',
            data: $('form').serialize(),
            dataType: 'json',
            success:function(result){
                if(result.code==200){
                    $('.alert-danger span').text(result.msg)
                    $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)  
                init()
                    // 重置表单元素的数据
                    $('.btnEdit').css("display", "none")
                    $('.btnAdd').css("display", "block")
                    // $('#name').val('')
                    // $('#slug').val('')
                    // $('#id').val('')
                }else {
                    $('.alert-danger span').text(result.msg)
                    $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                }
            }
        })
    })

    // 实现添加分类数据
    $('.btnAdd').on('click',function(){
        var slug = $('#slug').val()
        var name = $('#name').val()
        // 验证
        if(name.trim().length==0){
            $('.alert-danger').html('<strong>错误！</strong> <span>请输入中文名称</span>').fadeIn(1000).delay(2000).fadeOut(1000)
            return
        }
        if(slug.trim().length==0){
            $('.alert-danger').html('<strong>错误！</strong> <span>请输入英文别名</span>').fadeIn(1000).delay(2000).fadeOut(1000)
            return
        }
        $.ajax({
            type: 'post',
            url: '/addCategories',
            data: $('form').serialize(),
            dataType: 'json',
            success: function(result){
                if (result.code == 200) {
                    $('.alert-danger span').text(result.msg)
                    $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                   
                    // 刷新
                    init()
                } else {
                    $('.alert-danger span').text(result.msg)
                    $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                
                }
            }
        })
    })
    // 全选全不选 
    $('.chkAll').on('click',function(){
        // checkbox的checked只能通过prop来获取和设置
        var statu = $(this).prop('checked')
        // 为所有tbody中的复选框设置相同的checked属性
        $('tbody .chkone').prop('checked',statu)
        // 获取当前所有被选择的复选框
        var allchk = $('tbody .chkone:checked')
         // 获取所有的tbody中的被选中复选框，判断数量>1,则显示批量删除按钮
        if(allchk.length > 1){
            $('.btn-dels').fadeIn(500)
        }else {
            $('.btn-dels').fadeOut(500)
        }
    })
    // 单击数据对应的复选框
    $('tbody').on('click','.chkone',function(){
        // 获取当前所有没被选择的复选框
        var cnt = $('tbody .chkone').length
        // 获取当前所有被选择的复选框
        var allchk = $('tbody .chkone:checked')
        if(allchk.length > 1){
            $('.btn-dels').fadeIn(500)
        }else{
            $('.btn-dels').fadeOut(500)
        }if(allchk.length == cnt){
            $('.chkAll').prop('checked',true)
        }else{
            $('.chkAll').prop('checked',false)
        }
    })
})

    // 批量删除
    $('.btn-dels').on('click',function(){
        // 获取所有被选中的复选框
        var allchk = $('tbody .chkone:checked')
        // 判断为一个数组才可以拿到里面额ID
        var ids = []
        // 因为id号是存储在一个一个的复选框中的自定义属性中
        // 我们就需要遍历这些被选中的复选框，从中获取里面存储的自定义属性idz
        for(var i = 0; i<allchk.length; i++){
            ids.push(allchk[i].dataset['id'])
        }
        $.ajax({
            type:'post',
            url:'/delCategories',
            data:{ids:ids.join(',')},
            dataType:'json',
            success:function(result){
                if (result.code == 200) {
                    $('.alert-danger span').text(result.msg)
                    $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                    // 刷新
                    init()
                } else {
                    $('.alert-danger span').text(result.msg)
                    $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                }
            }
        })
    })
function init(){
        $.ajax({
            type:'get',
            url:'/getCategories',
            dataType:'json',
            success:function(result){
                // console.log(result)
                // 调用模块引擎生成动态结构
                var html = template('cateListTemp',{list:result})
                $('tbody').html(html)
                $('#name').val('')
                $('#slug').val('')
            }
        })
    }


    // 删除单条分类数据（这个是使用自定义的，有时间再去使用函数————编辑）
    function delCate(id) {
        if(confirm('请问是否真的需要删除？')){
            $.ajax({
                type:'get',
                url:'/delCategoryById',
                data:{id},
                dataType:'json',
                success:function(result){
                    if(result.code ==200){
                        $('.alert-danger span').text(result.msg)
                        $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                        init()
                    }else{
                        $('.alert-danger span').text(result.msg)
                        $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                    }
                }
            })
        }
    }
    

   