import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  media: {
    bp1: '(min-width: 425px)',
    bp2: '(min-width: 768px)',
  },

  theme: {
    colors: {
      'base-background': '#202024',
      'base-card': '#F3F2F2',
      'base-input': '#EEEDED',
      'base-border-input': '#E6E5E5',
      'base-label': '#8D8686',

      'brand-yellow': '#DBAC2C',
      'brand-yellow-dark': '#C47F17',

      white: '#FFFFFF',
    },
  },
})
