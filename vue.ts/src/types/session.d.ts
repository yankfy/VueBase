// 模块需对应一致
declare module "@/common/js/session" {
  // 设置session
  export function setSession(key: string, value: any): void;
  // 取出session
  export function getSession(key: string): any;
}

// declare namespace Session {
//   // 设置session
//   export interface setSession {
//     (key: string, value: any): any;
//   }

//   // 取出session
//   export interface getSession {
//     (key: string): any;
//   }
// }
