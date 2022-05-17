# Arco Design Pro Vue v2.0

## v2.4.1

`2022-05-10`
  
### 🐛 Bugfix

- Simple mode menu text display problem.

## v2.4.0

`2022-05-10`

### 🆕 Feature

- Added server-side menu configuration feature.[#75](https://github.com/arco-design/arco-design-pro-vue/pull/75)

### 💎 Optimization

- The routing level is flattened and page caching is supported.[#74](https://github.com/arco-design/arco-design-pro-vue/pull/74)
  
### 🐛 Bugfix

- The problem of building TS errors caused by the upgrade of the arco component library.[#74](https://github.com/arco-design/arco-design-pro-vue/pull/74)
- The file cannot be found problem caused by the upgrade of the arco component library.[#71](https://github.com/arco-design/arco-design-pro-vue/issues/71)

## v2.3.6


`2022-04-26`

### 🆕 Feature

- Login page remember password function.

### 💎 Optimization

- Menu components added support for top-level items.[#59](https://github.com/arco-design/arco-design-pro-vue/pull/59)
  
### 🐛 Bugfix

- Fixed tab bar first click invalid.[#64](https://github.com/arco-design/arco-design-pro-vue/issues/64)
- Fix not found page redirects.

## v2.3.4

`2022-04-12`

### 💎 Optimization

- Login route configuration adjustment。[#50](https://github.com/arco-design/arco-design-pro-vue/pull/50)

## v2.3.3

`2022-03-29`

### 🆕 Feature

- Add custom upload case.

### 🐛 Bugfix

- Fix the problem that page cache does not take effect.
- Fix tab bar scrolling style issue. [#44](https://github.com/arco-design/arco-design-pro-vue/pull/44)

## v2.3.2

`2022-03-22`

### 🆕 Feature

- Add multi-tab and page cache。

### 🐛 Bugfix

- Fix the problem that the global settings switch is not displayed.
- Avoid double submit on @keyup.enter. [#42](https://github.com/arco-design/arco-design-pro-vue/pull/42)

## v2.3.1

`2022-03-15`

### 🐛 Bugfix

- Fix the problem of unsuccessful initialization caused by vite-plugin-imagemin.

## v2.3.0

`2022-03-15`

### 🆕 Feature

- Code refactoring using setup script.
- Routes are automatically imported.

### 💎 Optimization

- Packaging optimization.
- Responsive processing and small screen display optimization.

## v2.2.5

`2022-03-08`

### 🆕 Feature

- Added the function of setting the corresponding api base URL according to different operating environments. [#29](https://github.com/arco-design/arco-design-pro-vue/pull/29)

### 💎 Optimization

- Responsive processing and small screen display optimization.
- Route monitoring performance optimization.

### 🐛 Bugfix

- Optional chain causes item initialization to fail. [#31](https://github.com/arco-design/arco-design-pro-vue/issues/31)
- Fixed the bug that i18n did not set allowComposition and could not start under windows.[#32](https://github.com/arco-design/arco-design-pro-vue/pull/32)

## v2.2.4

`2022-03-01`

### 🐛 Bugfix

- Fix the problem that the component does not take effect after switching the language. [#27](https://github.com/arco-design/arco-design-pro-vue/issues/27)
- Delete easy mode missing files.

### 💎 Optimization

- The basic configuration of vite is extracted.

## v2.2.3

`2022-02-22`

### 💎 Optimization

- HideInMenu field was added to route configuration.

### 🆕 Feature

- Initializing projects supports simple mode. (**Need to upgrade `@arco-design/arco-cli` to `1.26.0`**)


## v2.2.0

`2022-01-25`

### 💎 Optimization

- Icon to replace.

### 🆕 Feature

- Add permission management.
- Support jsx syntax.


## v2.1.0

`2022-01-18`

### 💎 Optimization

- ECharts configuration hook usage optimization.
- ESLint reported an error when initializing the project.

### 🆕 Feature

- Migrate Vuex to Pinia. ([#7](https://github.com/arco-design/arco-design-pro-vue/pull/7))
