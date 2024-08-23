## 2.0.0-alph.7(2023-03-16)
- Upgraded: 升级`@gw/gw-scripts`版本由`^1.1.17`至`^1.1.18`,升级`@gw/gw-utils`版本由`^1.0.96`至`^1.0.104`,升级`@gw/stylelint-config-gw`版本由`^1.0.71`至`^1.0.72`,升级`@gw/gw-request`版本由`^1.1.20`至`^1.1.31`,升级`@gw/web-basic-components`版本由`^1.0.0-alph.5`至`^1.0.0-alph.10`,升级`@gw/hooks`版本由`^1.0.3`至`^1.0.6`
- Added: 在package.json中加libraryName字段，以配合webpack做externals

# 2.0.0-alph.0

- Added: 新增 GWAppearance 平台外框组件
- Added: 新增 GWTabsContainer 多标签容器组件
# 1.9.22(2023-03-29)

- ItemMenuTypes: 新增 addEquip 和 cancel 操作类型
  
# 1.9.21(2023-03-23)

- Fixed: 透传 extraParam

# 1.9.20(2023-03-23)

- Modified: GWTable 中列头搜索接受 extraParam

# 1.9.18(2023-03-20)

- Fixed: 即时清除 I18N 监听事件

# 1.9.17(2023-03-17)

- Modified 当没有命中语言的 key,将优先尝试匹配最相近的语言

# 1.9.16(2023-03-13)

- transfer 关闭后请求参数置空

# 1.9.15(2023-03-13)

- transfer 参数为空判断

# 1.9.14(2023-03-10)

- transfer 左侧搜索栏添加现实 flag

- # 1.9.13(2023-03-08)

- 1.9.12 废弃！请勿使用！！！

# 1.9.12(2023-03-07)

- Modified: `transfer` 组件开启左侧搜索功能

# 1.9.11(2023-02-28)

- Modified: `GWI18NProvider`组件语言侦测顺序改为：'querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'

# 1.9.10(2023-02-28)

- Modified: `GWI18NProvider`组件去除 defaultLanguage 配置，以侦测为兜底语言

# 1.9.9(2023-02-27)

- Fixed: 修复`GWI18NProvider`组件初始化时没有拿到 I18N 实例的问题
- Fixed: 修复语言包 key 不一致的问题
- Modified: 完全移除 useI18n 中的 t 函数

# 1.9.8(2023-02-27)

- Modified: `GWI18NProvider`组件请求语言包失败时默认使用英语，并且支持配置

# 1.9.7(2023-02-24)

- Modified: 废弃 t 函数
- Chroe: 打包时移除 i18n、react-i18next

# 1.9.6(2023-02-23)

- Fixed: 修复 ts 错误

# 1.9.5 (2023-02-23)

- Modified: `GWI18NProvider`组件内部维护当前语言

# 1.9.4(2023-02-22)

- Fixed: 修复`GWI18NProvider`初始化语言包异步问题

# 1.9.3(2023-02-21)

- Modified: `GWI18NProvider`国际化组件导出 I18N 实例。

# 1.9.2(2023-02-20)

- Modified: `GWI18NProvider`国际化组件,languagesManifestUrl 属性改为必填，默认值改为完成地址。

# 1.9.1(2023-02-20)

- Modified: 服务端允许请求跨域，移除了组件中关于代理的部分

# 1.9.0(2023-02-20)

- Added: 新增`GWI18NProvider`国际化组件

# 1.8.24 (2023-02-02)

- Modified: GWTable 筛选条件改变后强制回到第一页

# 1.8.23（2023-02-01）

- Fixed: 修复 getList 重复请求的问题

# 1.8.22(2023-02-01)

- Fixed: GWTable 分页器 current 接收后端数据

# 1.8.21(2022-12-15)

- Fixed: 恢复表单项 key 值

# 1.8.20(2022-12-15)

- Modified: 在 onGwTabaleChange 中返回 filterParams
- Fixed: 修复表单项更新值不生效的问题

# 1.8.19(2022-11-15)

