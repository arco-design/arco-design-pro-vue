// 以模块名前缀作为命名空间，导出后vuex会自动拼上命名空间，导致最终生成的action名称不可用。
// 变量规范：A_USER_LOGIN 第一级表示action单词首字母 第二级为自定义命名空间 后续自定 类型_命名空间_操作行为
// 字符串规范： （命名空间）/（具体action名称）
// app

// user
export const A_USER_LOGIN = 'user/USER_LOGIN';
export const A_USER_LOGOUT = 'user/USER_LOGOUT';
export const A_USER_INFO = 'user/USER_INFO';
