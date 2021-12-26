import { styled } from '~/styles/stitches.config';

export const Flex = styled('div', {
  // implicitly have Flex default to display='flex' defaults
  display: 'flex',

  variants: {
    // the prop / api that we expose
    // <Flex flexDirection="column" />, flex-direction: 'column' will be applied to the Flex component
    flexDirection: {
      // the value that we pass into the flexDirection prop
      column: {
        flexDirection: 'column', // the styles that are applied when we pass in the above value
      },
      // the value that we pass into the flexDirection prop
      row: {
        flexDirection: 'row', // the styles that are applied when we pass in the above value
      },
    },

    // etc
    alignItems: {
      // <Flex alignItems="center" />, align-items: center will be applied to the Flex component
      center: {
        alignItems: 'center',
      },
      start: {
        alignItems: 'start',
      },
    },

    position: {
      relative: {
        position: 'relative',
      },
    },

    // shorthand for centering bc im a dummy & always forget about the axis flipping on my ass w/o warning with flex-direction
    layout: {
      centerColumn: {
        flexDirection: 'column',
        alignItems: 'center',
      },

      centerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
    },
  },
});
