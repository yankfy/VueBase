/**
 * 获取用户token
 */
export function getToken() {
  return {
    userTokenId: JSON.parse(sessionStorage.getItem('userInfo')).token
  };
}