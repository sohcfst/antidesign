import { styled } from '~/styles/stitches.config';

export const Flex = styled('div', {
  display: 'flex',

  // without passing any values the api expose, then the element will
  // only use the the base styles we set at the top
  variants: {
    // the prop / api that we expose
    flexDirection: {
      // the options that we have and the style that will apply when we pass this value
      // into the the prop / api
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
      },
    },
    // etc
    alignItems: {
      center: {
        alignItems: 'center',
      },
      start: {
        alignItems: 'start',
      },
      // etc
    },
    position: {
      relative: {
        position: 'relative',
      },
    },
  },
});
