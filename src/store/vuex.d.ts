// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// // import { ComponentCustomProperties } from 'vue';
// import { Store } from 'vuex';

// declare module '@vue/runtime-core' {
//   // 声明自己的 store state
//   interface GlobalState {
//     theme?: string;
//     //   settings?: typeof defaultSettings;
//     userInfo?: {
//       name?: string;
//       avatar?: string;
//       job?: string;
//       organization?: string;
//       location?: string;
//       email?: string;
//     };
//   }
//   interface IDefaultSetting {
//     colorWeek: boolean;
//     navbar: boolean;
//     menu: boolean;
//     footer: boolean;
//     themeColor: string;
//     menuWidth: number;
//   }
//   interface State {
//     count: number;
//     GlobalState: GlobalState;
//     defaultSetting: IDefaultSetting;
//   }

//   // 为 `this.$store` 提供类型声明
//   // eslint-disable-next-line no-shadow
//   interface ComponentCustomProperties {
//     $store: Store<State>;
//   }
// }
