import { ActionContext } from 'vuex';
import { MutationTypes as UserMTypes } from './modules/user/mutation-types';
import { MutationTypes as AppMTypes } from './modules/app/mutation-types';
import { ActionTypes as UserATypes } from './modules/user/action-types';
// import { ActionTypes as AppATypes } from './modules/app/action-types';
import { LoginData } from '@/api/user';

/// state
export interface RootState {
  root: boolean;
}

export interface AppStateTypes {
  theme: string;
  colorWeek: boolean;
  navbar: boolean;
  menu: boolean;
  menuCollapse: boolean;
  footer: boolean;
  themeColor: string;
  menuWidth: number;
  [key: string]: unknown;
}

export interface UserStateTypes {
  name?: string;
  avatar?: string;
  job?: string;
  organization?: string;
  location?: string;
  email?: string;
  introduction?: string;
  personalWebsite?: string;
  jobName?: string;
  organizationName?: string;
  locationName?: string;
}

// getters
export interface AppGettersTypes {
  appCurrentSetting(state: AppStateTypes): AppStateTypes;
}

export interface UserGettersTypes {
  userInfo(state: UserStateTypes): UserStateTypes;
}

// mutation
export type UserMutationsTypes<S = UserStateTypes> = {
  [UserMTypes.USER_RESET_INFO](state: S): void;
  [UserMTypes.USER_SET_INFO](state: S, payload: UserStateTypes): void;
};

export type AppMutationsTypes<S = AppStateTypes> = {
  [AppMTypes.APP_UPDATE_SETTING](
    state: S,
    payload: Partial<AppStateTypes>
  ): void;
  [AppMTypes.TOGGLE_THEME](state: S): void;
};

// action
export type UserAugmentedActionContext = {
  commit<K extends keyof UserMutationsTypes>(
    key: K,
    payload: Parameters<UserMutationsTypes[K]>[1]
  ): ReturnType<UserMutationsTypes[K]>;
} & Omit<ActionContext<UserStateTypes, RootState>, 'commit'>;

export interface UserActionsTypes {
  [UserATypes.USER_INFO]({
    commit,
  }: UserAugmentedActionContext): Promise<unknown>;
  [UserATypes.USER_LOGIN](
    { commit }: UserAugmentedActionContext,
    payload: LoginData
  ): Promise<unknown>;
  [UserATypes.USER_LOGOUT]({
    commit,
  }: UserAugmentedActionContext): Promise<unknown>;
}

export type AppAugmentedActionContext = {
  commit<K extends keyof AppMutationsTypes>(
    key: K,
    payload: Parameters<AppMutationsTypes[K]>[1]
  ): ReturnType<AppMutationsTypes[K]>;
} & Omit<ActionContext<UserStateTypes, RootState>, 'commit'>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppActionsTypes {}
// [AppATypes.DEFAULT_SETTING]({
//   commit,
// }: AppAugmentedActionContext): Promise<unknown>;
