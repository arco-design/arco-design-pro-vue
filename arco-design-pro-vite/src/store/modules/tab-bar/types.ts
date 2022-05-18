export interface TagProps {
  title: string;
  name: string;
  fullPath: string;
  query?: any;
}

export interface TabBarState {
  tagList: TagProps[];
  cacheTabList: Set<string>;
}
