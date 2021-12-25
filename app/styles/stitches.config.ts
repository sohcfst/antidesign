import { createStitches, globalCss } from '@stitches/react';
import { blue, green, yellow, red } from '@radix-ui/colors';

export const globalStyles = globalCss({
  body: { background: 'black' },
  '*': {
    boxSizing: 'border-box',
    fontFamily: 'Bodoni Moda, serif;',
    color: 'white',
    margin: 0,
  },
  img: {
    display: 'block',
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
