import { styled } from '~/styles/stitches.config';

export const StyledPill = styled('strong', {
  borderRadius: '16px',
  width: 'fit-content',
  px: 12,
  py: 2,
  fontSize: 14,

  variants: {
    pillType: {
      music: {
        backgroundColor: '$lime1',
        border: `1px solid $lime7`,
        color: '$lime11',
      },
      engineering: {
        backgroundColor: '$tomato1',
        border: `1px solid $tomato7`,
        color: `$tomato11`,
      },
      cooking: {
        backgroundColor: `$cyan1`,
        border: `1px solid $cyan7`,
        color: `$cyan11`,
      },
      design: {
        backgroundColor: `$yellow1`,
        border: `1px solid $yellow7`,
        color: `$yellow11`,
      },

      systems: {
        backgroundColor: `$whiteA2`,
        border: `1px solid $whiteA9`,
        color: `$whiteA12`,
      },
    },
  },
});
