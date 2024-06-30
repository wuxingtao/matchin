> 用于开发前或项目未正式开始前的调试

## 技术栈

- mvvm: vue2
- ui: element ui
- node本地服务接口：json-server

## 目录说明

* views/lottery 跨越之夜活动

## json-server

- 代理需配置proxy pathRewreite代理到json-server 端口
- json-server 查询数据只支持get方法，post请求数据会修改数据问题，配置request methods 为get

