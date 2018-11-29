/**
 * Created by chengpanwang on 2017/3/23.
 */

const dataHelper = {
  defaultAvatarUrl: 'http://lj-assets.oss-cn-beijing.aliyuncs.com/wx/default_avatar.png',
  maxStr (str, length = 20) {
    if (str && str.length > length) {
      return str.substring(0, length) + '...'
    }
    return str
  }
}

export default dataHelper