- Modified: 在 onGwTabaleChange 中返回 selectedRows
- Modified: 将导出文件的请求路径增设在 leadingOutConfig 里

# 1.8.18(2022-10-21)

- Added: 新增`primary-wiring-diagram`业务组件，用于展示和绘制一次接线图
- Modified: `action-track`业务组件自动获取`Redux`用户信息

# 1.8.17(2022-10-11)

- Added: 新增`action-track`业务组件，其作用是做 web 应用的**页面浏览埋点**

# 1.8.14(2022-09-13）

- Fixed: extraparam 不重置当前页

# 1.8.11(2022-09-13)

- Fixed: Table props.extraParam 深比较。

# 1.8.9(2022-08-17)

- Chroe: 更新依赖
- Modified: `GWTable`组件支持传入 size
- Modified: `GWTable`组件支持 getList 依赖+TableName
- Modified: `GWTable`组件调整 SearchBolck 布局

# 1.8.8(2022-08-10)

- Style: `GWSearch`组件样式调整
- Chroe: 更新依赖

# 1.8.7(2022-08-10)

- Style: `GWSearch`组件 定制字体为 14px
- Table: `GWTable`组件 table 最大高度根据浏览器窗口大小调整

# 1.8.6(2022-08-09)

- Style: 设置`.ant-input-lg`、`.ant-btn-lg`字体为 14px
- Style: 定制 `GWSearch` 样式
- Fixed: `ColDatepicker`禁止清除、宽度增加 20px

# 1.8.5(2022-08-09)

- Docs: 增加`GWtable`、`GWForm`组件示例
- Style: 移除所有 global 标签
- Fixed: `GWForm`组件中，`Select`控件默认占满宽度，`Password`控件 Size 默认为 middle,`label`默认占 1/4 宽
- Fixed: 修复`Modal`组件自定义样式不生效的问题
- Fixed: `GWSearch`组件默认显示箭头
- Style: 移除`ServiceNav`组件的图标样式
- Chroe: `GWTable`、`GWTree`组件中 改用 less 方式修改 antd 样式
- Chroe: 更新依赖

# 1.8.4(2022-08-08)

- Chroe: 更新依赖
- Chroe: 移除 basic 文件夹
- Delete: 移除时间组件
- Chroe: 移除 antd 依赖
- Chroe: 更改 svg 编译范围
- Style：变更 antd 样式的引用方式

# 1.8.3(2022-08-05)

- Reverted: `service-nav`组件中**物管理中心**的 url 由`/admin`恢复为`/`

# 1.8.2(2022-08-02)

- Fixed: 修复`ColSearch`设置 options 没有生效的问题

# 1.8.1(2022-08-02)

- Added: `ColSearch`组件支持手动设置备选项

# 1.8.0(2022-08-02)

- Fixed: `ServiceNav`组件去除 serviceList 属性
- Added: `ColSearch`组件增加下拉框、时间选择两个组件
- Added: `GWTable`组件 filterType 增加 Between、Select 两种类型

# 1.7.8(2022-07-29)

- Chroe: 更新依赖 basic

# 1.7.7(2022-07-29)

- Chroe: 更新依赖 hooks

# 1.7.6(2022-07-29)

- Fixed: 修复 openFormModal onOk 类型错误
- Fixed: 修复 Cascader 类型错误
- Chroe: 更新依赖 utils、hooks

# 1.7.5(2022-07-26)

- Modified: `service-nav`组件中**物管理中心**的 url 指定为/admin

# 1.7.4(2022-07-21)

- Fixed: `GWTable`组件，保存新增、复制新增加入 loading 机制
- Fixed: 修复`复制新增`没有关闭 loading 的问题

# 1.7.3(2022-07-21)

- Fixed: 修复`GWTable`接口错误后,loading 没有取消的问题

# 1.7.2(2022-07-20)

- Added: `Form`组件支持 confirmloading
- Docs: 修复示例中`Icon`组件、 `Tree`组件样式污染问题

# 1.7.1(2022-07-19)

