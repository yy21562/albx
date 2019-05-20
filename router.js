var express = require('express')
var pagesController = require('./controllers/pagesController')
var usersController =require('./controllers/usersController')
var cateController = require('./controllers/cateController')
var postsController = require('./controllers/postController')

var router = express.Router()
// 前台文件路径'/'
router.get('/',pagesController.getIndexPage)
      .get('/detail',pagesController.getDetailPage)
      .get('/list',pagesController.getListPage)


// 约定后台页的请求都添加/admin路径 
    .get('/admin',pagesController.getAdminPage)
    .get('/admin/categories',pagesController.getCategoriesPage)
    .get('/admin/comments',pagesController.getCommentsPage)
    .get('/admin/login',pagesController.getLoginPage)
    .get('/admin/nav-menus',pagesController.getNavMenusPage)
    .get('/admin/password-reset',pagesController.getPasswordResetPage)
    .get('/admin/post-add',pagesController.getPostAddPage)
    .get('/admin/posts',pagesController.getPostsPage)
    .get('/admin/profile',pagesController.getProfilePage)
    .get('/admin/settings',pagesController.getSettingsPage)
    .get('/admin/slides',pagesController.getSlidesPage)
    .get('/admin/users',pagesController.getUsersPage) 

// 后台业务处理
    .post('/login',usersController.login)
    .get('/getCategories',cateController.getAllCateList)
    .post('/updateCategories',cateController.updateCategories)
    .post('/addCategories',cateController.addCategories)
    .get('/delCategoryById',cateController.delCategoryById)
    .post('/delCategories',cateController.delCategories)
    // 文章路由配置
    .get('/getAllPostList',postsController.getAllPostList)





module.exports = router