/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./resources/**/*.edge', './resources/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {},
  },
  // add daisyUI plugin
  plugins: [daisyui],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: ['cupcake'],
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root',
  },
}
