// window 全局变量扩充
interface Window {
  aa: number;
  [key: string]: any;
}

declare let global: any
