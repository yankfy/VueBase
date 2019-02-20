// 模块需对应一致
declare module "@/config/utils/session" {
  // 设置session
  export function setSession(key: string, value: any): void;
  // 取出session
  export function getSession(key: string): any;
}

// 如何引用 下面这句话前面加三个，三斜杠方式引用 ///
// <reference path="@/config/types/session.d.ts"/>
