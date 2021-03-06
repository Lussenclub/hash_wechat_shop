// pages/return/return.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    returnorder:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'userid',
      success: function(res) {
        wx.request({
          url: 'https://wx.nicehash.cn/api/returnorderlist.php?userid='+res.data,
          success:function(res){
            that.setData({
              returnorder:res.data.data
            })
          }
        })
      },
    })
  },
  orderdetail: function (e) {
    var that = this;
    var oid = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: '../orderdetail/orderdetail?oid=' + oid,
    })
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

  }
})