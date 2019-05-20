// 前台首页
exports.getIndexPage = (req,res) =>{
    res.render('index.ejs')
}
exports.getDetailPage = (req,res) =>{
    res.render('detail.ejs')
}
exports.getListPage = (req,res) =>{
    res.render('list.ejs')
}

// 后台首页




exports.getAdminPage = (req,res) =>{
    // if(req.session.isLogin && req.session.isLogin == 'true'){
        res.render('admin/index.ejs')
    // }else{
    //     res.redirect('/admin/login')
    // }
}
exports.getCategoriesPage = (req,res) =>{
    res.render('admin/categories')
}
exports.getCommentsPage = (req,res) =>{
    res.render('admin/comments')
}
exports.getLoginPage = (req,res) =>{
    res.render('admin/login')
}
exports.getNavMenusPage = (req,res) =>{
    res.render('admin/nav-menus')
}
exports.getPasswordResetPage = (req,res) =>{
    res.render('admin/password-reset')
}
exports.getPostAddPage = (req,res) =>{
    res.render('admin/post-add')
}
exports.getPostsPage = (req,res) =>{
    res.render('admin/posts')
}
exports.getProfilePage = (req,res) =>{
    res.render('admin/profile')
}
exports.getSettingsPage = (req,res) =>{
    res.render('admin/settings')
}
exports.getSlidesPage = (req,res) =>{
    res.render('admin/slides')
}
exports.getUsersPage = (req,res) =>{
    res.render('admin/users')
}
