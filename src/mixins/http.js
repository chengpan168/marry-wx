import wepy from 'wepy'
import config from './config.js'
import logger from './logger.js'

export default class httpMixin extends wepy.mixin {
  data = {
  }
  methods = {
  }
  
  $request (method, path, data, header) {
    return wepy.request({
      method: method || 'GET',
      header: Object.assign({
        'content-type': 'application/x-www-form-urlencoded',
        token: this.$parent.globalData.token
      }, header),
      url: config.host + path,
      data: data
    }).then(res => {
      let result = res.data
      // 成功处理
      if (result.status === 'ok') {
        return Promise.resolve(result.data)
      }
      // 登录过期
      else if (result.status == '400') {
        logger.debug('token 过期, 重定向到登录页面')
        this.$clearUser()
        wx.switchTab({
          url: '/pages/my/index?login=force'
        })
        return Promise.reject(result)
      }
      // 特殊错误
      else if (result.status === '505') {
        logger.warn('处理异常', result)
        return Promise.reject(result)
      }
      
      // 常规错误， 弹窗提醒
      else {
        return Promise.reject(result)
      }
    }).catch(e => {
      wx.showToast({
        title: e.msg,
        icon: 'none',
        duration: 2000
      })
      logger.debug(`url: ${path}, res:`, e)
      return Promise.reject(e)
    })
  }
  
  $get (path, params, header) {
    return this.$request('GET', path, params, header)
  }
  
  $post (path, data, header) {
    return this.$request('POST', path, data, header)
  }
  
  $upload(filePath, data = {}) {
    return wepy.uploadFile({
      header: {
        token: this.$parent.globalData.token
      },
      dataType: 'json',
      url: config.host + '/sys/upload',
      filePath: filePath,
      name: 'file',
      formData: data
    }).then(res => {
      let data = res.data
      let uploadRes = JSON.parse(data)
      return Promise.resolve(uploadRes.data)
    })
  }
}
