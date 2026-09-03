// Anthropic Learn Color Palette - Tailwind CSS Config
// Generated from: https://www.anthropic.com/learn

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Slate Scale (Neutral)
        slate: {
          50: '#faf9f5',
          100: '#f5f4ed',
          150: '#f0eee6',
          200: '#e8e6dc',
          250: '#dedcd1',
          300: '#d1cfc5',
          350: '#c2c0b6',
          400: '#b0aea5',
          450: '#9c9a92',
          500: '#87867f',
          550: '#73726c',
          600: '#5e5d59',
          650: '#4d4c48',
          700: '#3d3d3a',
          750: '#30302e',
          800: '#262624',
          850: '#1f1e1d',
          900: '#1a1918',
          950: '#141413',
          1000: '#0f0f0e',
        },
        // Accent Colors
        anthropic: {
          light: '#ffffff',
          dark: '#0f0f0e',
          'slate-dark': '#141413',
          oat: '#e3dacc',
          coral: '#ebcece',
          clay: '#d97757',
          cactus: '#bcd1ca',
          fig: '#c46686',
          sky: '#6a9bcc',
          olive: '#788c5d',
          heather: '#cbcadb',
        },
        // Semantic Colors
        semantic: {
          error: '#bf4d43',
          focus: '#2c84db',
        },
      },
      fontFamily: {
        'anthropic-sans': ['anthropicSans', 'system-ui', 'sans-serif'],
        'anthropic-serif': ['anthropicSerif', 'Georgia', 'serif'],
        'anthropic-mono': ['anthropicMono', 'Menlo', 'monospace'],
        'styrene-a': ['styreneA', 'sans-serif'],
        'styrene-b': ['styreneB', 'sans-serif'],
        'tiempos': ['tiemposText', 'Georgia', 'serif'],
        'copernicus': ['copernicus', 'serif'],
        'jetbrains': ['jetBrainsMono', 'Menlo', 'monospace'],
      },
    },
  },
};