- Style: 调整`GWTree`组件的图标样式

# 1.7.0(2022-07-19)

- Added: `GWTree`组件正式使用
- Chroe: 更新依赖`@gw/gw-scripts`、`@gw/gw-utils`

# 1.6.2(2022-07-19)

- Fixed: `FormAutoCompelete` 组件改用 initContent 属性为输入框赋初始值
- Fixed: `openFormModal`服务开启 destoryOnClose
- Chroe: 更新依赖`@gw/gw-scripts`

# 1.6.1(2022-07-16)

- Fixed: 去除重复导出的类型 FormItem
- Fixed: 类型 FormItem 仅从`GWForm`中引用

# 1.6.0(2022-07-16)

- Added: `GWForm`组件正式使用
- Added: `openFormModal`服务正式使用

# 1.5.0(2022-07-16)

- Added: `GWIcon`组件 正式使用
- Fixed: 修改部分 svg 的 title
- Added: 增加授权图标
- Style: 操作列 svg 样式改为从 col calssName 定义
- Fixed: `GWTable`组件支持替换默认操作的图标

# 1.4.5(2022-07-15)

- Fixed: `FormAutoCompelete`组件初始值改为""

# 1.4.4(2022-07-15)

- Fixed: 修正 handleFormGroupData 参数 event 的类型
- Fixed: 修正 `form`组件中 latestData 的类型

# 1.4.3(2022-07-15)

- Fixed: 重定义 FormGroupData 类型

# 1.4.2(2022-07-15)

- Fixed: 在 openFormModal 时透传 formGroupName 属性
- Fixed: 在 `table`组件透传 formGroupName 属性
- Fixed: 修正 form 中 formGroupData 类型

# 1.4.1(2022-07-15)

- Fixed: antd 版本降为 4.16.11
- Fixed: 修复降 antd 版本导致的类型错误

# 1.4.0(2022-07-15)

- Fixed: 修复`GWTable`中没有使用 FormItem.name 替代 FormItem.key 的问题
- Added: 迁入 GWTabs 组件
- Style: 为行插件注入默认样式
- Added: `GWIcon`组件 增加 tree 图标
- Fixed: 修正 formGroupEvent 类型错误

# 1.3.3(2022-07-11)

- Added: `ColSearch`组件支持配置是否调用备选项接口

# 1.3.2(2022-07-08)

- Fixed: 在`Form`的`options`中添加 disabled 属性
- Fixed: 去除`GwTable`组件中错误的类型定义
- Fixed: 对`ColSearch`组件中备选项接口返回结果去重
- Fixed: `GWTable`组件中 extraParams 字段变化时不再重置 pageSize

# 1.3.1(2022-07-07)

- Fixed: 修复 `formModal`组件 脱离上下文的问题
- Fixed: 修复 `openFormModal`服务，onOk 函数类型错误
- Added: `ServiceNav` 组件增加 数据中心 链接

# 1.3.0(2022-07-06)

- Fixed: GwIcon 名称更正
- Added: `DynamicForm`组件 支持自定义表单控件
- Added：`DynamicForm`组件 的 `formItem` 移除 key 字段，用 name 代替
- Fixed: 暂时移除 ts 映射 API 功能

# 1.2.2(2022-07-05)

- Fixed: svg 以组件形式引入
- Fixed: GwTable 名称校正

# 1.2.1(2022-07-04)

- Fixed: 主题样式常量移入 packages

# 1.2.0(2022-07-04)

- Added: 迁入低代码 `table` 组件，支持 curd 快速配置

# 1.1.5(2022-07-01)

- Added: `mqtt-redux`组件支持一次监听（onMessage）多个 topic

# 1.0.4(2022-05-23)

- Added: `service-nav`组件新增`name`属性

# 1.0.1(2022-02-22)

- Added: 新增`FetchToken`组件，定时刷新`token`
- Added: 新增`ScheduledTaskProvider`组件，订阅服务端定时消息
- Fixed: 修复 mqtt 销毁后新的 init 不能正常初始化
