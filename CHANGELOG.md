## [2.5.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.5.4...v2.5.5) (2024-08-21)



## [2.5.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.5.3...v2.5.4) (2024-08-08)


### NewFeatures(新功能)

* **appearance:** Appearance菜单栏增加园区主页的图标 ([998d069](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/998d069d2a1854a93599129e8d0ddbcb80aa7b83))
* **feedback:** 去除@引用别名 ([1e7d375](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/1e7d3754ec0bfdc89191c1d68a4307555df87cdf))


### BugFixes(Bug修复)

* **Menu:** 修复菜单结构调整被url 限制的问题 ([9030544](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/90305442d485303afc3aac83a275b62970dbd409))

## [2.5.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.5.2...v2.5.3) (2024-07-25)


### BugFixes(Bug修复)

* **wiring-diagram:** 修复主动保存没传wiringId的bug ([c618db8](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/c618db8bcd464d5e082b5ab44e58c6eea45ab4f9))



## [2.5.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.5.1...v2.5.2) (2024-07-25)


### BugFixes(Bug修复)

* **wiring-diagram:** 修复自动保存主图没传wiringId的问题 ([f80eee8](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/f80eee8a44e4ef9855f75cf979ec7f7d22e93993))
* **wiring-diagram:** 修改一次接线图wiringId传空的问题 ([c432cf1](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/c432cf1be9e8ac040f6f5697ef50c46f73a29b61))


### NewFeatures(新功能)

* **wiring-diagram:** 保存接线图传wiringId调试 ([ce70c98](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/ce70c986fae1c92525c27de1b2c777757ba9adfd))
* **wiring-diagram:** 保存接线图传wiringId调试 ([89aeb76](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/89aeb769bca5a47b01b70676ec90d5a30a9f4bc9))
* **wiring-diagram:** 一次接线图20s自动保存一次调试 ([76aa762](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/76aa762f1463b9395791a17667441c17dd6ccc8a))
* **wiring-diagram:** 一次接线图5分钟保存一次完成 ([8262473](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/826247341f849dfd51fe048803843441fda47eae))
* **wiring-diagram:** 一次接线图本地调试 ([97486a9](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/97486a90945f791cb694def774785a22f340644f))
* **wiring-diagram:** 一次接线图调试 ([8fd3fac](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/8fd3fac36d3d9935aa8f3c5122ed9bb4ff895bc4))
* **wiring-diagram:** 一次接线图优化完成 ([0303e55](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/0303e5532a5789ae04235addd2402c3bda7e367b))



## [2.5.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.5.0...v2.5.1) (2024-07-11)


### BugFixes(Bug修复)

* **appearance:** Appearance组件删除wbuc-appearance-header-collapsed，增加导航栏遮罩层 ([9fc8e22](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/9fc8e2221e8351968c66c06af80a388ca00203f0))
* **appearance:** Appearance组件删除wbuc-appearance-header-mask-collapsed和wbuc-appearance-header-mask ([4b884f2](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/4b884f22301289e724bd8cad191fb1ca2b284510))
* **appearance:** Appearance组件中Navigation组件增加wbuc-appearance-header-collapsed类 ([c367554](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/c367554b8a79896538eea2787b0ad6a9a9324dc5))
* **appearance:** Appearance组件wbuc-appearance-header-mask-background改为wbuc-appearance-header-mask-collapsed ([f79159a](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/f79159a9a863e7d650a1b3f19ed5d3297896d5dc))
* **baobi-appearance:** 样式兼容支持 ([ec990f9](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/ec990f91fb8bed2a3004d97af38c351a4839ac4c))


### NewFeatures(新功能)

* **Appearance:** 暴露中心切换的回调 ([aab9e1a](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/aab9e1a8e6f9d972a19cf8437a55d06b0f874a67))
* **Appearance:** 支持外部获取权限及菜单 ([120a90d](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/120a90dffcce221d67baa43819c108220d20f1dd))
* **Menu:** 多级目录判空时改为递归 ([0ff795f](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/0ff795fb4315ae89d239f2977fe2d70f267f599b))
* **TabsContainer:** 根据路由匹配菜单时加入matchPath ([71e9815](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/71e981510087d56f994383508982efbf6cf01355))



# [2.5.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.3...v2.5.0) (2024-07-03)


### NewFeatures(新功能)

* **Appearance:** 支持单独指定菜单权限接口使用的code ([a64b0f8](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/a64b0f88152b3d477088c04e3dd5215d982780a7))
* **appearance:** 新增默认logo ([5fd7779](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/5fd7779390a9a2e839a623960cd92c9760116df1))



## [2.4.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.2...v2.4.3) (2024-06-17)


### BugFixes(Bug修复)

* **types:** 将@gw/types 移入 devDependencies ([165567e](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/165567e01bf050e71c0865b5ee19075f3dc5f6e3))
* **types:** 整合table查询类型 ([bba99dc](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/bba99dc5fb47d1a5417697257d9a7c1b38a77b19))



## [2.4.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.1...v2.4.2) (2024-06-06)



## [2.4.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0...v2.4.1) (2024-05-30)


### NewFeatures(新功能)

* **Menu:** 调增菜单构建方式 ([f2e7a51](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/f2e7a51fe9566085b80c749951ff7082aa27321b))
* **Menu:** 调增菜单构建方式 ([2c24ff0](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/2c24ff03653fbb9c8ccf2176b743b733d0c2e82f))
* **Menu:** 调增菜单构建方式 ([a04ac80](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/a04ac80e519e1cd1571af6663fcce768b3022e31))



# [2.4.0-beta.19](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.18...v2.4.0-beta.19) (2024-05-15)



# [2.4.0-beta.18](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.17...v2.4.0-beta.18) (2024-05-15)



# [2.4.0-beta.17](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.16...v2.4.0-beta.17) (2024-05-15)



# [2.4.0-beta.16](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.15...v2.4.0-beta.16) (2024-05-15)



# [2.4.0-beta.15](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.14...v2.4.0-beta.15) (2024-05-15)



# [2.4.0-beta.14](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.13...v2.4.0-beta.14) (2024-05-15)



# [2.4.0-beta.13](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.12...v2.4.0-beta.13) (2024-05-15)



# [2.4.0-beta.12](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.11...v2.4.0-beta.12) (2024-05-15)



# [2.4.0-beta.11](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.10...v2.4.0-beta.11) (2024-05-15)



# [2.4.0-beta.10](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.9...v2.4.0-beta.10) (2024-05-14)



# [2.4.0-beta.9](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.8...v2.4.0-beta.9) (2024-05-14)



# [2.4.0-beta.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.7...v2.4.0-beta.8) (2024-05-14)



# [2.4.0-beta.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.6...v2.4.0-beta.7) (2024-05-13)



# [2.4.0-beta.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.5...v2.4.0-beta.6) (2024-05-13)



# [2.4.0-beta.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.4...v2.4.0-beta.5) (2024-05-13)



# [2.4.0-beta.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.3...v2.4.0-beta.4) (2024-05-13)



# [2.4.0-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.2...v2.4.0-beta.3) (2024-05-11)



# [2.4.0-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.1...v2.4.0-beta.2) (2024-05-11)



# [2.4.0-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.4.0-beta.0...v2.4.0-beta.1) (2024-05-11)



# [2.4.0-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.2-beta.8...v2.4.0-beta.0) (2024-05-10)


### NewFeatures(新功能)

* **GWTableProPlus:** 新增GWTableProPlus ([bcc9327](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/bcc9327d1fdf5b9c677eb16615e1bfba36fff76b))



## [2.3.2-beta.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.2-beta.7...v2.3.2-beta.8) (2024-05-08)



## [2.3.2-beta.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.2-beta.6...v2.3.2-beta.7) (2024-05-07)



## [2.3.2-beta.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.2-beta.5...v2.3.2-beta.6) (2024-05-07)



## [2.3.2-beta.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.2-beta.4...v2.3.2-beta.5) (2024-05-07)



## [2.3.2-beta.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.2-beta.3...v2.3.2-beta.4) (2024-05-06)



## [2.3.2-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.2-beta.2...v2.3.2-beta.3) (2024-04-28)



## [2.3.2-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.2-beta.1...v2.3.2-beta.2) (2024-04-26)



