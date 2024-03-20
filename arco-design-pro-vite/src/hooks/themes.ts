import { computed } from 'vue';
import { useAppStore } from '@/store';
import { useDark, useToggle } from '@vueuse/core';

export default function useThemes() {
  const appStore = useAppStore();

  const isDark = useDark({
    selector: 'body',
    attribute: 'arco-theme',
    valueDark: 'dark',
    valueLight: 'light',
    storageKey: 'arco-theme',
    onChanged(dark: boolean) {
      // overridden default behavior
      appStore.toggleTheme(dark);
    },
  });

  const toggleTheme = useToggle(isDark);

  return {
    isDark,
    toggleTheme,
  };
}
