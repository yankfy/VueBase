import _ from 'lodash'

// 税率校验，税率要大于0的数字，此校验就是大于0的数字的校验
const taxRate = (rule, value, callback, source, options) => {
  const numberVal = _.toNumber(value)
  const pattern = /^(0|[1-9]\d{0,2})(\.\d{1,6})?$/
  if (pattern.test(value) && numberVal && numberVal > 0 && numberVal <= 100) {
    callback()
  } else {
    const errors = [options.message]
    callback(errors)
  }
}

// 合法uri
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

// 小写字母
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

// 大写字母
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

// 大小写字母
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

// 固定电话号码
export function validateTel(str) {
  const reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
  return reg.test(str)
}

// 手机号码
export function validatePhone(str) {
  const reg = /^1(3|4|5|7|8)\d{9}$/
  return reg.test(str)
}

// email*/
export function validateEmail(email) {
  if (email === null || email === '') { return true; }
  email = email.trim();
  if (email === '') { return true; }
  const patt1 = /^[a-z,A-Z,0-9]+@[a-z,A-Z]+.[a-z,A-Z]+$/
  if (email.match(patt1) === null) {
    return false;
  }
  return true;
}

export {
  taxRate
}