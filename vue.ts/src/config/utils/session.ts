import { emptyObject } from "./index";

export let setSession = (key: string, value: any) => {
  console.log(emptyObject(value));
  if (!emptyObject(value)) {
    sessionStorage.setItem(key, JSON.stringify(value));
  } else {
    sessionStorage.setItem(key, value);
  }
};

export let getSession = (key: string) => {
  let res: any = sessionStorage.getItem(key);
  let resJSON = JSON.parse(res);
  if (resJSON) {
    return resJSON;
  } else {
    return res;
  }
};
