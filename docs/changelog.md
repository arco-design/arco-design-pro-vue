# Arco Design Pro Vue v2.0

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

### 🐛 bugfix

- Optional chain causes item initialization to fail. [#31](https://github.com/arco-design/arco-design-pro-vue/issues/31)
- Fixed the bug that i18n did not set allowComposition and could not start under windows.[#32](https://github.com/arco-design/arco-design-pro-vue/pull/32)

## v2.2.4

`2022-03-01`

### 🐛 bugfix

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

- Echarts configuration hook usage optimization.
- Eslint reported an error when initializing the project.

### 🆕 Feature

- Migrate Vuex to Pinia. ([#7](https://github.com/arco-design/arco-design-pro-vue/pull/7))
