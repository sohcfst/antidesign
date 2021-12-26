import { createStitches, globalCss } from '@stitches/react';
import { blue, green, yellow, red, grayA, blackA } from '@radix-ui/colors';

export const globalStyles = globalCss({
  /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */

  /*
    1. Use a more-intuitive box-sizing model.
  */
  '*': {
    boxSizing: 'border-box',
    fontFamily: 'Bodoni Moda, serif;',
    color: 'white',

    /*
      2. Remove default margin
    */
    margin: 0,

    '&::before, &::after': {
      boxSizing: 'border-box',
    },
  },

  /*
    3. Allow percentage-based heights in the application
  */
  'html, body': {
    height: '100%',
  },

  /*
    Typographic tweaks!
      4. Add accessible line-height
      5. Improve text rendering
  */
  body: {
    background: 'rgb(21, 23, 24)',
    lineHeight: 1.5,
    '-webkit-font-smoothing': 'antialiased',
  },

  /*
    6. Improve media defaults
  */
  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%',
  },

  /*
    7. Remove built-in form typography styles
  */
  'input, button, textarea, select': {
    font: 'inherit',
  },

  /*
    8. Avoid text overflows
  */
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },

  /*
    9. Create a root stacking context
  */
  '#root, #__next': {
    isolation: 'isolate',
  },
});

export const {
  css,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  styled,
} = createStitches({
  theme: {
    radii: {
      br: '4px',
    },
    colors: {
      ...blue,
      ...green,
      ...yellow,
      ...red,

      accent1: '$blue1',
      accent2: '$blue2',
      accent3: '$blue3',
      accent4: '$blue4',
      accent5: '$blue5',
      accent6: '$blue6',
      accent7: '$blue7',
      accent8: '$blue8',
      accent9: '$blue9',
      accent10: '$blue10',
      accent11: '$blue11',
      accent12: '$blue12',

      success1: '$green1',
      success2: '$green2',
      // repeat for all steps

      warning1: '$yellow1',
      warning2: '$yellow2',
      // repeat for all steps

      danger1: '$red1',
      danger2: '$red2',
      // repeat for all steps
    },
  },
  media: {
    breakpoint640: '(min-width: 640px)',
    breakpoint768: '(min-width: 768px)',
    breakpoint1024: '(min-width: 1024px)',
  },
  utils: {
    // Abbreviated margin properties
    m: (value: number) => ({
      margin: value,
    }),
    mt: (value: number) => ({
      marginTop: value,
    }),
    mr: (value: number) => ({
      marginRight: value,
    }),
    mb: (value: number) => ({
      marginBottom: value,
    }),
    ml: (value: number) => ({
      marginLeft: value,
    }),
    mx: (value: number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    pt: (value: number) => ({
      paddingTop: value,
    }),
    py: (value: number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    px: (value: number) => ({
      paddingRight: value,
      paddingLeft: value,
    }),

    // A property for applying width/height together
    size: (value: number) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: number) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value: number) => ({
      borderRadius: value,
    }),
  },
});
