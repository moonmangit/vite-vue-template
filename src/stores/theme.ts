import { defineStore } from 'pinia';
import { ref } from 'vue';

const DARK_THEME_LOCAL_STORAGE_KEY = 'dark-theme';
const DEFAULT_DARK_THEME = false; // by default it was 'light'

export const useTheme = defineStore('theme', () => {
  const storedDarkTheme = localStorage.getItem(DARK_THEME_LOCAL_STORAGE_KEY);
  const initialDarkTheme =
    storedDarkTheme !== null ? JSON.parse(storedDarkTheme) : DEFAULT_DARK_THEME;
  // if no dark theme key make it existed by default value
  if (storedDarkTheme === null) {
    localStorage.setItem(
      DARK_THEME_LOCAL_STORAGE_KEY,
      JSON.stringify(initialDarkTheme)
    );
  }
  // sync
  const isDark = ref(initialDarkTheme);
  syncThemeStateWithHtmlClass();

  function toggleTheme() {
    isDark.value = !isDark.value;
    localStorage.setItem(
      DARK_THEME_LOCAL_STORAGE_KEY,
      JSON.stringify(isDark.value)
    );
    syncThemeStateWithHtmlClass();
  }

  function syncThemeStateWithHtmlClass() {
    // using toggle
    document.documentElement.classList.toggle('dark', isDark.value);
  }

  return {
    isDark,
    toggleTheme,
  };
});
