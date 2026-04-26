import type { useRoute } from 'vue-router';
import Layouts from '../../view/layouts';
import Default from '../../view/layouts/Default.vue';

export function resolveLayout(route: ReturnType<typeof useRoute>) {
  const meta = route.meta;
  if (meta?.layout) {
    return Layouts[meta.layout as keyof typeof Layouts] || Default;
  } else {
    return Default;
  }
}
