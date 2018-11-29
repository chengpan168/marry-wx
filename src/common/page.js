import wepy from 'wepy'
import httpMixin from '../mixins/http'
import globalMixin from '../mixins/global'
import logger from '../mixins/logger'

export default class page extends wepy.page {
  constructor () {
    super()
  }
  
  mixins = [httpMixin, globalMixin]
  
  $getUser () {
    return this.$get('/user/detail')
  }
  
  $wxLogin () {
    logger.debug('开始登录...')
    return wepy.checkSession().then(res => {
      logger.info('检查登录态成功', res)
      return wepy.getUserInfo().then(userRes => {
        return this.$login(userRes)
      })
    }).catch(res => {
      logger.info('登录态过期，微信本地重新登录', res)
      
      return wepy.login().then(loginRes => {
        logger.info('小程序本地登录成功', loginRes)
        
        return wepy.getUserInfo().then(userRes => {
          userRes.code = loginRes.code
          return this.$login(userRes)
        }).catch(e => {
          return Promise.reject('小程序获取微信用户信息失败')
        })
      }).catch(e => {
        logger.info('小程序本地登录失败', e)
        return Promise.reject('微信登录失败')
      })
    })
  }
  
  $login (data) {
    return this.$post('/wx/login', data).then(res => {
      logger.debug('三方服务器登录成功', res)
      
      let session = {
        token: res.token,
        userId: res.id,
        avatarUrl: res.data.avatarUrl,
        nickname: res.data.nickName
      }
      this.$setSession(session)
      
      return Promise.resolve(res)
    }).catch(e => {
      logger.error('三方服务器登录失败', e)
      return Promise.reject(e)
    })
  }
  
  $setSession (opt) {
    wepy.setStorageSync('token', opt.token)
    wepy.setStorageSync('userId', opt.userId)
    wepy.setStorageSync('avatarUrl', opt.avatarUrl)
    wepy.setStorageSync('nickname', opt.nickname)
    
    this.$parent.globalData.token = opt.token
    this.$parent.globalData.userId = opt.userId
    this.$parent.globalData.nickname = opt.nickname
    this.$parent.globalData.avatarUrl = opt.avatarUrl
  }
  
  $clearUser () {
    wepy.setStorageSync('token', '')
    wepy.setStorageSync('userId', '')
    wepy.setStorageSync('avatarUrl', '')
    wepy.setStorageSync('nickname', '')
  
    this.$parent.globalData.token = ''
    this.$parent.globalData.userId = ''
    this.$parent.globalData.nickname = ''
    this.$parent.globalData.avatarUrl = ''
  }
  
  $getLocation (force) {
    if (!force && (this.$parent.globalData.cityName || this.$parent.globalData.districtName)) {
      return Promise.resolve({
        districtCode: this.$parent.globalData.districtCode,
        districtName: this.$parent.globalData.districtName,
        cityCode: this.$parent.globalData.cityCode,
        cityName: this.$parent.globalData.cityName
      })
    }
    
    let that = this
    return wepy.getLocation({
      type: 'wgs84'
    }).then(res => {
      logger.info('小程序定位成功', res)
      return this.$get('/sys/getRegion', {
        lat: res.latitude,
        lng: res.longitude
      }).then(res => {
        logger.info('经纬度获取城市成功', res)
        let location = {
          cityCode: res.code,
          cityName: res.name
        }
        if (res.level == 'district') {
          location = {
            districtCode: res.code,
            districtName: res.name
          }
        }
        
        this.$setLocation(location)
        return Promise.resolve(location)
      }).catch(e => {
        logger.warn('经纬度获取城市失败，使用默认城市')
        this.$setLocation(defaultCity)
        return Promise.resolve(defaultCity)
      })
    }).catch(e => {
      logger.info('小程序定位失败', e)
      this.$setLocation(defaultCity)
      return Promise.resolve(defaultCity)
    })
  }
  
  $clearLocaion() {
    this.$setLocation({})
  }
  
  $setLocation (option) {
  
    this.$parent.globalData.districtCode = option.districtCode || ''
    this.$parent.globalData.districtName = option.districtName || ''
    this.$parent.globalData.cityCode = option.cityCode || ''
    this.$parent.globalData.cityName = option.cityName || ''
    
    wx.setStorageSync('cityCode', option.cityCode || '')
    wx.setStorageSync('cityName', option.cityName || '')
    wx.setStorageSync('districtCode', option.districtCode || '')
    wx.setStorageSync('districtName', option.districtName || '')
  }
  
}

