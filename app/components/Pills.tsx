import { styled } from '~/styles/stitches.config';

export const StyledPill = styled('strong', {
  borderRadius: '16px',
  width: 'fit-content',
  px: 12,
  py: 2,

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
    },
  },
});