## [2.3.2-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.2-beta.0...v2.3.2-beta.1) (2024-04-26)



## [2.3.2-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.1...v2.3.2-beta.0) (2024-04-25)



## [2.3.1-beta.9](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.1-beta.8...v2.3.1-beta.9) (2024-04-24)



## [2.3.1-beta.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.1-beta.7...v2.3.1-beta.8) (2024-04-24)



## [2.3.1-beta.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.1-beta.6...v2.3.1-beta.7) (2024-04-24)



## [2.3.1-beta.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.1-beta.5...v2.3.1-beta.6) (2024-04-24)



## [2.3.1-beta.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.1-beta.4...v2.3.1-beta.5) (2024-04-23)



# [2.4.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.1...v2.4.0) (2024-05-16)


### BugFixes(Bug修复)

* **Appearance:** 修复ts定义及文档问题 ([562f30e](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/562f30ee9a9d3dca86812930cb9865010fc95b75))
* **Appearance:** 修复ts定义及文档问题 ([736d3c9](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/736d3c9688e3c3f0aa71f4181dfb7f83a10c43fd))
* **Appearance:** 修复遍历dom时没有注入key的问题 ([f757e5f](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/f757e5fe585e7ae830606f1c47403b52eaa6f7a3))


### NewFeatures(新功能)

* **GWTabelProPlus:** 新增GWTableProPlus组件 ([bb6fcee](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/bb6fceee79506f2b2986ced9b37de0ff879ac68b))



## [2.3.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.1-beta.4...v2.3.1) (2024-04-25)



## [2.3.1-beta.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.1-beta.3...v2.3.1-beta.4) (2024-04-23)



## [2.3.1-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.1-beta.2...v2.3.1-beta.3) (2024-04-23)



## [2.3.1-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.1-beta.1...v2.3.1-beta.2) (2024-04-23)


### BugFixes(Bug修复)

* **TablePro:** 修复tablepro 多列排序互斥无效的问题 ([9002a55](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/9002a5524aa7eecd510a3af07ebde15a2c4036d3))



## [2.3.1-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.1-beta.0...v2.3.1-beta.1) (2024-04-22)



## [2.3.1-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.0...v2.3.1-beta.0) (2024-04-22)



# [2.3.0-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.0-beta.0...v2.3.0-beta.1) (2024-04-15)


### NewFeatures(新功能)

* **Appearance:** 支持元素级的自定义 ([8111e1a](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/8111e1a35b1a3393a0feb731b386cc9b50503986))



# [2.3.0-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2...v2.3.0-beta.0) (2024-04-11)



## [2.2.2-beta.14](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.13...v2.2.2-beta.14) (2024-04-10)



## [2.2.2-beta.13](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.12...v2.2.2-beta.13) (2024-04-10)



## [2.2.2-beta.12](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.11...v2.2.2-beta.12) (2024-04-10)



## [2.2.2-beta.11](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.10...v2.2.2-beta.11) (2024-04-10)



## [2.2.2-beta.10](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.9...v2.2.2-beta.10) (2024-04-10)



## [2.2.2-beta.9](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.8...v2.2.2-beta.9) (2024-04-10)



## [2.2.2-beta.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.7...v2.2.2-beta.8) (2024-04-09)



## [2.2.2-beta.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.6...v2.2.2-beta.7) (2024-04-09)



## [2.2.2-beta.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.5...v2.2.2-beta.6) (2024-04-09)



## [2.2.2-beta.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.4...v2.2.2-beta.5) (2024-04-09)



## [2.2.2-beta.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.3...v2.2.2-beta.4) (2024-04-09)



## [2.2.2-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.2...v2.2.2-beta.3) (2024-04-08)



## [2.2.2-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.1...v2.2.2-beta.2) (2024-04-08)



## [2.2.2-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.0...v2.2.2-beta.1) (2024-04-07)



## [2.2.2-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1...v2.2.2-beta.0) (2024-04-03)



# [2.3.0-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.3.0-beta.0...v2.3.0-beta.1) (2024-04-15)
# [2.3.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2...v2.3.0) (2024-04-18)


### NewFeatures(新功能)

* **Appearance:** 支持元素级的自定义 ([8111e1a](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/8111e1a35b1a3393a0feb731b386cc9b50503986))



# [2.3.0-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2...v2.3.0-beta.0) (2024-04-11)



## [2.2.2-beta.14](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.13...v2.2.2-beta.14) (2024-04-10)



## [2.2.2-beta.13](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.12...v2.2.2-beta.13) (2024-04-10)



## [2.2.2-beta.12](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.11...v2.2.2-beta.12) (2024-04-10)



## [2.2.2-beta.11](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.10...v2.2.2-beta.11) (2024-04-10)



## [2.2.2-beta.10](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.9...v2.2.2-beta.10) (2024-04-10)



## [2.2.2-beta.9](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.8...v2.2.2-beta.9) (2024-04-10)



## [2.2.2-beta.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.7...v2.2.2-beta.8) (2024-04-09)



## [2.2.2-beta.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.6...v2.2.2-beta.7) (2024-04-09)



## [2.2.2-beta.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.5...v2.2.2-beta.6) (2024-04-09)



## [2.2.2-beta.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.4...v2.2.2-beta.5) (2024-04-09)



## [2.2.2-beta.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.3...v2.2.2-beta.4) (2024-04-09)



## [2.2.2-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.2...v2.2.2-beta.3) (2024-04-08)



## [2.2.2-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.1...v2.2.2-beta.2) (2024-04-08)



## [2.2.2-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.2-beta.0...v2.2.2-beta.1) (2024-04-07)



## [2.2.2-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1...v2.2.2-beta.0) (2024-04-03)
* **Appearance:** Appearance 无感知重构 ([c12c115](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/c12c1150b4a48bc3d0a601c2b596f3d66dc81d02))



## [2.2.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1...v2.2.2) (2024-04-11)


### BugFixes(Bug修复)

* **TablePro:** 修复filters与filterDropdown冲突的问题 ([0b9e462](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/0b9e462b7992dbb5ec85e60c30500bb775a23b3e))
* **ts:** 修复打包的ts问题 ([ead5d2b](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/ead5d2b50b2be8cc9b977782321df3b622e2a2c7))



## [2.2.1-beta.20](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.19...v2.2.1-beta.20) (2024-03-27)



## [2.2.1-beta.19](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.18...v2.2.1-beta.19) (2024-03-27)



## [2.2.1-beta.18](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.17...v2.2.1-beta.18) (2024-03-27)


### BugFixes(Bug修复)

* **baobi-style:** 保碧样式修复 ([df5a6dd](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/df5a6dd207a63804eb82560a480cb1aed1264df6))



## [2.2.1-beta.17](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.16...v2.2.1-beta.17) (2024-03-27)



## [2.2.1-beta.16](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.15...v2.2.1-beta.16) (2024-03-27)



## [2.2.1-beta.15](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.14...v2.2.1-beta.15) (2024-03-27)



## [2.2.1-beta.14](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.13...v2.2.1-beta.14) (2024-03-27)



## [2.2.1-beta.13](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.12...v2.2.1-beta.13) (2024-03-26)



## [2.2.1-beta.12](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.11...v2.2.1-beta.12) (2024-03-26)



## [2.2.1-beta.11](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.10...v2.2.1-beta.11) (2024-03-26)



## [2.2.1-beta.10](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.9...v2.2.1-beta.10) (2024-03-26)



## [2.2.1-beta.9](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.8...v2.2.1-beta.9) (2024-03-26)


### NewFeatures(新功能)

* **utils:** 导出OdmCaseEnum, odmCaseFilter方法 ([49a7fc6](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/49a7fc660c1971ccb26cda8e2166b5c8e8d8bcf2))



## [2.2.1-beta.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.7...v2.2.1-beta.8) (2024-03-25)



## [2.2.1-beta.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.6...v2.2.1-beta.7) (2024-03-25)


### BugFixes(Bug修复)

* **baobi-appearance:** 修复图标错误 ([2526511](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/2526511d4b5eed52226389a5591075ee75bcc212))



## [2.2.1-beta.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.5...v2.2.1-beta.6) (2024-03-25)



## [2.2.1-beta.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.4...v2.2.1-beta.5) (2024-03-25)



## [2.2.1-beta.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.3...v2.2.1-beta.4) (2024-03-25)



