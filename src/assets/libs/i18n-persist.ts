import { onBeforeMount, watch } from 'vue';
import { useI18n } from 'vue-i18n';

export function useI18nPersist() {
  const i18n = useI18n();
  const watcher = watch(i18n.locale, (newLocale) => {
    localStorage.setItem('locale', newLocale);
  });
  onBeforeMount(() => {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale && i18n.availableLocales.includes(savedLocale)) {
      i18n.locale.value = savedLocale;
    }
  });
  return {
    stop: () => watcher(),
  };
}
