import { KPMG_ADMIN } from '@/common/js/const'

let formatDate = time => {
  if (time !== '' && time !== null && time !== undefined) {
    let date = new Date(time)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    if (month >= 10) {
      return year + '-' + month + '-' + day
    } else {
      return year + '-' + '0'.concat(month) + '-' + day
    }
  } else {
    return ''
  }
}

const handleRoleNames = (param) => {
  let roleNames = null
  if (!param) {
    return roleNames
  }
  if (param.includes(KPMG_ADMIN)) {
    roleNames = KPMG_ADMIN
  } else {
    roleNames = param[0]
  }
  return roleNames
}

// 操作权限控制管理
// 只有manager及以上级别的人
let canOperateGrade = ['2', '3', '4', '5']
const OperateControl = () => {
  let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
  let isInOperate = canOperateGrade.filter(el => {
    return el === userInfo.grade
  })
  if (isInOperate.length) {
    return false // 可以编辑和删除
  } else {
    return true // 不能编辑和删除
  }
}

export {
  formatDate,
  handleRoleNames,
  OperateControl
}