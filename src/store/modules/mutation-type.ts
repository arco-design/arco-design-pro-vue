// 以模块名前缀作为命名空间，导出后vuex会自动拼上命名空间，导致最终生成的mutation名称不可用。
// 变量规范：M_USER_LOGIN 第一级表示mutation单词首字母 第二级为自定义命名空间 后续自定 类型_命名空间_操作行为
// 字符串规范： （命名空间）/（具体mutation名称）
// app
export const M_APP_UPDATE_SETTING = 'APP/UPDATE_SETTING';
export const M_TOGGLE_THEME = 'APP/TOGGLE_THEME';

// user
export const M_USER_SET_INFO = 'USER/SET_INFO';
export const M_USER_RESET_INFO = 'USER/RESET_INFO';