## [2.2.1-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.2...v2.2.1-beta.3) (2024-03-23)


### NewFeatures(新功能)

* **baobi-appearance:** baobi外观样式适配 ([a5c87ee](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/a5c87eeeb51e40f555e059a66cedbf6965af699e))



## [2.2.1-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.1...v2.2.1-beta.2) (2024-03-23)



## [2.2.1-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.0...v2.2.1-beta.1) (2024-03-22)



## [2.2.1-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.0...v2.2.1-beta.0) (2024-03-21)



# [2.2.0-beta.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.0-beta.5...v2.2.0-beta.6) (2024-03-19)


### BugFixes(Bug修复)

* **TablePro:** 修复tablePro 文档崩溃的问题 ([cd9f894](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/cd9f894723e0fb3801fd804f7a1a3a38e4cc3a13))



# [2.2.0-beta.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.0-beta.4...v2.2.0-beta.5) (2024-03-19)



# [2.2.0-beta.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.0-beta.3...v2.2.0-beta.4) (2024-03-19)



# [2.2.0-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.0-beta.2...v2.2.0-beta.3) (2024-03-18)



# [2.2.0-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.48...v2.2.0-beta.2) (2024-03-14)



## [2.1.48-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.48-beta.1...v2.1.48-beta.2) (2024-03-13)



## [2.1.48-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.48-beta.0...v2.1.48-beta.1) (2024-03-13)


### NewFeatures(新功能)

* **Appearance:** 文件中心文档预览与下载 ([6255a12](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/6255a12efd93c694602482f98096e6272d0377e0))



## [2.1.48-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.47...v2.1.48-beta.0) (2024-03-07)



# [2.2.0-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.0-beta.0...v2.2.0-beta.1) (2024-03-06)



# [2.2.0-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.46...v2.2.0-beta.0) (2024-03-01)


### NewFeatures(新功能)

* **Appearance:** 支持ODM和动态基座 ([4453459](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/445345965633f08e279b8b19e3c0d643ba04471e))



## [2.1.46-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.46-beta.1...v2.1.46-beta.3) (2024-02-27)



## [2.1.46-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.46-beta.0...v2.1.46-beta.1) (2024-02-26)



## [2.1.46-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.45...v2.1.46-beta.0) (2024-02-22)



## [2.2.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.0...v2.2.1) (2024-03-27)


### NewFeatures(新功能)

* **appearance:** 保碧支持菜单收起 ([04ad8ef](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/04ad8ef545cd830c78eea5ccc813921172455beb))
* **Appearance:** 添加帮助文档 ([f148b6a](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/f148b6ac95f62ede85c9e24ec3498399e4c1b250))
* **baobi-appearance:** 保碧新外观样式 ([3fa25b4](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/3fa25b450007103e5c2e5bdfab96c4d3da7ea669))



## [2.2.1-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.1-beta.0...v2.2.1-beta.1) (2024-03-22)



## [2.2.1-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.0...v2.2.1-beta.0) (2024-03-21)



# [2.2.0-beta.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.0-beta.5...v2.2.0-beta.6) (2024-03-19)


### BugFixes(Bug修复)

* **TablePro:** 修复tablePro 文档崩溃的问题 ([cd9f894](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/cd9f894723e0fb3801fd804f7a1a3a38e4cc3a13))



# [2.2.0-beta.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.0-beta.4...v2.2.0-beta.5) (2024-03-19)



# [2.2.0-beta.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.0-beta.3...v2.2.0-beta.4) (2024-03-19)



# [2.2.0-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.0-beta.2...v2.2.0-beta.3) (2024-03-18)



# [2.2.0-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.48...v2.2.0-beta.2) (2024-03-14)


### NewFeatures(新功能)

* **Appearance:** 添加帮助文档 ([f148b6a](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/f148b6ac95f62ede85c9e24ec3498399e4c1b250))



## [2.1.48-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.48-beta.1...v2.1.48-beta.2) (2024-03-13)



## [2.1.48-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.48-beta.0...v2.1.48-beta.1) (2024-03-13)


### NewFeatures(新功能)

* **Appearance:** 文件中心文档预览与下载 ([6255a12](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/6255a12efd93c694602482f98096e6272d0377e0))



## [2.1.48-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.47...v2.1.48-beta.0) (2024-03-07)



# [2.2.0-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.0-beta.0...v2.2.0-beta.1) (2024-03-06)



# [2.2.0-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.46...v2.2.0-beta.0) (2024-03-01)


### NewFeatures(新功能)

* **Appearance:** 支持ODM和动态基座 ([4453459](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/445345965633f08e279b8b19e3c0d643ba04471e))



## [2.1.46-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.46-beta.1...v2.1.46-beta.3) (2024-02-27)



## [2.1.46-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.46-beta.0...v2.1.46-beta.1) (2024-02-26)



## [2.1.46-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.45...v2.1.46-beta.0) (2024-02-22)



# [2.2.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.48...v2.2.0) (2024-03-20)


### BugFixes(Bug修复)

* **TablePro:** 修复tablePro 文档崩溃的问题 ([6405411](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/6405411135bb11ceb97fcfaaeddc3b039f2e18c7))



## [2.1.48](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.47...v2.1.48) (2024-03-14)



## [2.1.47](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.46...v2.1.47) (2024-03-06)



## [2.1.46](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.45...v2.1.46) (2024-02-28)



## [2.1.45-beta.12](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.45-beta.11...v2.1.45-beta.12) (2024-01-31)



## [2.1.45-beta.11](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.45-beta.10...v2.1.45-beta.11) (2024-01-31)



## [2.1.45-beta.10](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.45-beta.9...v2.1.45-beta.10) (2024-01-31)



## [2.1.45-beta.9](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.45-beta.8...v2.1.45-beta.9) (2024-01-30)



## [2.1.45-beta.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.45-beta.7...v2.1.45-beta.8) (2024-01-30)



## [2.1.45-beta.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.45-beta.6...v2.1.45-beta.7) (2024-01-30)



## [2.1.45-beta.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.45-beta.5...v2.1.45-beta.6) (2024-01-30)



## [2.1.45-beta.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.45-beta.4...v2.1.45-beta.5) (2024-01-30)



## [2.1.45-beta.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.45-beta.3...v2.1.45-beta.4) (2024-01-30)



## [2.1.45-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.45-beta.2...v2.1.45-beta.3) (2024-01-26)



## [2.1.45-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.45-beta.1...v2.1.45-beta.2) (2024-01-26)



## [2.1.45-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.45-beta.0...v2.1.45-beta.1) (2024-01-26)



## [2.1.45-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.44...v2.1.45-beta.0) (2024-01-26)



## [2.1.44](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.44-beta.1...v2.1.44) (2024-01-17)



## [2.1.44-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.44-beta.0...v2.1.44-beta.1) (2024-01-17)



## [2.1.44-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.43...v2.1.44-beta.0) (2024-01-16)



## [2.1.43-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.42...v2.1.43-beta.0) (2024-01-08)



## [2.1.45](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.43...v2.1.45) (2024-01-31)


### BugFixes(Bug修复)

* **appearance:** 用户信息、修改密码样式修复 ([523fe35](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/523fe3575c1c5f0e27cfa1bdccb9e3ecd2043d75))



## [2.1.44](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.43...v2.1.44) (2024-01-17)


### BugFixes(Bug修复)

* **appearance:** 用户信息、修改密码样式修复 ([523fe35](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/523fe3575c1c5f0e27cfa1bdccb9e3ecd2043d75))



## [2.1.43](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.42...v2.1.43) (2024-01-10)


### NewFeatures(新功能)

* **action-track:** 上报日志区分 tab 及设置取消上报标志 ([57284e9](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/57284e9eb0a74f9f6f8f7aad5cf111bea1b8d594))



## [2.1.42](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.42-beta.0...v2.1.42) (2023-12-20)


## [2.1.41](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.40...v2.1.41) (2023-12-15)


### BugFixes(Bug修复)

* **TabContainer:** 关闭tab时更新内部的keyRef ([92d6304](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/92d6304e6e37c5a9e3113aadbbc16221d7f351f4))
* **ts:** 修复"@types/ws"引起的ts报错 ([a8d9d82](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/a8d9d82fa836477225ff3e85daa7a3fd9e042b4d))



