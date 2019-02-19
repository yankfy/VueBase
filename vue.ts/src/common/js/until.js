export function getYearValue(year) {
  let val = year.toString()
  return val.concat('/').concat(Number(val.substring(2, 4)) + 1)
}

export function formatDate(time) {
  if (time !== '' && time !== null && time !== undefined) {
    let date = new Date(time)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    // if (month >= 10) {
    //   const valDate = year + '-' + month + '-' + day
    //   return valDate
    // } else {
    //   const valDate = year + '-' + '0'.concat(month) + '-' + day
    //   return valDate
    // }
    // miya 2019/01/03 9:37am
    const valDate = (day > 9 ? day : '0' + day) + '/' + (month > 9 ? month : '0' + month) + '/' + year
    return valDate
  } else {
    return ''
  }
}

export function formatDateMMDDYYYY(time, seperator = '-') {
  if (time !== '' && time !== null && time !== undefined) {
    let date = new Date(time)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    // if (month >= 10) {
    //   return year + seperator + month + seperator + day
    // } else {
    //   return year + seperator + '0'.concat(month) + seperator + day
    // }
    // miya 2019/01/04 1:36pm
    const valDate = year + seperator + (month > 9 ? month : '0' + month) + seperator + (day > 9 ? day : '0' + day)
    return valDate
  } else {
    return ''
  }
}

export function formatCurrency(amount) {
  if (amount !== '' && amount !== null && amount !== undefined) {
    let val = amount.toString()
    val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return val
  } else {
    return ''
  }
}

export function emptyObject(obj) {
  if ((Object.getOwnPropertyNames(obj)).length === 0) {
    return true
  } else {
    return false
  }
}

export function getObjectLen(obj) {
  return Object.keys(obj).length
}