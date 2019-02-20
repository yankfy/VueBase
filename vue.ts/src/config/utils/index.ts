// 查看是否是空对象
export function emptyObject(obj: any) {
  if (Object.getOwnPropertyNames(obj).length === 0) {
    return true;
  } else {
    return false;
  }
}

// 获取对象长度
export function getObjectLen(obj: any) {
  return Object.keys(obj).length;
}