## [2.1.40](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.39...v2.1.40) (2023-12-06)



## [2.1.39](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.38...v2.1.39) (2023-11-29)



## [2.1.38](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.36-beta.2...v2.1.38) (2023-11-15)


### NewFeatures(新功能)

* **接线图:** 增加接线图节点图标注册功能 ([bf9ec79](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/bf9ec799bf29ca143e14ba45047f40ca739c58b7))
* **用户行为分析:** 用户行为分析组件 ([3717d30](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/3717d304d9ff4481f34fc1cc888cf2e544a08804))
* **AppSelect:** 产品入口加入安全平台 ([528fd5c](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/528fd5cd72829c7cf5be5e5bf172675debe4b2fa))
* **ProTable:** 放宽column的依赖条件 ([03eaa5b](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/03eaa5b2fdec0510449cd11ab1b8f4a7b964dc89))
* **ProTable:** 修复互斥列导致索引匹配不正确的问题 ([b226cd6](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/b226cd6947675946d6591bb91a06a7a001f18c1b))
* **ProTable:** 支持单独刷新columns ([744261e](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/744261e9079a474eccbb7d028e4dfeb493117e2b))



## [2.1.37](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.37-beta.8...v2.1.37) (2023-11-01)



## [2.1.37-beta.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.37-beta.7...v2.1.37-beta.8) (2023-11-01)



## [2.1.37-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.37-beta.0...v2.1.37-beta.1) (2023-10-27)



## [2.1.37-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.36...v2.1.37-beta.0) (2023-10-25)



## [2.1.36](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.36-beta.6...v2.1.36) (2023-10-25)



## [2.1.36-beta.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.36-beta.5...v2.1.36-beta.6) (2023-10-25)



## [2.1.36-beta.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.36-beta.4...v2.1.36-beta.5) (2023-10-25)



## [2.1.36-beta.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.36-beta.3...v2.1.36-beta.4) (2023-10-25)



## [2.1.36-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.36-beta.2...v2.1.36-beta.3) (2023-10-24)


### NewFeatures(新功能)

* **AppSelect:** 产品入口加入安全平台 ([528fd5c](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/528fd5cd72829c7cf5be5e5bf172675debe4b2fa))



## [2.1.36-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.35...v2.1.36-beta.0) (2023-10-18)



## [2.1.35](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.35-beta.2...v2.1.35) (2023-10-16)



## [2.1.35-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.35-beta.1...v2.1.35-beta.2) (2023-10-16)


### NewFeatures(新功能)

* **full-screen:** 全屏按钮 ([6cf2e4b](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/6cf2e4be18a4dd921efb09a90f5b2e12990385f3))



## [2.1.35-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.35-beta.0...v2.1.35-beta.1) (2023-10-16)



## [2.1.35-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.34...v2.1.35-beta.0) (2023-10-10)



## [2.1.34](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.34-beta.7...v2.1.34) (2023-10-09)



## [2.1.34-beta.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.34-beta.6...v2.1.34-beta.7) (2023-10-08)



## [2.1.34-beta.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.34-beta.3...v2.1.34-beta.6) (2023-10-08)



## [2.1.34-beta.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.34-beta.4...v2.1.34-beta.5) (2023-10-08)



## [2.1.34-beta.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.34-beta.3...v2.1.34-beta.4) (2023-10-08)



## [2.1.34-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.34-beta.2...v2.1.34-beta.3) (2023-10-07)



## [2.1.34-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.34-beta.0...v2.1.34-beta.2) (2023-09-27)



## [2.1.34-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.34-beta.0...v2.1.34-beta.1) (2023-09-27)



## [2.1.34-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.33...v2.1.34-beta.0) (2023-09-26)



## [2.1.33-beta.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.33-beta.6...v2.1.33-beta.7) (2023-09-25)



## [2.1.33](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.33-beta.8...v2.1.33) (2023-09-25)



## [2.1.33-beta.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.33-beta.6...v2.1.33-beta.8) (2023-09-25)



## [2.1.33-beta.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.33-beta.6...v2.1.33-beta.7) (2023-09-25)



## [2.1.33-beta.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.33-beta.5...v2.1.33-beta.6) (2023-09-25)



## [2.1.33-beta.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.33-beta.4...v2.1.33-beta.5) (2023-09-22)



## [2.1.33-beta.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.33-beta.3...v2.1.33-beta.4) (2023-09-22)


### NewFeatures(新功能)

* **appearance:** appearance新增展开所有菜单的配置，默认不展开 ([0e8894f](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/0e8894fbc5ae5f4f082f728d4b65ff5302b62deb))



## [2.1.33-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.33-beta.2...v2.1.33-beta.3) (2023-09-22)



## [2.1.33-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.33-beta.1...v2.1.33-beta.2) (2023-09-21)



## [2.1.33-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.33-beta.0...v2.1.33-beta.1) (2023-09-21)



## [2.1.33-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.32...v2.1.33-beta.0) (2023-09-21)



## [2.1.32](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.31...v2.1.32) (2023-09-20)



## [2.1.31](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.30...v2.1.31) (2023-09-18)



## [2.1.30](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.30-beta.4...v2.1.30) (2023-09-18)



## [2.1.30-beta.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.30-beta.3...v2.1.30-beta.4) (2023-09-18)



## [2.1.30-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.30-beta.2...v2.1.30-beta.3) (2023-09-18)



## [2.1.30-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.30-beta.2...v2.1.30-beta.3) (2023-09-18)



## [2.1.30-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.30-beta.1...v2.1.30-beta.2) (2023-09-18)



## [2.1.30-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.30-beta.0...v2.1.30-beta.1) (2023-09-15)


### NewFeatures(新功能)

* **ProTable:** 支持搜索条件互斥 ([810db3c](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/810db3ce0da60189f5344d09e449b577a571b6d7))



## [2.1.30-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.29...v2.1.30-beta.0) (2023-09-14)



## [2.1.29](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.28...v2.1.29) (2023-09-13)



## [2.1.27](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.27-beta.1...v2.1.27) (2023-09-06)



## [2.1.26](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.26-beta.1...v2.1.26) (2023-09-04)



## [2.1.27](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.27-beta.1...v2.1.27) (2023-09-06)



## [2.1.26](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.26-beta.1...v2.1.26) (2023-09-04)
## [2.1.28](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.27-beta.7...v2.1.28) (2023-09-13)



## [2.1.27](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.27-beta.7...v2.1.27) (2023-09-13)



## [2.1.27-beta.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.27-beta.6...v2.1.27-beta.7) (2023-09-13)



## [2.1.27-beta.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.27-beta.5...v2.1.27-beta.6) (2023-09-13)



## [2.1.27-beta.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.27-beta.4...v2.1.27-beta.5) (2023-09-12)



## [2.1.27-beta.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.27-beta.3...v2.1.27-beta.4) (2023-09-11)



## [2.1.27-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.27-beta.2...v2.1.27-beta.3) (2023-09-08)



## [2.1.27-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.27-beta.1...v2.1.27-beta.2) (2023-09-06)


### BugFixes(Bug修复)

* **Table-Pro:** 更正ts定义 ([52139a7](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/52139a773a303326682cb7ae7227ef39f676f019))



## [2.1.27-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.27-beta.0...v2.1.27-beta.1) (2023-09-06)

## [2.1.27-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.26-beta.1...v2.1.27-beta.0) (2023-09-04)

### NewFeatures(新功能)

- **GwTablePro:** tablepro 组件新增 extraNode 配置 ([344fa72](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/344fa72b4e05843bcb0627525cdb31386e26d05c))
- **GwTablePro:** tablepro 组件新增 extraNode 配置 ([0e26cb2](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/0e26cb2167d5b48c8116d19c89e5a29845055587))

## [2.1.26-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.26-beta.0...v2.1.26-beta.1) (2023-09-04)

## [2.1.26-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.25...v2.1.26-beta.0) (2023-08-31)



## [2.1.25](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.25-beta.11...v2.1.25) (2023-08-30)

## [2.1.25-beta.11](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.25-beta.10...v2.1.25-beta.11) (2023-08-30)

## [2.1.25-beta.10](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.25-beta.9...v2.1.25-beta.10) (2023-08-30)

### BugFixes(Bug 修复)

