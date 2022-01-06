import { computed } from 'vue';
import { useStore } from '@/store';

export default function useThemes() {
  const store = useStore();
  const isDark = computed(() => {
    return store.state.app.theme === 'dark';
  });
  return {
    isDark,
  };
}
