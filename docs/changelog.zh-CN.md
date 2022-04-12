# Arco Design Pro Vue v2.0

## v2.3.4

`2022-04-12`

### 💎 功能优化

- 登录路由配置调整。[#50](https://github.com/arco-design/arco-design-pro-vue/pull/50)

## v2.3.3

`2022-03-29`

### 🆕 新增功能

- 增加自定义上传案例。

### 🐛 问题修复

- 修复 页面缓存不生效 问题。
- 修复 tab bar 滚动样式问题。[#44](https://github.com/arco-design/arco-design-pro-vue/pull/44)

## v2.3.2

`2022-03-22`

### 🆕 新增功能

- 增加多页签及页面缓存功能。

### 🐛 问题修复

- 修复 全局设置开关不展示 问题。
- 避免 @keyup.enter 情况下的多次提交. [#42](https://github.com/arco-design/arco-design-pro-vue/pull/42)

## v2.3.1

`2022-03-15`

### 🐛 问题修复

- 修复 vite-plugin-imagemin 导致的初始化不成功问题。

## v2.3.0

`2022-03-15`

### 🆕 新增功能

- 使用 setup script 进行代码重构。
- 路由自动导入。

### 💎 功能优化

- 项目打包优化。
- 响应式处理和小屏显示优化。

## v2.2.5

`2022-03-08`

### 🆕 新增功能

- 增加了根据不同的运行环境设置相应的 api base URL 功能。[#29](https://github.com/arco-design/arco-design-pro-vue/pull/29)

### 💎 功能优化

- 响应式处理和小屏显示优化。
- 路由监听性能优化。

### 🐛 问题修复

- 可选链导致项目初始化失败。[#31](https://github.com/arco-design/arco-design-pro-vue/issues/31)
- 修复了i18n未设置allowComposition，在win下无法启动的bug。[#32](https://github.com/arco-design/arco-design-pro-vue/pull/32)

## v2.2.4

`2022-03-01`

### 🐛 问题修复

- 修复切换语言后组件内不生效问题。[#27](https://github.com/arco-design/arco-design-pro-vue/issues/27)
- 删除简易模式遗漏文件。

### 💎 功能优化

- vite 基础配置抽离。

## v2.2.3

`2022-02-22`

### 💎 功能优化

- 路由配置增加 hideInMenu 字段。

### 🆕 新增功能

- 初始化项目支持简易模式。 (**需要将 `@arco-design/arco-cli` 升级至 `1.26.0`**)


## v2.2.0

`2022-01-25`

### 💎 功能优化

- icon替换。

### 🆕 新增功能

- 增加权限管理。
- 支持jsx语法。


## v2.1.0

`2022-01-18`

### 💎 功能优化

- 图表配置hook用法优化。
- 项目初始化eslint报错。

### 🆕 新增功能

- 使用 Pinia 替换 Vuex ([#7](https://github.com/arco-design/arco-design-pro-vue/pull/7))