- **tabs-container:** 修复网络请求较慢时无法注册自定义事件的问题 ([a31ae87](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/a31ae874e7e479046c722777117ac2306a0e5070))

## [2.1.25-beta.10](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.25-beta.9...v2.1.25-beta.10) (2023-08-30)

### BugFixes(Bug 修复)

- **tabs-container:** 修复网络请求较慢时无法注册自定义事件的问题 ([a31ae87](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/a31ae874e7e479046c722777117ac2306a0e5070))

## [2.1.25-beta.9](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.25-beta.8...v2.1.25-beta.9) (2023-08-29)

## [2.1.25-beta.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.25-beta.7...v2.1.25-beta.8) (2023-08-29)

## [2.1.25-beta.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.25-beta.6...v2.1.25-beta.7) (2023-08-28)

## [2.1.25-beta.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.25-beta.5...v2.1.25-beta.6) (2023-08-28)

### NewFeatures(新功能)

- **star:** 新增 star 调度管理 icon ([f8399a6](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/f8399a68020cc2af43c911477b00f178951f0420))

## [2.1.25-beta.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.25-beta.4...v2.1.25-beta.5) (2023-08-25)

## [2.1.25-beta.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.25-beta.3...v2.1.25-beta.4) (2023-08-24)

## [2.1.25-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.25-beta.2...v2.1.25-beta.3) (2023-08-24)

## [2.1.25-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.25-beta.1...v2.1.25-beta.2) (2023-08-22)

## [2.1.25-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.25-beta.0...v2.1.25-beta.1) (2023-08-21)

## [2.1.25-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.24...v2.1.25-beta.0) (2023-08-21)

## [2.1.24](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.24-beta.9...v2.1.24) (2023-08-16)

## [2.1.24-beta.9](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.24-beta.8...v2.1.24-beta.9) (2023-08-16)

## [2.1.24-beta.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.24-beta.7...v2.1.24-beta.8) (2023-08-16)

## [2.1.24-beta.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.24-beta.6...v2.1.24-beta.7) (2023-08-16)

### BugFixes(Bug 修复)

- **LocalLogin:** 修复*doc* 定义判断错误 ([df52e50](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/df52e50d4f0a034265b07e1f54860f03061c3ba3))

## [2.1.24-beta.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.24-beta.5...v2.1.24-beta.6) (2023-08-16)

## [2.1.24-beta.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.2.0-beta.0...v2.1.24-beta.5) (2023-08-15)

### NewFeatures(新功能)

- **action-track:** 新增对点击事件的埋点上报 ([b648066](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/b648066cbb5252a3841e8e154cef2db379dfc48b))

# [2.2.0-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.24-beta.4...v2.2.0-beta.0) (2023-08-15)

## [2.1.24-beta.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.24-beta.3...v2.1.24-beta.4) (2023-08-14)

## [2.1.24-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.24-beta.2...v2.1.24-beta.3) (2023-08-11)

## [2.1.24-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.24-beta.1...v2.1.24-beta.2) (2023-08-10)

## [2.1.24-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.24-beta.0...v2.1.24-beta.1) (2023-08-10)

## [2.1.24-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.23...v2.1.24-beta.0) (2023-08-09)

## [2.1.23-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.23-beta.2...v2.1.23-beta.3) (2023-08-09)

## [2.1.23](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.23-beta.2...v2.1.23) (2023-08-09)

## [2.1.23-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.23-beta.2...v2.1.23-beta.3) (2023-08-09)

## [2.1.23-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.23-beta.1...v2.1.23-beta.2) (2023-08-07)

### NewFeatures(新功能)

- **Navigation:** Appearance 抽取 Navigtion 组件 ([9f6e741](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/9f6e7416654c0a9c8e7ab47a962fb7e5529562ce))

## [2.1.23-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.23-beta.0...v2.1.23-beta.1) (2023-08-07)

### BugFixes(Bug 修复)

- **Appearance:** 切换用户，重置`puserid`

## [2.1.23-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.22...v2.1.23-beta.0) (2023-08-04)

### NewFeatures(新功能)

- **SearchGroup:** 搜索空间包装器组件 ([873e02a](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/873e02a45570d9ce18ca10086bc4c530efc8adc5))

## [2.1.22](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.21...v2.1.22) (2023-08-03)

## [2.1.21](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.21-beta.11...v2.1.21) (2023-08-03)

## [2.1.21-beta.11](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.21-beta.10...v2.1.21-beta.11) (2023-07-31)

## [2.1.21-beta.10](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.21-beta.9...v2.1.21-beta.10) (2023-07-31)

## [2.1.21-beta.9](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.21-beta.8...v2.1.21-beta.9) (2023-07-31)

## [2.1.21-beta.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.21-beta.7...v2.1.21-beta.8) (2023-07-28)

### NewFeatures(新功能)

- **web-business-components:** 更新脚手架版本以支持德国生产环境的打包 ([62e78e6](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/62e78e656257e710a514872f9aa25ffc26763d5f))

## [2.1.21-beta.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.21-beta.6...v2.1.21-beta.7) (2023-07-27)

## [2.1.21-beta.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.21-beta.5...v2.1.21-beta.6) (2023-07-27)

### NewFeatures(新功能)

- **action-track:** 修改切换用户后上报的用户信息不准确的问题 ([0edebf5](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/0edebf52cd8fabde930f895cde62ee4bba120aeb))

## [2.1.21-beta.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.21-beta.4...v2.1.21-beta.5) (2023-07-25)

## [2.1.21-beta.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.21-beta.3...v2.1.21-beta.4) (2023-07-24)

## [2.1.21-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.21-beta.2...v2.1.21-beta.3) (2023-07-21)

## [2.1.21-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.21-beta.1...v2.1.21-beta.2) (2023-07-21)

## [2.1.21-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.21-beta.0...v2.1.21-beta.1) (2023-07-20)

## [2.1.21-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.20...v2.1.21-beta.0) (2023-07-19)

## [2.1.20](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.20-beta.1...v2.1.20) (2023-07-13)

## [2.1.20-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.20-beta.0...v2.1.20-beta.1) (2023-07-12)

## [2.1.20-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.19...v2.1.20-beta.0) (2023-07-12)

## [2.1.19](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.18...v2.1.19) (2023-07-10)

## [2.1.18](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.18-beta.2...v2.1.18) (2023-07-07)

## [2.1.18-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.18-beta.1...v2.1.18-beta.2) (2023-07-05)

## [2.1.18-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.18-beta.0...v2.1.18-beta.1) (2023-07-04)

## [2.1.18-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.17...v2.1.18-beta.0) (2023-07-03)

## [2.1.17](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.17-beta.4...v2.1.17) (2023-06-28)

## [2.1.17-beta.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.17-beta.3...v2.1.17-beta.4) (2023-06-28)

## [2.1.17-beta.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.17-beta.2...v2.1.17-beta.3) (2023-06-26)

## [2.1.17-beta.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.17-beta.1...v2.1.17-beta.2) (2023-06-25)

### BugFixes(Bug 修复)

- **appearance:** 修复初始化收藏列表没有存入 i8nKey 的问题 ([4771de6](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/4771de60fc479ba7e399772ce72f837a90429cde))

## [2.1.17-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.17-beta.0...v2.1.17-beta.1) (2023-06-25)

### BugFixes(Bug 修复)

- **tabsContainer:** 修复请求收藏时没有传入 i8nKey 的问题 ([99e3c8d](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/99e3c8dd9386b7571dfbf53caa5f69f6b253f886))

## [2.1.17-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.16...v2.1.17-beta.0) (2023-06-25)

### NewFeatures(新功能)

- **appearance:** 支持从外部指定外框是否需要国际化 ([4de97fe](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/4de97fea22d99c6c05607d59db5c461b5834f405))

## [2.1.16-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.16-beta.0...v2.1.16-beta.1) (2023-06-20)

## [2.1.16-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.15...v2.1.16-beta.0) (2023-06-19)

### NewFeatures(新功能)

- **appearance:** 外框组件国际化优化 ([d356d45](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/d356d45fda7581b6e9b33dde947aaaac0110c25c))

## [2.1.16](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.16-beta.1...v2.1.16) (2023-06-21)

## [2.1.16-beta.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.16-beta.0...v2.1.16-beta.1) (2023-06-20)

