// pages/test_video/test_video.js

function getRandomColor () {
  let rgb = [];
  for (let i=0; i<3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    //console.log('color: ', color)
    color = color.length == 1 ? '0' + color : color;
    rgb.push(color);
  }
  return '#' + rgb.join('');
}


Page({

  inputValue: '',

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    danmuList: 
    [
      {
        text: '第1秒出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第5秒出现的弹幕',
        color: '#ff00ff',
        time: 5
      }
    ],
    current: 0,
  },

  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },

  bindButtonTap: function (e) {
    var that = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },

  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    });
    var danmuList = this.data.danmuList;
    danmuList.push({
      text: this.inputValue,
      color: getRandomColor(),
      time: parseInt(this.data.current) + 1
    });
    this.setData({
      danmuList : danmuList
    });
    console.log(this.data.danmuList);
  },

  bindTimeUpdate: function (e) {
    //console.log(e);
    this.setData({
      current: e.detail.currentTime
    })
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
    this.videoContext = wx.createVideoContext('myVideo', this);
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