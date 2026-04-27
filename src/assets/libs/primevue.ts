import type { createApp } from 'vue';
import Aura from '@primeuix/themes/aura';
import Primevue from 'primevue/config';
import Button from 'primevue/button';
import { definePreset } from '@primeuix/themes';

const customTheme = definePreset(Aura, {
  primitive: {
    green: {
      50: 'var(--color-emerald-50)',
      100: 'var(--color-emerald-100)',
      200: 'var(--color-emerald-200)',
      300: 'var(--color-emerald-300)',
      400: 'var(--color-emerald-400)',
      500: 'var(--color-emerald-500)',
      600: 'var(--color-emerald-600)',
      700: 'var(--color-emerald-700)',
      800: 'var(--color-emerald-800)',
      900: 'var(--color-emerald-900)',
      950: 'var(--color-emerald-950)',
    },
  },
  semantic: {
    primary: {
      50: 'var(--color-primary-50)',
      100: 'var(--color-primary-100)',
      200: 'var(--color-primary-200)',
      300: 'var(--color-primary-300)',
      400: 'var(--color-primary-400)',
      500: 'var(--color-primary-500)',
      600: 'var(--color-primary-600)',
      700: 'var(--color-primary-700)',
      800: 'var(--color-primary-800)',
      900: 'var(--color-primary-900)',
      950: 'var(--color-primary-950)',
    },
    colorScheme: {
      light: {
        surface: {
          0: 'var(--color-surface-0)',
          50: 'var(--color-surface-50)',
          100: 'var(--color-surface-100)',
          200: 'var(--color-surface-200)',
          300: 'var(--color-surface-300)',
          400: 'var(--color-surface-400)',
          500: 'var(--color-surface-500)',
          600: 'var(--color-surface-600)',
          700: 'var(--color-surface-700)',
          800: 'var(--color-surface-800)',
          900: 'var(--color-surface-900)',
          950: 'var(--color-surface-950)',
        },
      },
    },
  },
});

export function appPrimevueConfig(app: ReturnType<typeof createApp>) {
  app.use(Primevue, {
    theme: {
      preset: customTheme,
      options: {
        darkModeSelector: '.dark',
      },
    },
  });
  app.component('PButton', Button);
}

declare module 'vue' {
  export interface GlobalComponents {
    PButton: typeof Button;
  }
}
