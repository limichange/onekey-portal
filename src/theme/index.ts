export { useTheme } from '@emotion/react';

export const theme = {
  colors: {
    bgDark: '#202340',
    bgLight: '#F3F4F6',
    blue600: '#D9DCF4;',
    blue700: '#374BFA',
    blue800: '#3A49CF',
    blue900: '#2B39B2',
    gray300: '#F7F7FB',
    gray400: '#F3F4F6',
    gray500: '#CECED3',
    gray600: '#9C9DA7',
    gray700: '#6B6D7A',
    gray800: '#393C4E',
    gray900: '#080B22',
    orange700: '#FE8244',
    orange800: '#F6712E',
    orange900: '#F16A26',
    viOrange: '#F6651C',
    cyan: '#0ABFC9',
    magenta: '#FF5D7B',
    white: '#FFFFFF',
    yellow: '#FDC433',
    font1: '#080B22',
    transparent: 'transparent',
  },
  gradients: {
    blue: 'linear-gradient(180deg, #3A49CF 0%, rgba(58, 73, 207, 0.9) 100%)',
    orange: 'linear-gradient(180deg, #FF7E3E 0%, rgba(255, 126, 62, 0.9) 100%)',
    cyan: 'linear-gradient(180deg, #0ABFC9 0%, rgba(10, 191, 201, 0.9) 100%)',
    dark: 'linear-gradient(180deg, #2E314A 0%, rgba(46, 49, 74, 0.9) 100%)',
    red: 'linear-gradient(180deg, #FF5D7B 0%, rgba(255, 93, 123, 0.9) 100%)',
  },
  fonts: {
    PingFangSC: 'PingFang SC, sans-serif',
    StyreneA: 'Styrene A Web, sans-serif',
    Inter: 'Inter, sans-serif',
  },
  transitions: {
    allCubicBezier: 'all .3s cubic-bezier(.4,0,.2,1)',
    allEaseOut: 'all .3s ease-out',
    allEaseIn: 'all .3s ease-in',
    allEase: 'all .3s ease',
    allLinear: 'all .3s linear',
  },
  transforms: {
    rotate180: 'rotate(180deg)',
    rotate90: 'rotate(90deg)',
    rotate0: 'rotate(0deg)',
  },
  zIndex: {
    top: 10000,
    modal: 9000,
    overlay: 8000,
  },
};

export type MediaBreakpointsKey = keyof typeof mediaBreakpoints;

export const mediaBreakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1400,
  xxl: 1600,
  xxxl: 1800,
};

export const mediaBreakpointsKeys = Object.keys(
  mediaBreakpoints,
) as MediaBreakpointsKey[];

export const containerMaxWidth = {
  sm: 540,
  md: 720,
  lg: 1200,
  xl: 1300,
  xxl: 1400,
  xxxl: 1500,
};

export const LanguageMap = {
  zh: '中文',
  en: 'English',
};

export type LanguageMapKeys = keyof typeof LanguageMap;

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof theme.colors;
    fonts: typeof theme.fonts;
    transitions: typeof theme.transitions;
    zIndex: typeof theme.zIndex;
    gradients: typeof theme.gradients;
    transforms: typeof theme.transforms;
  }
}