## [2.1.16-beta.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.15...v2.1.16-beta.0) (2023-06-19)

### NewFeatures(新功能)

- **appearance:** 外框组件国际化优化 ([d356d45](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/d356d45fda7581b6e9b33dde947aaaac0110c25c))

## [2.1.15](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.14...v2.1.15) (2023-06-14)

## [2.1.14](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.14-12...v2.1.14) (2023-06-14)

## [2.1.14-12](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.14-11...v2.1.14-12) (2023-06-14)

## [2.1.14-11](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.14-10...v2.1.14-11) (2023-06-13)

### NewFeatures(新功能)

- **tabs-container:** 支持 onRemove 事件回调 ([068db25](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/068db2583dcfe751091279a4c8225051001a044c))

## [2.1.14-10](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.14-9...v2.1.14-10) (2023-06-13)

## [2.1.14-9](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.14-8...v2.1.14-9) (2023-06-13)

## [2.1.14-8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.14-7...v2.1.14-8) (2023-06-13)

## [2.1.14-7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.14-6...v2.1.14-7) (2023-06-13)

## [2.1.14-6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.14-5...v2.1.14-6) (2023-06-12)

## [2.1.14-5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.14-4...v2.1.14-5) (2023-06-12)

## [2.1.14-4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.14-3...v2.1.14-4) (2023-06-08)

## [2.1.14-3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.14-2...v2.1.14-3) (2023-06-08)

### NewFeatures(新功能)

- **gwtable:** gwtable add custom search panel render function ([39fd610](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/39fd610d30553437e3b27468af293e920bb63b82))

## [2.1.14-2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.14-1...v2.1.14-2) (2023-06-07)

## [2.1.14-1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.14-0...v2.1.14-1) (2023-06-07)

### NewFeatures(新功能)

- **icon:** 添加部分 Icon 图标 并且改写 Table 操作栏逻辑 ([1d59de4](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/1d59de463068c9285a57bd7f103c9f7a41ecdfa8))

## [2.1.14-0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.13...v2.1.14-0) (2023-06-06)

### NewFeatures(新功能)

- **appearance:** 增加点击 header 区域外面收起 select 选项 ([1a95b34](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/1a95b348dd386818d66c090c58d6e9d7dcaa78e0))

## [2.1.13](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.12...v2.1.13) (2023-06-02)

## [2.1.12](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.11...v2.1.12) (2023-05-31)

## [2.1.11](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.10...v2.1.11) (2023-05-30)

### NewFeatures(新功能)

- **GWTable:** 调整 table 组件操作栏宽度 ([35d64d4](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/35d64d47bec5c971842f0b0bb1cef2a409c41c3f))

## [2.1.10](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.9...v2.1.10) (2023-05-29)

## [2.1.9](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.8...v2.1.9) (2023-05-26)

## [2.1.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.8-0...v2.1.8) (2023-05-25)

## [2.1.8-0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.7...v2.1.8-0) (2023-05-22)

### BugFixes(Bug 修复)

- **Feedback:** 修复 uploadUI 展示错误 ([3119b75](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/3119b75602b9b7ec672e53f11fda4e70bfeddbe9))

## [2.1.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.6...v2.1.7) (2023-05-17)

### NewFeatures(新功能)

- **table:** fix sort issue ([3277f2b](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/3277f2b25aaea417ec45b1c9f0b30121c8497c57))

## [2.1.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.5...v2.1.6) (2023-05-17)

### NewFeatures(新功能)

- **GWTable-colSearch:** 控制台报错 ([efae43b](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/efae43b9c81e0a8cf31323e810e82c336b696d6a))

## [2.1.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.4...v2.1.5) (2023-05-17)

## [2.1.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.3...v2.1.4) (2023-05-17)

## [2.1.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.2...v2.1.3) (2023-05-17)

## [2.1.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.1...v2.1.2) (2023-05-17)

### BugFixes(Bug 修复)

- **Appearance:** 修复退出登录时没有清除 localStorage 的问题 ([05917ea](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/05917eabbaa90a4487106cef07ee6242a9f75ade))

## [2.1.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.1.0...v2.1.1) (2023-05-16)

# [2.1.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.1...v2.1.0) (2023-05-16)

### NewFeatures(新功能)

- **Appearance:** 优化收藏功能 ([7882d42](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/7882d42ad3d80a676242a6a82e3d657f2d6b5760))

## [2.0.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v3.0.0...v2.0.1) (2023-05-15)

# [3.0.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.1-0...v3.0.0) (2023-05-15)

## [2.0.1-0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.65...v2.0.1-0) (2023-05-11)

### NewFeatures(新功能)

- **table:** add expandable operations ([0c05238](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/0c0523868e1ed581f9521133ec302420a5353849))

# [2.0.0-alph.65](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.64...v2.0.0-alph.65) (2023-05-10)

# [2.0.0-alph.64](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.63...v2.0.0-alph.64) (2023-05-09)

### BugFixes(Bug 修复)

- **tabs-container:** 修复 pathname 没有拿到 url 参数的问题 ([fd211a6](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/fd211a6571dd7044e13455bcbc17b91eec1db15e))

### NewFeatures(新功能)

- **GWTable:** 修改 search 显示的条件 ([4df3728](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/4df3728c2096a7998eaba3778af3e1962e9a64e7))

# [2.0.0-alph.63](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.62...v2.0.0-alph.63) (2023-05-09)

# [2.0.0-alph.62](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.61...v2.0.0-alph.62) (2023-05-08)

### NewFeatures(新功能)

- **Appearance:** 给内容区域设置最小 1000px 宽度，当屏幕宽度过小时候出现滚动条 ([6e2681d](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/6e2681d022e8468daf2c1cf7634ac967d10a0507))

# [2.0.0-alph.61](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.60...v2.0.0-alph.61) (2023-05-08)

# [2.0.0-alph.60](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.59...v2.0.0-alph.60) (2023-05-06)

### BugFixes(Bug 修复)

- **GWTable:** 修复穿梭框高度没有撑高问题 ([9d2e2ed](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/9d2e2ed538b672b1fe1fbbb123155d68aa473e91))

### NewFeatures(新功能)

- **icoChange:** 关联厂商测点 ([00b9001](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/00b90012438adaec4a7a1544168be59f803a40a3))

# [2.0.0-alph.59](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.58...v2.0.0-alph.59) (2023-05-05)

# [2.0.0-alph.58](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.57...v2.0.0-alph.58) (2023-05-05)

# [2.0.0-alph.57](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.56...v2.0.0-alph.57) (2023-05-04)

### BugFixes(Bug 修复)

- **GWTable:** 修复 toolbar 间距距离 ([8e6dac9](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/8e6dac999cb918e76ee93b95874beb420b790008))

# [2.0.0-alph.56](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.55...v2.0.0-alph.56) (2023-05-04)

# [2.0.0-alph.55](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.54...v2.0.0-alph.55) (2023-05-04)

### NewFeatures(新功能)

- **Appearance:** 优化了 Tab 的匹配逻辑 ([5ef0c7a](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/5ef0c7a024e9a5cd1e06c2e6351b9715130fbda1))

# [2.0.0-alph.54](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.53...v2.0.0-alph.54) (2023-04-28)

### NewFeatures(新功能)

- **Appearance:** 支持外部添加 tab ([75b39a1](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/75b39a19dd473a53b3aed60a6f1905915b1b0b88))
- **Appearance:** 支持退出当前用户身份 ([1129628](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/11296283d64086cd37501efd0e5e748e5f94f762))
- **dy-form:** change dy-form callback params ([f14a496](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/f14a496a75a72ea35a5ccea9489eedadb17c4090))

# [2.0.0-alph.53](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.52...v2.0.0-alph.53) (2023-04-28)

# [2.0.0-alph.52](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.51...v2.0.0-alph.52) (2023-04-27)

# [2.0.0-alph.51](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.50...v2.0.0-alph.51) (2023-04-27)

### NewFeatures(新功能)

- **GWTable:** 去除 global 样式 ([c3a1bfb](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/c3a1bfb92063333e099432c70bf6bc06c9d64b83))

# [2.0.0-alph.50](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.49...v2.0.0-alph.50) (2023-04-27)

### NewFeatures(新功能)

