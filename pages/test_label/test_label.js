// pages/test_label/test_label.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxItems: [
      {name: 'CHN', value: '中国', checked: 'true'},
      {name: 'USA', value: '美国'},
      {name: 'BRA', value: '巴西'},
      {name: 'ENG', value: '英国', checked: 'true'},
      {name: 'TUR', value: '法国'},
    ],
    hidden: false
  },

  chenkboxChange: function (e) {
    var checked = e.detail.value;
    console.log(checked);
    var changed = {};
    for (let i = 0; i < this.data.checkboxItems.length; i++) {
      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
        changed['checkboxItems[' + i + '].checked'] = true;
      } else {
        changed['checkboxItems[' + i + '].checked'] = false;
      }
    }
    this.setData(changed);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    console.log(this.data);
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