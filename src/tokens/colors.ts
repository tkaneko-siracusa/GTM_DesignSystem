/**
 * カラートークン定数
 * CSS変数（globals.css @theme）と同期。プログラム的アクセス用。
 * @polastack/design-system と同一のブランドカラーパレット。
 */

export const colors = {
  primary: {
    50: '#f0fdfb',
    100: '#cdfbf0',
    200: '#9bf7e2',
    300: '#61ebd0',
    400: '#2fd4ba',
    500: '#1BA491',
    600: '#138575',
    700: '#146b5f',
    800: '#15564e',
    900: '#134841',
    950: '#042c28',
  },
  neutral: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b',
  },
  success: {
    50: '#f0fdf4',
    500: '#22c55e',
    600: '#16a34a',
  },
  warning: {
    50: '#fffbeb',
    500: '#f59e0b',
    600: '#d97706',
  },
  error: {
    50: '#fef2f2',
    500: '#ef4444',
    600: '#dc2626',
  },
  info: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
  },
} as const;

export type ColorScale = keyof typeof colors;