- **table-upload:** 修改表格中批量导入弹窗里上传组件的展示逻辑 ([e2f6a14](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/e2f6a142e3a544f29f06804ceb2484ede7b5f4f5))

# [2.0.0-alph.49](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.48...v2.0.0-alph.49) (2023-04-27)

# [2.0.0-alph.48](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.47...v2.0.0-alph.48) (2023-04-26)

# [2.0.0-alph.47](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.46...v2.0.0-alph.47) (2023-04-26)

# [2.0.0-alph.46](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.45...v2.0.0-alph.46) (2023-04-26)

# [2.0.0-alph.45](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.43...v2.0.0-alph.45) (2023-04-26)

# [2.0.0-alph.43](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.42...v2.0.0-alph.43) (2023-04-25)

# [2.0.0-alph.42](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.41...v2.0.0-alph.42) (2023-04-25)

# [2.0.0-alph.41](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.40...v2.0.0-alph.41) (2023-04-25)

### BugFixes(Bug 修复)

- **shell:** 修复由打包脚本引起的若干样式问题 ([15a2115](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/15a2115832c2ab5e14a661e93fad2d61068756e6))

### NewFeatures(新功能)

- **icon:** icon with tooltip ([4f14e64](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/4f14e64590ad162bb5d2fce38c8d7254387fee4a))

# [2.0.0-alph.40](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.39...v2.0.0-alph.40) (2023-04-25)

### BugFixes(Bug 修复)

- **外框组件:** 修复退出登录时环境判断不正确等若干问题 ([bab3db7](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/bab3db7e06f2c917759723347a6180e342567bb5))

# [2.0.0-alph.39](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.38...v2.0.0-alph.39) (2023-04-24)

### NewFeatures(新功能)

