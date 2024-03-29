import wepy from 'wepy'

export default class globalMixin extends wepy.mixin {
  data = {
  }
  methods = {
    navTo (path) {
      wx.navigateTo({
        url: path
      })
    },
    tabTo (path) {
      wx.switchTab({
        url: path
      })
    },
    redirectTo (path) {
      wx.redirectTo({
        url: path
      })
    },
    reLaunchTo (path) {
      wx.reLaunch({
        url: path
      })
    },
    onPhoneCall (phone) {
      wepy.makePhoneCall({
        phoneNumber: phone
      })
    }
  }
  
  setRegion (region) {
    wx.setStorageSync('province', region[0])
    wx.setStorageSync('city', region[1])
    wx.setStorageSync('district', region[2])
    
    this.$parent.globalData.province = region[0]
    this.$parent.globalData.city = region[1]
    this.$parent.globalData.district = region[2]
  }
  
  setRegionQueryParam (queryParam) {
    queryParam.provinceName = this.$parent.globalData.province == '全部'
      ? ''
      : this.$parent.globalData.province
    queryParam.cityName = this.$parent.globalData.city == '全部'
      ? ''
      : this.$parent.globalData.city
    queryParam.districtName = this.$parent.globalData.district == '全部'
      ? ''
      : this.$parent.globalData.district
  }
  
  onShow () {
    // logger.debug('mixin onShow')
  }
  
  onLoad () {
    // logger.debug('mixin onLoad')
    wx.showShareMenu({
      withShareTicket: true
    })
  }
  
}
