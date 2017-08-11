
// pages/about/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    userProfile:{
      job:'web前端工程师',
      location:'北京',
      profession:'IT职业教育',
      email:'745453570@qq.com',
      wechat:'yundanfengqing',
      mobile:'17316080529',
      // github:'https://github.com/SmallLabRaDor',
      introduction:`姓    名	：范振宇	
                    民    族	：汉		
                    联系电话：17316080529	
                    邮    箱：m17316080529@163.com	
                    现居地址：北京市海淀区
                    出生年月：19**.01	
                    性    别：男
                    工作经验：三年
                    期望职位：web前端工程师   
                    期望薪资：15k
                    
                    精通html5、css3、Javascript等Web前端开发技术
                    对sass、less等css预处理工具熟练掌握
                    熟练使用jquery库，以及第三方插件库（swiper、zepto、iscroll、tween.js等第三方插件）可实现页面的基本功能
                    掌握rem布局、弹性盒布局以及bootstrap前端框架，响应式布局/media媒体查询等
                    掌握angular的ngRoute、directive、factory以及filter前端开发技术
                    掌握vue-router、vue-cli以及component之间的通信
                    熟悉ES6语法
                    熟练使用ajax、jsonp并与后台数据交互
                    了解npm、cnpm等包管理工具
                    熟悉git、svn等代码管理工具
                    了解并使用gulp、webpack等自动化工具进行代码压缩
                    能够调用第三方接口，实现短信验证功能、百度地图、第三方登录等
                    了解mysql的增删改查、node搭建简单服务器、php的基本语法
                    了解SEO及性能优化
                    编写过微信程序的小demo
                    熟悉前后端分离开发模式，具有前后端分离开发经验，熟悉主流浏览器的兼容
                    
                    2013.11 -- 2015.04          北京北旅时代商务旅游投资有限公司
                      负责公司产品web前端功能设计、开发和实现
                      用sass预处理工具编辑样式
                      使用js编写封装良好的前端交互组件，维护及优化网站前端页面性能
                      使用angular对项目进行模块化开发

                    2015.05 -- 2017.08          爱奇清科（北京）信息科技有限公司
                      负责html、css的编写，解决设配问题
                      对完成的页面进行维护和前端性能做相应的优化
                      使用php操作mysql数据库实现登录注册功能
                      使用vue-cli对项目进行模块化开发
                      运用git管理代码

                    2002.09-2006.06                
                      河北经贸大学                       
                      信息管理与技术（本科）

                    项目名称：创业邦 （PC端）
                    项目地址：http://www.cyzone.cn/
                      项目简介：
                          创业邦是中国领先的专业创业服务平台，致力于帮助创业者实现创业梦想，推 动各领域高成长企业快速发展。
                      主要负责创投库模块使用 html+sass 编译 css+jquery 实现页面的动态效 果，运用 ajax 渲染数据，将项目模板化提高产品性能。
                      项目职责：
                      1、使用 sass 进行页面的样式编辑
                      2、使用 jquery 完成所需要的动态功能
                      3、利用 seajs 实现 javascript 的模块化开发及加载机制
                      4、对项目进行优化，提升产品性能
                      5、通过 ajax 调用后台接口完成页面的筛选、数据展示、分页


                    项目名称：创业邦 （客户端）
                    项目地址：http://m.cyzone.cn/ 
                      项目简介：
                      创业邦是中国领先的专业创业服务平台，致力于帮助创业者实现创业梦想， 推动各领域高成长企业快速发展。
                      主要负责创投库模块使用 html+sass 编译 css+jquery+js 插件实现页面的 动态效果，ajax 渲染数据，webpack+git 进行文件打包并管理代码。
                      项目职责：
                      1、根据设计图使用完成页面布局
                      2、引用 layer.js、headroom.js 等插件实现动态模态框功能
                      3、与后台交流并完成前后端数据交互功能
                      4、运用 webpack 自动化工具完成代码压缩
                      5、使用 git 进行代码管理  

                    项目名称：创业邦后台管理
                      项目简介：
                      创业邦后台管理系统主要用于对网站前后的信息管理，如文字，图片，影音和 其它日常使用的文件的发布、更新、删除等操作，同时包括用户信息、收藏信息、 访客信息的统计和管理，以使得前台内容能够得到及时更新和调整。
                      运用 node.js 中 express+static+cookie+session+mysql 等中间件搭建后台 系统，使用 vue.js+bootstrap 进行页面响应式布局和页面跳转，使用 mysql 对数 据进行简单的增删改查。
                      项目职责：
                      1、通过 bootstrap 框架进行响应式布局
                      2、通过 vue-router实现页面切换
                      3、运用 vue-cli对项目进行模块化开发
                      4、使用 mysql 语句和php进行数据库的增查改删
                      5、对项目进行维护和修改

                    项目名称：北京旅游集散中心
                    项目地址：http://www.bjlyjszx.com/index.jsp 项目简介：
                      北京旅游集散中心，通过旅游招徕、旅游客运、旅游咨询、广告、商品开发销售、旅游文化传播为来京的旅游者提供便利、舒适、安全、快捷和实惠的旅游服务。
                      主要负责北京旅游集散中心首页模块，使用 html+css+jquery+ajax 实现动态 数据交互功能，采用 svn+gulp 进行项目管理和代码压缩。
                      项目职责： 
                      1、与 UI 交流并使用 html5+css3 完成页面布局
                      2、使用多种样式解决浏览器兼容问题
                      3、与后台交流使用 ajax 进行页面的数据交互
                      4、使用 svn 对项目进行线上管理
                      5、运用 gulp 自动化工具完成代码压缩 `
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      console.log(userInfo)
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    
  },
  onShareAppMessage: function () {
    return {
      title: '雲淡風輕 ',
      path: '/pages/about/index?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})