- **build:** 增加 shell 脚本使修改编译出的 umd 包内的目录结构 ([41df141](http://192.168.226.157:9090/secp/frontend/web-business-components/commits/41df141a2ef78dda8c64455158e140b6170d30bf))

# [2.0.0-alph.38](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.37...v2.0.0-alph.38) (2023-04-24)

# [2.0.0-alph.37](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.36...v2.0.0-alph.37) (2023-04-23)

# [2.0.0-alph.36](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.35...v2.0.0-alph.36) (2023-04-21)

# [2.0.0-alph.35](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.34...v2.0.0-alph.35) (2023-04-20)

# [2.0.0-alph.34](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.33...v2.0.0-alph.34) (2023-04-20)

# [2.0.0-alph.33](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.32...v2.0.0-alph.33) (2023-04-20)

# [2.0.0-alph.32](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.31...v2.0.0-alph.32) (2023-04-19)

# [2.0.0-alph.31](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.30...v2.0.0-alph.31) (2023-04-14)

# [2.0.0-alph.30](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.29...v2.0.0-alph.30) (2023-04-12)

# [2.0.0-alph.29](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.28...v2.0.0-alph.29) (2023-04-12)

# [2.0.0-alph.28](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.27...v2.0.0-alph.28) (2023-04-11)

# [2.0.0-alph.27](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.26...v2.0.0-alph.27) (2023-04-11)

# [2.0.0-alph.26](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.25...v2.0.0-alph.26) (2023-04-11)

# [2.0.0-alph.25](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.24...v2.0.0-alph.25) (2023-04-06)

# [2.0.0-alph.24](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.23...v2.0.0-alph.24) (2023-04-06)

# [2.0.0-alph.23](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.22...v2.0.0-alph.23) (2023-04-04)

# [2.0.0-alph.22](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.21...v2.0.0-alph.22) (2023-04-03)

## [1.9.22](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.19...v1.9.22) (2023-03-29)

## [1.9.21](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.20...v1.9.21) (2023-03-23)

## [1.9.20](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.10...v1.9.20) (2023-03-23)

# [2.0.0-alph.21](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.20...v2.0.0-alph.21) (2023-03-31)

# [2.0.0-alph.20](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.22...v2.0.0-alph.20) (2023-03-31)

# [2.0.0-alph.19](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.18...v2.0.0-alph.19) (2023-03-28)

# [2.0.0-alph.18](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.17...v2.0.0-alph.18) (2023-03-28)

# [2.0.0-alph.17](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.16...v2.0.0-alph.17) (2023-03-27)

# [2.0.0-alph.16](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.15...v2.0.0-alph.16) (2023-03-26)

# [2.0.0-alph.15](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.14...v2.0.0-alph.15) (2023-03-26)

# [2.0.0-alph.14](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.13...v2.0.0-alph.14) (2023-03-26)

# [2.0.0-alph.13](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.12...v2.0.0-alph.13) (2023-03-26)

# [2.0.0-alph.12](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.11...v2.0.0-alph.12) (2023-03-23)

# [2.0.0-alph.11](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.21...v2.0.0-alph.11) (2023-03-23)

# [2.0.0-alph.10](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.9...v2.0.0-alph.10) (2023-03-22)

# [2.0.0-alph.9](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.19...v2.0.0-alph.9) (2023-03-22)

# [2.0.0-alph.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.18...v2.0.0-alph.8) (2023-03-21)

# [2.0.0-alph.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.6...v2.0.0-alph.7) (2023-03-16)

# [2.0.0-alph.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.5...v2.0.0-alph.6) (2023-03-16)

# [2.0.0-alph.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.16...v2.0.0-alph.5) (2023-03-15)

# [2.0.0-alph.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.3...v2.0.0-alph.4) (2023-03-13)

# [2.0.0-alph.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.15...v2.0.0-alph.3) (2023-03-13)

# [2.0.0-alph.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.1...v2.0.0-alph.2) (2023-03-13)

# [2.0.0-alph.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.0...v2.0.0-alph.1) (2023-03-13)

# [2.0.0-alph.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.14...v2.0.0-alph.0) (2023-03-13)

## [1.9.22](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.19...v1.9.22) (2023-03-29)

## [1.9.21](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.20...v1.9.21) (2023-03-23)

## [1.9.20](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.10...v1.9.20) (2023-03-23)

# [2.0.0-alph.19](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.18...v2.0.0-alph.19) (2023-03-28)

# [2.0.0-alph.18](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.17...v2.0.0-alph.18) (2023-03-28)

# [2.0.0-alph.17](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.16...v2.0.0-alph.17) (2023-03-27)

# [2.0.0-alph.16](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.15...v2.0.0-alph.16) (2023-03-26)

# [2.0.0-alph.15](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.14...v2.0.0-alph.15) (2023-03-26)

# [2.0.0-alph.14](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.13...v2.0.0-alph.14) (2023-03-26)

# [2.0.0-alph.13](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.12...v2.0.0-alph.13) (2023-03-26)

# [2.0.0-alph.12](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.11...v2.0.0-alph.12) (2023-03-23)

# [2.0.0-alph.11](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.21...v2.0.0-alph.11) (2023-03-23)

# [2.0.0-alph.10](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.9...v2.0.0-alph.10) (2023-03-22)

# [2.0.0-alph.9](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.19...v2.0.0-alph.9) (2023-03-22)

# [2.0.0-alph.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.18...v2.0.0-alph.8) (2023-03-21)

# [2.0.0-alph.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.6...v2.0.0-alph.7) (2023-03-16)

# [2.0.0-alph.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.5...v2.0.0-alph.6) (2023-03-16)

# [2.0.0-alph.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.16...v2.0.0-alph.5) (2023-03-15)

# [2.0.0-alph.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.3...v2.0.0-alph.4) (2023-03-13)

# [2.0.0-alph.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.15...v2.0.0-alph.3) (2023-03-13)

# [2.0.0-alph.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.1...v2.0.0-alph.2) (2023-03-13)

# [2.0.0-alph.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.0...v2.0.0-alph.1) (2023-03-13)

# [2.0.0-alph.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.14...v2.0.0-alph.0) (2023-03-13)

## [1.9.21](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.20...v1.9.21) (2023-03-23)

## [1.9.20](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.10...v1.9.20) (2023-03-23)

# [2.0.0-alph.10](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.9...v2.0.0-alph.10) (2023-03-22)

# [2.0.0-alph.9](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.19...v2.0.0-alph.9) (2023-03-22)

# [2.0.0-alph.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.18...v2.0.0-alph.8) (2023-03-21)

# [2.0.0-alph.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.6...v2.0.0-alph.7) (2023-03-16)

# [2.0.0-alph.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.5...v2.0.0-alph.6) (2023-03-16)

# [2.0.0-alph.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.16...v2.0.0-alph.5) (2023-03-15)

# [2.0.0-alph.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.3...v2.0.0-alph.4) (2023-03-13)

# [2.0.0-alph.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.15...v2.0.0-alph.3) (2023-03-13)

# [2.0.0-alph.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.1...v2.0.0-alph.2) (2023-03-13)

# [2.0.0-alph.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.0...v2.0.0-alph.1) (2023-03-13)

# [2.0.0-alph.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.14...v2.0.0-alph.0) (2023-03-13)

## [1.9.19](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.8...v1.9.19) (2023-03-21)

## [1.9.18](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.17...v1.9.18) (2023-03-20)

## [1.9.17](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.7...v1.9.17) (2023-03-17)

## [1.9.16](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.4...v1.9.16) (2023-03-13)

## [1.9.15](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.2...v1.9.15) (2023-03-13)

# [2.0.0-alph.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.18...v2.0.0-alph.8) (2023-03-21)

# [2.0.0-alph.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.6...v2.0.0-alph.7) (2023-03-16)

# [2.0.0-alph.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.5...v2.0.0-alph.6) (2023-03-16)

# [2.0.0-alph.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.16...v2.0.0-alph.5) (2023-03-15)

# [2.0.0-alph.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.3...v2.0.0-alph.4) (2023-03-13)

# [2.0.0-alph.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.15...v2.0.0-alph.3) (2023-03-13)

# [2.0.0-alph.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.1...v2.0.0-alph.2) (2023-03-13)

# [2.0.0-alph.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.0...v2.0.0-alph.1) (2023-03-13)

# [2.0.0-alph.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.14...v2.0.0-alph.0) (2023-03-13)

## [1.9.18](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.17...v1.9.18) (2023-03-20)

## [1.9.17](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.7...v1.9.17) (2023-03-17)

## [1.9.16](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.4...v1.9.16) (2023-03-13)

## [1.9.15](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.2...v1.9.15) (2023-03-13)

# [2.0.0-alph.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.6...v2.0.0-alph.7) (2023-03-16)

# [2.0.0-alph.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.5...v2.0.0-alph.6) (2023-03-16)

# [2.0.0-alph.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.16...v2.0.0-alph.5) (2023-03-15)

# [2.0.0-alph.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.3...v2.0.0-alph.4) (2023-03-13)

# [2.0.0-alph.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.15...v2.0.0-alph.3) (2023-03-13)

# [2.0.0-alph.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.1...v2.0.0-alph.2) (2023-03-13)

# [2.0.0-alph.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.0...v2.0.0-alph.1) (2023-03-13)

# [2.0.0-alph.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.14...v2.0.0-alph.0) (2023-03-13)

## [1.9.16](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.4...v1.9.16) (2023-03-13)

## [1.9.15](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.2...v1.9.15) (2023-03-13)

# [2.0.0-alph.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.3...v2.0.0-alph.4) (2023-03-13)

# [2.0.0-alph.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.15...v2.0.0-alph.3) (2023-03-13)

# [2.0.0-alph.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.1...v2.0.0-alph.2) (2023-03-13)

# [2.0.0-alph.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.0...v2.0.0-alph.1) (2023-03-13)

# [2.0.0-alph.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.14...v2.0.0-alph.0) (2023-03-13)

## [1.9.15](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.2...v1.9.15) (2023-03-13)

# [2.0.0-alph.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.1...v2.0.0-alph.2) (2023-03-13)

# [2.0.0-alph.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v2.0.0-alph.0...v2.0.0-alph.1) (2023-03-13)

# [2.0.0-alph.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.14...v2.0.0-alph.0) (2023-03-13)

## [1.9.14](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.13...v1.9.14) (2023-03-10)

## [1.9.13](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.12...v1.9.13) (2023-03-08)

## [1.9.12](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.11...v1.9.12) (2023-03-08)

## [1.9.11](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.10...v1.9.11) (2023-02-28)

## [1.9.10](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.9...v1.9.10) (2023-02-28)

## [1.9.9](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.8...v1.9.9) (2023-02-27)

## [1.9.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.7...v1.9.8) (2023-02-27)

## [1.9.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.6...v1.9.7) (2023-02-24)

## [1.9.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.5...v1.9.6) (2023-02-23)

## [1.9.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.4...v1.9.5) (2023-02-23)

## [1.9.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.3...v1.9.4) (2023-02-22)

## [1.9.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.2...v1.9.3) (2023-02-21)

## [1.9.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.1...v1.9.2) (2023-02-20)

## [1.9.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.9.0...v1.9.1) (2023-02-20)

# [1.9.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.24...v1.9.0) (2023-02-20)

## [1.8.24](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.23...v1.8.24) (2023-02-01)

## [1.8.23](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.22...v1.8.23) (2023-02-01)

## [1.8.22](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.21...v1.8.22) (2023-02-01)

## [1.8.21](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.20...v1.8.21) (2022-12-15)

## [1.8.20](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.19...v1.8.20) (2022-12-15)

## [1.8.19](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.18...v1.8.19) (2022-11-15)

## [1.8.18](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.17...v1.8.18) (2022-10-21)

## [1.8.17](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.16...v1.8.17) (2022-10-14)

## [1.8.16](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.15...v1.8.16) (2022-09-13)

## [1.8.15](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.13...v1.8.15) (2022-09-13)

## [1.8.13](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.12...v1.8.13) (2022-09-13)

## [1.8.12](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.11...v1.8.12) (2022-09-13)

## [1.8.11](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.10...v1.8.11) (2022-09-13)

## [1.8.10](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.9...v1.8.10) (2022-08-17)

## [1.8.9](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.8...v1.8.9) (2022-08-17)

## [1.8.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.7...v1.8.8) (2022-08-10)

## [1.8.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.6...v1.8.7) (2022-08-10)

## [1.8.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.5...v1.8.6) (2022-08-09)

## [1.8.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.4...v1.8.5) (2022-08-09)

## [1.8.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.3...v1.8.4) (2022-08-08)

## [1.8.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.2...v1.8.3) (2022-08-05)

## [1.8.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.1...v1.8.2) (2022-08-02)

## [1.8.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.8.0...v1.8.1) (2022-08-02)

# [1.8.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.7.9...v1.8.0) (2022-08-02)

## [1.7.9](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.7.8...v1.7.9) (2022-07-29)

## [1.7.8](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.7.7...v1.7.8) (2022-07-29)

## [1.7.7](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.7.6...v1.7.7) (2022-07-29)

## [1.7.6](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.7.5...v1.7.6) (2022-07-29)

## [1.7.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.7.4...v1.7.5) (2022-07-26)

## [1.7.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.7.3...v1.7.4) (2022-07-21)

## [1.7.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.7.2...v1.7.3) (2022-07-21)

## [1.7.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.7.1...v1.7.2) (2022-07-20)

## [1.7.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.7.0...v1.7.1) (2022-07-19)

# [1.7.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.6.2...v1.7.0) (2022-07-19)

## [1.6.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.6.1...v1.6.2) (2022-07-19)

## [1.6.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.6.0...v1.6.1) (2022-07-16)

# [1.6.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.5.0...v1.6.0) (2022-07-16)

# [1.5.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.4.5...v1.5.0) (2022-07-16)

## [1.4.5](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.4.4...v1.4.5) (2022-07-15)

## [1.4.4](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.4.3...v1.4.4) (2022-07-15)

## [1.4.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.4.2...v1.4.3) (2022-07-15)

## [1.4.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.4.1...v1.4.2) (2022-07-15)

## [1.4.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.4.0...v1.4.1) (2022-07-15)

# [1.4.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.3.3...v1.4.0) (2022-07-15)

## [1.3.3](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.3.2...v1.3.3) (2022-07-11)

## [1.3.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.3.1...v1.3.2) (2022-07-08)

## [1.3.1](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.3.0...v1.3.1) (2022-07-07)

# [1.3.0](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.2.2...v1.3.0) (2022-07-06)

## [1.2.2](http://192.168.226.157:9090/secp/frontend/web-business-components/compare/v1.0.1-alpha.0...v1.2.2) (2022-07-05)

## 1.0.1-alpha.0 (2022-02-23)
