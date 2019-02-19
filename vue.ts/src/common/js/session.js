import { emptyObject } from './until'

export let setSession = (key, value) => {
  console.log(emptyObject(value))
  if (!emptyObject(value)) {
    sessionStorage.setItem(key, JSON.stringify(value));
  } else {
    sessionStorage.setItem(key, value);
  }
}

export let getSession = (key) => {
  let res = sessionStorage.getItem(key);
  let resJSON = JSON.parse(res)
  if (resJSON) {
    return resJSON
  } else {
    return res
  }
}
